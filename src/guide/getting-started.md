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
   git checkout develop
   ```

3. Start application
   ```bash
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
