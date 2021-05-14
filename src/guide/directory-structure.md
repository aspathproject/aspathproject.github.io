# Directory Structure

ASPATH projects follows a single-folder pattern, meaning that all components will be inside a parent folder instead of them being spanned across multiple system folders.

This allows to make a whole system backup (including software and data) just by archiving the parent folder.

<!-- textlint-disable terminology -->

::: vue
.
├── backend
│   ├── app
├── frontend
│   ├── nuxt.config.js
├── data
├── configuration
│   ├── aspath.toml
│   ├── aspath.dist.toml
└── docker-compose.yml
:::

<!-- textlint-enable -->

- `backend/app`: Python FastAPI backend folder. Also contains parser, grabber and ingester modules.
- `frontend`: NuxtJS frontend folder.
- `frontend/nuxt.config.js`: NuxtJS configuration file. In this file the backend API url can be configured on `http.baseURL`.
- `data`: universal data storage folder. PostgreSQL and Redis will operate within this folder, meaning that the whole system data is contained in this folder.
- `configuration`: ASPATH software configuration will be inside this folder
- `configuration/aspath.toml.dist`: ASPATH software configuration example file.
- `configuration/aspath.toml`: Actual software configuration file