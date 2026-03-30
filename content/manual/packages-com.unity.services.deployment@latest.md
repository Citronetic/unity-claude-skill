# Deployment package

The Deployment package provides a cohesive interface to deploy assets for Unity Gaming Services (UGS).
It provides the base tooling for UGS to have shared functionality for deploying service configuration files on the servers.

##### Note

A deployment is when service configuration files are synced
with service resources so that service clients can interact with them.

The Deployment package is not used on its own. Services integrate with it, allowing the service configuration to
be saved in version control.

| Topic | Description |
| --- | --- |
| Getting started | Get started with the Deployment package. |
| Deployment window | Use the Deployment window to deploy assets. |
| Deployment Definition | Use Deployment Definitions to group assets for deployment. |
| Environments | Deploy assets to specific environments. |

## Integration and Programmatic use of The Deployment Window

It is possible to host your own integration in the Deployment Window by using the `Deployment API`
package, as the rest of the service SDKs do.

In order to integrate with the Deployment Window, follow the documentation [here](https://docs.unity3d.com/Packages/com.unity.services.deployment.api@1.1/manual/deployment_api.html).

It is also possible to trigger any Deployment Window action programmatically, such as deployment, selection, etc.
For examples on how to do this, follow the documentation [here](https://docs.unity3d.com/Packages/com.unity.services.deployment.api@1.1/manual/deployment_window_api.html).

## Supported packages

Files supported by the Deployment Window are created via the context menu **Create** > **Services** > **Deployment Defintion**
in the Project Window.

Below is a list of supported services:

- [com.unity.services.cloudcode (javascript)](https://docs.unity.com/ugs/en-us/manual/cloud-code/manual/scripts/how-to-guides/write-scripts/unity-editor?ampDeviceId=6d7aef6b-aa4a-4844-ba5a-2f3cf5238729&ampSessionId=1774862359528&ampTimestamp=1774948818091) **from 2.1.0**

- [com.unity.services.cloudcode (C#)](https://docs.unity.com/ugs/en-us/manual/cloud-code/manual/modules/how-to-guides/write-modules/unity-editor?ampDeviceId=6d7aef6b-aa4a-4844-ba5a-2f3cf5238729&ampSessionId=1774862359528&ampTimestamp=1774948818091) **from 2.5.0**

- [com.unity.remote-config](https://docs.unity.com/ugs/en-us/manual/remote-config/manual/remote-config-files?ampDeviceId=6d7aef6b-aa4a-4844-ba5a-2f3cf5238729&ampSessionId=1774862359528&ampTimestamp=1774948818091) **from 3.2.0**

- [com.unity.services.economy](https://docs.unity.com/ugs/en-us/manual/economy/manual/deploying-resources-with-unity-editor?ampDeviceId=6d7aef6b-aa4a-4844-ba5a-2f3cf5238729&ampSessionId=1774862359528&ampTimestamp=1774948818091) **from 3.2.1**

- [com.unity.services.leaderboards](https://docs.unity.com/ugs/en-us/manual/leaderboards/manual/leaderboards?ampDeviceId=6d7aef6b-aa4a-4844-ba5a-2f3cf5238729&ampSessionId=1774862359528&ampTimestamp=1774948818091) **from 2.0.0**

- [com.unity.services.multiplay](https://docs.unity.com/ugs/en-us/manual/game-server-hosting/manual/welcome?ampDeviceId=6d7aef6b-aa4a-4844-ba5a-2f3cf5238729&ampSessionId=1774862359528&ampTimestamp=1774948818091) **from 1.1.0**

- [com.unity.services.multiplayer](https://docs.unity3d.com/Packages/com.unity.services.multiplayer@latest)

- [Multiplay Hosting](https://docs.unity3d.com/Packages/com.unity.services.multiplayer@1.0/manual/Multiplay/Authoring/index.html)

- [Matchmaker](https://docs.unity3d.com/Packages/com.unity.services.multiplayer@1.0/manual/Matchmaker/Authoring/index.html)

- [com.unity.services.tooling](https://docs.unity3d.com/Packages/com.unity.services.tooling@1.0/manual/index.html)

- [Access Control](https://docs.unity.com/ugs/en-us/manual/overview/manual/access-control?ampDeviceId=6d7aef6b-aa4a-4844-ba5a-2f3cf5238729&ampSessionId=1774862359528&ampTimestamp=1774948818091)

- [Game Overrides](https://docs.unity.com/ugs/en-us/manual/remote-config/manual/game-overrides-and-settings?ampDeviceId=6d7aef6b-aa4a-4844-ba5a-2f3cf5238729&ampSessionId=1774862359528&ampTimestamp=1774948818091) from 1.3.0
