---
sidebar: auto
---

# Changelog

## May 14, 2021
- [Guide](/guide/) page has been added to the website.
- A fully working PCH Daily Routing Snapshot grabber, parser and ingester has been tested and should be available on `develop` branch on the following days.
- A [Discord server](https://discord.gg/2FT4XzNvqq) has been created to be in contact with people that wants to contribute or need help deploying an early version of the software.
- Thanks everyone for the interest in the project. You can watch again the [LACNIC 35 ASPATH presentation](https://www.youtube.com/watch?v=Mt_oW5CtU5c) on Youtube.
- If you want to collaborate on this project and don't know where to start, you can check the new [Contributors Wanted](/contributors-wanted) page.

## May 9, 2021
- Groundwork for grabber modules: route collector entries in database will also have a 'driver' and 'driver_opts' column to be able to execute the corresponding procedure to grab and parse new snapshots.
- PCH Daily Routing Snapshots will be the first driver to be implemented (WIP). An scraper module will grab new datasets from https://www.pch.net/resources/Routing_Data/IPv4_daily_snapshots/ and Quagga/Cisco parser will process and add the routing snapshots to database.

## May 8, 2021
- Frontend: Implemented snapshot browsing capability. Now it's possible to quickly search and look any routing snapshot from the same route collector.
- API: Snapshot metadata is now included in snapshots/:id/routes, including snapshot ID and creation date.

## Apr 16, 2021

- Backend API development is now public. Python FastAPI, Celery and Masonite ORM are the main technologies being used for this module.
- ASPATH code repository is now a **monorepo** and it's available on [ASPATH project github page](https://github.com/aspathproject/aspath). Code will be maintained in `develop` branch until an stable version is released.
- Implemented easy deployment using docker-compose. Now it's possible to start the software by cloning the main repository and using `docker-compose up` command.
- Docker-compose deployment is configured with a portable `data` folder. This folder will contain every file related to postgres database and redis instance to make it easier to backup or move to another machine.

## Mar 25, 2021

- Website is launched on [aspath.app](https://aspath.app).
- Created a Revue profile for newsletter service. Subscribe on our [Revue profile](https://www.getrevue.co/profile/aspath) to get updates about the project and major releases.

