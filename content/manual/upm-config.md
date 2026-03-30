This version of Unity is unsupported.

Host a scoped registry for your organization

Configuration files

# Package Manager configuration

Some environments require customized settings for network configuration, cache locations, and authentication for private repositories.

| Topic | Description |
| --- | --- |
| Configuration files | Learn about the global and user-specific files where you store configuration information. |
| Configure your network for Package Manager | Configure firewall settings, proxy servers, and custom certificate authorities to ensure the Package Manager can access necessary resources. |

## Additional resources

- [Scoped registry authentication](upm-config-scoped.html)

- [Package Manager caches](package-manager-caches.html)

- [Git dependencies](upm-git.html)The Package Manager retrieves Git dependencies from a Git repository directly rather than from a package registry. Git dependencies use a Git URL reference instead of a version, and there’s no guarantee about the package quality, stability, validity, or even whether the version stated in its `package.json` file respects Semantic Versioning rules with regards to officially published releases of this package. [More info](upm-concepts.html#Git)
See in [Glossary](Glossary.html#Gitdependency)

Host a scoped registry for your organization

Configuration files
