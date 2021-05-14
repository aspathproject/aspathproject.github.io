# Introduction

ASPATH Software has 3 key components: a VueJS-powered front-end interface, and a Python FastAPI-powered backend that communicates the interface to the PostgreSQL+TimescaleDB database.

The solution is packaged as a Docker-compose container that allows to easily deploy the whole solution in a few commands. Also, Docker volume mounting is used to make the solution run on a single folder, making it easier to backup and move between machines.

## How It Works
The ASPATH platform front-end is a Single Page Application powered by [NuxtJS](https://nuxtjs.org/) along [Vuetify](https://vuetifyjs.com/) UI library that provides Material Design ready to use components.

The platform itself won't have any data when it's deployed, so an initial configuration of data sources must be done in order to make the database grow.


### Grabbers
These back-end modules will be in charge of running scheduled jobs to obtain raw datasets from external systems, such as your own route-collectors or also third party datasets, such as [PCH Daily Routing Snapshots](https://www.pch.net/resources/Routing_Data/IPv4_daily_snapshots/).

Grabber modules will perform the data extraction from the data provider and it will finish it's job when the raw dataset is stored as-is on the Database.

### Parsers
After grabber modules add raw datasets to the database, the parser modules will be able to load the file into memory and analyze it to extract the final routing data.

Parser logic is totally separated from both Grabber and Ingester modules to allow maximum flexibility in the process. Currently, the final output of parser modules consist on a simple comma-delimited string array containing forwarding table information such as route CIDR and AS_PATH attributes.

### Ingestion
The data ingestion process will finally take place when the parser modules successfully detects the routing information from the raw dataset. This module will convert the previously mentioned comma-delimited string format into an SQL payload that will go to the database.

Finally, the platform will mark the datasets and routing snapshots as available for visualization once all routes are inserted successfully into the database.