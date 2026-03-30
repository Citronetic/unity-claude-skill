This version of Unity is unsupported.

Search settings and preferences

Execute Static API methods

# Search the Unity Editor main menu

Use the Menus search provider to access the Unity Editor main menu commands.

## Query syntax

Provider token: `m:`

Query example: List all menu commands related to splines, from all submenus.

```
m: splines
```

## Provider filters

The Menus provider has additional filters in the [visual query builder](search-visual-query.html). This table lists the filters and their textual query equivalents.

| Filter | Search token | Query example | Description |
| --- | --- | --- | --- |
| Menu Path | m: id:<"path"> | m: id:"2d/tiles" | Searches only within the 2D > Tiles menu. |

## Results

**Search** window tab: **Menus**.

## Actions

Default action: Executes the menu command.

Notes:

- For commands like **Create**, make sure you’re in the correct folder in the **Project** window before executing the command.

- For commands that interact with GameObjects in the **Hierarchy** window, make sure to select the correct **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) in the **Hierarchy** window before executing the command, or the command might work at the **scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene) level. For example, if you execute **Create Empty Child** while your focus is in the **Project** window, the Unity Editor creates the GameObject at the scene level rather than as a child of a GameObject.

- Some commands, like **Duplicate**, don’t execute from the **Search** window.

## Additional resources

- [Visual query builder reference](search-visual-query.html)

- [Textual query references](search-textual-query.html)

- [Activate and deactivate search providers](search-manage-providers.html)

- [Search query operators](search-query-operators.html)

Search settings and preferences

Execute Static API methods
