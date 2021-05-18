# Getting Started

## Prerequisites
- A physical server or virtual machine with Linux (Latest Debian or Ubuntu server should work just fine).
- [Docker](https://docs.docker.com/engine/install/)
- [Docker-compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Capacity Planning
As the software will store (lots of) routing table snapshots, appropiate sizing must be calculated to avoid storage issues in the future.

Actual development deployment reference:
- 2 route collectors are being monitored:
  -  `route-collector.scl.pch.net` (from Jan 1, 2018)
  -  `route-collector.ros.pch.net` (from Jan 1, 2020)
- Daily snapshot grabbing for both route-collector is configured (using PCH daily snapshot driver)
- 1,666 routing snapshots saved and parsed on database
- A total of **27,735,770** saved routes using **2.7GB** of storage (just considering `ip_routes` table)
- 98,549 registered autonomous systems
- A total parent folder size of **3.8GB**

The following minimum requirements are recommmended:
- 70GB of flash storage (to increase performance for database queries)
- 8GB RAM available to database container

## Manual Installation

1. Clone github repository and checkout develop branch and checkout `develop` branch (no stable release available at the moment).
   ```bash
   git clone git@github.com:aspathproject/aspath.git
   cd aspath
   git checkout develop
   ```

2. Create configuration file: copying the example configuration should be enough to start. From the project root folder execute:
   ```bash
   cd configuration
   cp aspath.toml.dist aspath.toml
   ```

3. Build containers and start application
   ```bash
   docker-compose up --no-start
   docker-compose start
   ```

4. Check that all containers are running properly
   
   <code-group>
   <code-block title="Command" active>
   ```bash
   docker ps
   ```
   </code-block>

   <code-block title="Expected Output">
   ```bash
    CONTAINER ID        IMAGE                              COMMAND                  CREATED             STATUS              PORTS                    NAMES
    ca469fa9a46d        aspath_celerybeat                  "/start_celerybeat.sh"   8 hours ago         Up 8 hours          80/tcp                   aspath_celerybeat_1
    524466103b94        aspath_frontend                    "docker-entrypoint.s…"   8 hours ago         Up 8 hours          0.0.0.0:8080->8080/tcp   aspath_frontend_1
    f287b14c775e        aspath_celery_worker               "/start_celery.sh"       8 hours ago         Up 8 hours          80/tcp                   aspath_celery_worker_1
    f0fcf678334d        aspath_backend                     "/start-reload.sh"       8 hours ago         Up 8 hours          0.0.0.0:8000->80/tcp     aspath_backend_1
    021d70861f92        redis:6.2.1-alpine                 "docker-entrypoint.s…"   9 hours ago         Up 8 hours          6379/tcp                 aspath_redis_1
    2d592f6615b4        timescale/timescaledb:2.1.1-pg13   "docker-entrypoint.s…"   9 hours ago         Up 8 hours          0.0.0.0:5431->5432/tcp   aspath_timescaledb_1
   ```
   </code-block>
   </code-group>

5. Check database versioning status

   <code-group>
   <code-block title="Command" active>
   ```bash
   docker-compose exec backend masonite-orm migrate:status
   ```
   </code-block>

   <code-block title="Expected Output">
   ```bash
    +------+----------------------------------------------------------------+
    | Ran? | Migration                                                      |
    +------+----------------------------------------------------------------+
    | Y    | 2021_04_10_180153_migration_for_datasets_table                 |
    | Y    | 2021_04_10_184139_migration_for_autonomous_systems_table       |
    | Y    | 2021_04_10_184209_migration_for_internet_exchange_points_table |
    | Y    | 2021_04_10_184330_migration_for_route_collectors               |
    | Y    | 2021_04_10_184340_migration_for_routing_snapshots              |
    | Y    | 2021_04_10_184350_migration_for_ip_routes_table                |
    | Y    | 2021_04_12_220019_create_hypertable_for_ip_routes              |
    | Y    | 2021_04_22_042301_AddSlugToInternetExchangePoints              |
    | Y    | 2021_05_09_043427_add_driver_column                            |
    +------+----------------------------------------------------------------+
   ```
   </code-block>
   </code-group>

6. To run pending migrations execute:
   ```bash
   docker-compose exec backend masonite-orm migrate
   ```

7. A restart might be needed after a successful migration. To restart the whole system use the following command
   ```bash
   docker-compose restart
   ```

8. Deployment should be live now on `0.0.0.0:8080` 🔥 you can do a manual health check locally executing the following command on the docker machine:

   <code-group>
   <code-block title="Command" active>
   ```bash
   curl localhost:8080/api/
   ```
   </code-block>

   <code-block title="Expected Output">
   ```bash
   {"Hello":"from ASPATH project"}
   ```
   </code-block>
   </code-group>

## Adding a route collector

Now that the software is running let's add the first data source. First we choose one of the [195 route-collectors](https://www.pch.net/resources/Routing_Data/IPv4_daily_snapshots/2021/05/) PCH has available on it's website. 

For this example we will use `route-collector.scl.pch.net`, which is a route-collector connected to PIT Chile IXP, but you can choose a different one and replace them in the commands.

First we will add the route-collector to the database. Currently, an SQL query has to be executed:

1. Open PostgreSQL console
   ```bash
   docker-compose exec timescaledb psql -U postgres
   ```

2. Change to ASPATH database
   ```
   \c aspath
   ```

3. Execute an insert query to add an internet exchange to the database

   <code-group>
   <code-block title="Command" active>
   ```sql
   INSERT INTO internet_exchange_points(name, slug) 
   VALUES ('PIT Chile', 'pit-chile')
   RETURNING id;
   ```  
   </code-block>

   <code-block title="Expected Output">
   ```sql
   id
   ----
   1
   (1 row)
   
   INSERT 0 1
   ```
   </code-block>
   </code-group>

   "PIT Chile" will be the display name in the platform while the `slug` value ('pit-chile' in the example) will be the url-friendly name of the internet exchange.

   Once the query is executed, the database will return the ID of the inserted row. In this case, the database returned `1` as the id for the added internet exchange.

4. Execute the insert query to add the route-collector

   <code-group>
   <code-block title="Command" active>
   ```sql
   INSERT INTO route_collectors(name, organization_name, ixp_id, driver)
   VALUES ('route-collector.scl.pch.net', 'Packet Clearing House', 1, 'pch_v4')
   RETURNING id;
   ```
   </code-block>

   <code-block title="Expected Output">
   ```
   id
   ----
    1
   (1 row)

   INSERT 0 1
   ```
   </code-block>
   </code-group>

::: warning Note
Please note that the collector name must be entered exactly as shown on PCH website in order to make the grabber module work. 
:::

The following parameters were used on this query (in order):
- `route-collector.scl.pch.net`: name of the route collector as shown on PCH website.
- `Packet Clearing House`: name of the organization that manages the route collector for display purposes.
- `1`: the ID from the IXP we want to associate this route-collector with. It's the identification we got from the earlier step when the IXP was added.
- `pch_v4`: it's the driver that should be use to process this route-collector related data. This will allow the software to store and process PCH snapshots in the same format they are published.

5. You can now quit PostgreSQL console by pressing Ctrl+D and then check that a route-collector is detected on database:
   
   <code-group>
   <code-block title="Command" active>
   ```bash
   curl localhost:8080/api/statistics
   ```
   </code-block>

   <code-block title="Expected Output">
   ```
   {"route_collector_count":1,"snapshots_count":0,"autonomous_systems":0,"ixp_count":1}
   ```
   </code-block>
   </code-group>

So now the platform recognizes 1 IXP and our first route collector 🙌.

## Scheduling automatic data fetching
We will now schedule the grabber module to execute every day at 6:35AM to get latest data from `route-collector.scl.pch.net`

1. Open the file `configuration/aspath.toml` with your preferred text editor. In case you don't have that file or it's empty, please check step 2 from "Manual Installation".

2. Add the following line inside the `[grabbers]` section:

   <code-group>
   <code-block title="Add" active>
   ```
   [grabbers."route-collector.scl.pch.net"]
     # run at 6:35 AM everyday
     hour = 6
     minutes = 35

   ```
   </code-block>

   <code-block title="Expected final content">
   ```
   [grabbers]
     [grabbers."route-collector.scl.pch.net"]
     # run at 6:35 AM everyday
     hour = 6
     minutes = 35
   ```
   </code-block>
   </code-group>

::: tip Note
You can schedule each route collector at a different time. To configure additional route-collector, repeat each step and append a new block inside `grabbers` section for the new collector.
:::

3. Now restart the backend to apply the new schedule:
   ```bash
   docker-compose restart backend
   ```

4. Let's check the current loaded schedule:
   
   <code-group>
   <code-block title="Command" active>
   ```bash
   curl localhost:8080/scheduler/
   ```
   </code-block>

   <code-block title="Expected Output">
   ```
   [{"app":null,"name":"grab-route-collector.scl.pch.net","task":"worker.grab_and_ingest","args":["route-collector.scl.pch.net"],"kwargs":{},"options":{},"schedule":{"_orig_minute":35,"_orig_hour":6,"_orig_day_of_week":"*","_orig_day_of_month":"*","_orig_month_of_year":"*","_orig_kwargs":{},"hour":[6],"minute":[35],"day_of_week":[0,1,2,3,4,5,6],"day_of_month":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],"month_of_year":[1,2,3,4,5,6,7,8,9,10,11,12],"nowfun":null,"_app":null},"last_run_at":"2021-05-17T23:56:04.061782+00:00","total_run_count":0}]
   ```
   </code-block>
   </code-group>

   We should be able to identify an scheduled task with the name `grab-route-collector.scl.pch.net`.

5. The software now will automatically fetch old and new data daily. Please note this process may take approximately 2 hours on the first run.
