---
sidebar: auto
---

# Changelog

## Apr 16, 2021

- Backend API development is now public. Python FastAPI, Celery and Masonite ORM are the main technologies being used for this module.
- ASPATH code repository is now a **monorepo** and it's available on https://github.com/aspathproject/aspath. 
- Implemented easy deployment using docker-compose. Now it's possible to start the software by cloning the main repository and using `docker-compose up` command.
- Docker-compose deployment is configured with a portable `data` folder. This folder will contain every file related to postgres database and redis instance to make it easier to backup or move to another machine.

## Mar 25, 2021

- Website is launched on [aspath.app](https://aspath.app).
- Created a Revue profile for newsletter service. Subscribe on our [Revue profile](https://www.getrevue.co/profile/aspath) to get updates about the project and major releases.

