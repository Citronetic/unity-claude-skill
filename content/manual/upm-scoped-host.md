This version of Unity is unsupported.

Scoped registry authentication

Package Manager configuration

# Host a scoped registry for your organization

As a custom package provider, you can host a scoped registry, so the location of your registry is available within Package Manager.

## Supported use cases and complying with Terms of Service

The intended scenario for scoped registries is to distribute custom packages within your organization, so your organization members can easily access packages (or collections of packages) within Package Manager.

**Important**
As a scoped registry provider, make sure any package registry servers you set up conform to Unity’s [Terms of Service](https://unity.com/legal/terms-of-service?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774938859802) and [Unity’s Package Guiding Principles & Guidelines](https://unity.com/legal/terms-of-service/software/package-guidelines?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774938859802).

Unity provides access to the Package Manager to facilitate sharing knowledge and creations, but not as a marketplace, store, or platform.

Don’t use the Unity Editor to promote, advertise, or distribute your Packages, products, or services to members outside of your organization.

## Supported registry types

Hosting tools aren’t provided by Unity, but the Package Manager supports registries based on the [npm](https://docs.npmjs.com/) protocol.

**Important**: When you set up your own package registry server:

- Make sure that whatever registry server you choose implements the `/-/v1/search` or `/-/all` endpoints.

- Make sure you use only those features that are compatible with Unity’s scoped registries. For example, Unity doesn’t support namespaces that use the `@scope` notation that `npm` supports.

## Control access to your scoped registry

If you want full control over who accesses packages in your scoped registry, you can enable [npm authentication](https://docs.npmjs.com/about-authentication-tokens) for specific users. Package consumers can then configure [Scoped registry authentication](upm-config-scoped.html) to use their `npm` authentication tokens.

## Additional resources

- [Scoped registries](upm-scoped.html)

- [Use a scoped registry in your project](upm-scoped-use.html)

- [Legal information](https://unity.com/legal?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774938859802)

Scoped registry authentication

Package Manager configuration
