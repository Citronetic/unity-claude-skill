This version of Unity is unsupported.

Search the Unity Editor interface and actions

Search the Unity Editor main menu

# Search settings and preferences

Use the Settings search provider to find settings in the [Project Settings](comp-ManagerGroup.html)A broad collection of settings which allow you to configure how Physics, Audio, Networking, Graphics, Input and many other areas of your project behave. [More info](comp-ManagerGroup.html)
See in [Glossary](Glossary.html#ProjectSettings) and [Preferences](Preferences.html) windows.

## Query syntax

Provider token: `set:`

Query example: Searches for all light-related settings and preferences.

```
set: light
```

## Provider filters

The Settings provider has additional filters in the [visual query builder](search-visual-query.html). This table lists the filters and their textual query equivalents.

| Filter | Search token | Query example | Description |
| --- | --- | --- | --- |
| Scope: Project | set: scope:project | set: scope:project physics | Searches for physics settings in the Project Settings window. |
| Scope: User | set: scope:user | set: scope:user physics | Searches for physics settings in the Preferences window. |

## Results

**Search** window tab: **Settings**.

## Actions

Default action: Opens the page in the Project Settings or Preferences window.

## Additional resources

- [Project Settings](comp-ManagerGroup.html)

- [Preferences](Preferences.html)

- [Visual query builder reference](search-visual-query.html)

- [Textual query references](search-textual-query.html)

- [Activate and deactivate search providers](search-manage-providers.html)

- [Search query operators](search-query-operators.html)

Search the Unity Editor interface and actions

Search the Unity Editor main menu
