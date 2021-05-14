# Known Issues

::: warning Note
ASPATH software is still on early development. Some parts of the software might require manual steps until an automatic or final implementation is done.
:::

::: tip Don't be scared
On the good side, most of this issues will only affect at the initial setup until workarounds are applied.

:::

## Insecure backend
FastAPI backend does have some methods that can affect to the scheduler. If thinking into doing a public deployment, a proxy should be place to deny calls to insecure API methods.

Read-only methods should be safe to allow in a public deployment.

## Lack of CLI
A CLI that allows to configure part of the system is missing. As of 5/13/2021, the following actions might direct database queries:
- Adding a new route-collector.
- Configuring route-collector driver (`driver` column in `route_collectors` table).

## Missing ASN dataset parser
Direct database queries might be needed in the meantime.

## API unreachable from frontend
Despite front-end component being internally connected to backend through a Docker virtual network, the final user won't be able to access backend using the docker-configured hostname.

Backend port should be exposed to host machine and then configure nuxt.config.js to use the host machine IP address. (see [Directory Structure](/guide/directory-structure)).

A possible solution would be to include a proxy module that joins both backend and frontend servers into the same port. Also NuxtJS may be changed to server-mode and then use [@nuxt/proxy](https://github.com/nuxt-community/proxy-module)

::: tip Note
Contributions are welcome 🙌 if you have experience solving some of the mentioned problems please [write an issue](https://github.com/aspathproject/aspath/issues/new) on Github to discuss on implementing a certain solution.
:::
