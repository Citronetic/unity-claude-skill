This version of Unity is unsupported.

Unity Search

Act on search results

# Launch and use the Search window

The **Search** window finds assets in your project, packages in Unity’s registry, assets from the Unity **Asset Store**A growing library of free and commercial assets created by Unity and members of the community. Offers a wide variety of assets, from textures, models and animations to whole project examples, tutorials and Editor extensions. [More info](AssetStore.html)
See in [Glossary](Glossary.html#AssetStore), log information, and so on. You can compare items, view them in an ****Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector)** tab, and act on them.

This page reviews the window’s interface.

[Image: The Search window showing a saved query that finds prefabs in the Assets folder, and the Inspector tab for one of the results.]
The Search window showing a saved query that finds prefabs in the Assets folder, and the Inspector tab for one of the results.

## Launch Search

To launch Search, do one of the following:

- Press **Ctrl**+**K** (macOS: **Cmd**+**K**).

- From the main menu, select **Edit** > **Search** > **Search All**.

- From the main **toolbar**A row of buttons and basic controls at the top of the Unity Editor that allows you to interact with the Editor in various ways (e.g. scaling, translation). [More info](Toolbar.html)
See in [Glossary](Glossary.html#Toolbar), select the magnifying glass icon.

**Tip:** You can create your own shortcuts and menu items for custom searches. For more information, refer to [Invoke from the main menu](api-menu-item.html).

As well as the general **Search** window, you can also open the following specialized search windows:

- ****Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene)**: Finds scene and scene templates.

- **Files**: Runs the [File search provider](search-files.html) to find files in your project.

- **Asset Store**: Finds items in the [Unity Asset Store](https://assetstore.unity.com/?ampDeviceId=fffb83ff-ec04-401c-8bb9-ed5ebd99cd33&ampSessionId=1774849551466&ampTimestamp=1774936064620) with the [Asset Store search provider](search-asset-store.html).

- **Asset Database**: Finds items in the [Asset Database](AssetDatabase.html) with the [Asset Database search provider](search-adb.html).

## Search mechanisms

Unity Search supports two search mechanisms:

- **Visual query builder**: Use the visual query builder to create complex queries that combine multiple search tokens. For details, refer to [Visual query builder](search-visual-query.html).

- **Textual search**: Enter a search query in the search field. For syntax and examples, refer to [Textual query references](search-textual-query.html).

The toggle for search mechanisms is next to the search field:

[Image: The Toggle Query Builder Mode button next to a textual query]
The Toggle Query Builder Mode button next to a textual query

## Press Tab for autocomplete

For autocomplete suggestions for the current query, press **Tab**.

**Tab** works with both the visual query builder and textual queries.

For textual queries, **Tab** shows autocomplete suggestions like filters, tokens, and recent searches.

For the visual query builder:

- If your cursor isn’t next to any text, **Tab** shows the available filters.

- If your cursor is next to text, **Tab** shows the same autocomplete suggestions as the textual query.

[Image: The Search window showing a textual query with autocomplete suggestions]
The Search window showing a textual query with autocomplete suggestions

## Select results views

The **Search** window has three views:

- Tables: The table view is the most flexible, because you can add and remove columns, compare data across multiple search results, and export data. For more information, refer to [Manage results tables](search-tables.html).

- List: The list view is the default view, and shows search results as a list of items.

- Grid: The grid view shows search results as a grid of thumbnails.

**Tip:** The zoom slider controls the size of the search result thumbnails in the list and grid views. When the thumbnail is large enough, the view switches to the grid view. If it’s too small, the view switches to the list view.

## Add an Inspector tab

The **Search** window can show an **Inspector** tab for a selected item. The tab shows a preview of the item if the item type supports previews, and the item’s components. You can also perform actions on the item, based on the item type.

To toggle the **Inspector** tab, select the **Inspector** icon ([Image: The Inspector icon]) in the **Search** window.

To view an item in the **Inspector** tab, click the item in the search results.

For more information about the **Inspector** tab, refer to [The Inspector window](UsingTheInspector.html).

## Display or hide the status bar

The **Search** window’s status bar shows the query’s status, search providers, number of results, and query run time.

To show or hide the status bar, from the **Search** window’s **More** (⋮) menu, select **Status bar**.

## Add result types and indices

To add or remove result types, from the **Search** window’s **View** menu ([Image: The View menu]):

- For results from the [File search provider](search-files.html), select **Show more results**.

- For results from packages in the projects, such as their **scripts**A piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. [More info](creating-scripts.html)
See in [Glossary](Glossary.html#Scripts) and images, select **Show package results**. **Show more results** needs to be active for **Show package results** to work.

This option shows results from the **Project window**A window that shows the contents of your `Assets` folder (Project tab) [More info](ProjectView.html)
See in [Glossary](Glossary.html#Projectwindow); it’s not the same as searching for packages with the [Packages](search-packages.html)Packages are collections of assets to be shared and re-used in Unity. The [Unity Package Manager](upm-ui.html) (UPM) can display, add, and remove packages from your project. These packages are native to the Unity Package Manager and provide a fundamental method of delivering Unity functionality. However, the Unity Package Manager can also display [Asset Store packages](AssetStorePackages.html) that you downloaded from the Asset Store. [More info](Packages.html)
See in [Glossary](Glossary.html#Packages) provider.

To add or remove [indices](search-index-manager.html), from the **Search** window’s **View** menu ([Image: The View menu]):

- For results from the Assets index, select **Assets (asset index)**.

- For results from a custom index, select your custom index’s name.

Adding and removing [indices](search-index-manager.html) isn’t the same as using search providers. Instead, it changes what the search providers can search through. For more information, refer to [Focus searches with search providers](search-filter-by-provider.html).

## Cycle through search history

To cycle through search query changes:

- To undo, press **Ctrl**+**Z** (macOS: **Cmd**+**Z**).

- To redo, press **Ctrl**+**Y** (macOS: **Cmd**+**Y**).

## Save and reuse queries

You can save and reuse search queries. For more information, refer to [Manage search queries](search-manage-queries.html).

To show or hide the saved queries list, select the **Searches** icon ([Image: The Searches icon]) in the **Search** window.

## Change search preferences

To change search preferences, click the gear icon in the **Search** window. For more information, refer to [The Preferences window’s Search tab](Preferences.html#search).

## Additional resources

- [Act on search results](search-actions.html)

- [Manage search queries](search-manage-queries.html)

- [Focus searches with search providers](search-filter-by-provider.html)

- [Visual query builder](search-visual-query.html)

Unity Search

Act on search results
