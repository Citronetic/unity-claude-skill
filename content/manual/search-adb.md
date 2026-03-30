This version of Unity is unsupported.

Search assets with the Project search provider

Search files and presets

# Search the Asset Database

The Asset Database search provider finds items in the [Asset Database](AssetDatabase.html), which stores converted files and their data. It’s equivalent to using the `AssetDatabase.FindAsset` API.

**Note:** By default, the Asset Database provider is inactive. To enable it, refer to [Activate and deactivate search providers](search-manage-providers.html).

**Tip:** You can use the Asset Database provider in the general **Search** window, or in a specialised window. To open a specialized search window for the Asset Database provider, from the main menu, select **Window** > **Search** > **Asset Database**.

## Query syntax

Provider token: `adb`

Query example: Find all light assets with `low` in their name.

```
adb: t:light low
```

## Implicit Files search

You can include results from the built-in Unity Editor resources.

For more information, refer to [Show more results section of the Search for files page](search-files.html#files-more-results).

## Provider filters

The Asset Database provider has additional filters in the [visual query builder](search-visual-query.html). This table lists the filters and their textual query equivalents.

| Filter | Search token | Query example | Description |
| --- | --- | --- | --- |
| Type | t:<type> | t:script | Find all script files. |
| Component | t:<component> | t:TerrainGroup | Find all assets that have a component with a TerrainGroup script. |
| Label | l:<label> | adb: l:monster | Find all assets with the label monster. |
| Area (All, Assets, Packages) | a:<assets/packages/all> | adb: a:assets t:Material | Find all materials in the Assets folder; this excludes assets from packages. Options: All, Assets (exclude packages), Packages (exclude the Assets folder). |
| Glob | glob:<pattern> | adb: glob:"Assets/**/*.png" | Runs a glob query, which pattern-matches against file names. In this example, find all png files in the Assets subfolders. For more information, refer to Search files. |
| Referencing Asset (ID, path, or name) | adb:ref:Assets/Trees/Prefab/Pine.prefab | Find GameObjectsThe fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. More infoSee in Glossary referencing an asset by its name, exact path, or GlobalObjectId. |  |
| Asset bundle name | b:<assetBundleName> | adb: b:materialAssetBundle | Find all assets within the asset bundle materialAssetBundle. |

If you don’t know the asset’s ID, use this filter as part of a [visual query](search-visual-query.html), where you’re able to choose the referenced asset from a list. If you need a textual query, you can convert the visual query to a textual one. For more information, refer to [Launch and use the search window](search-window-reference.html#search-mechanisms).

To get an asset’s exact path, right-click the asset in the **Project** window and select **Copy Path**.

Another way to find references is with the context (right-click) menu:

- **Project** window: right-click an asset and select **Find References In **Scene**A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene)** or **Find References In Project**.

- **Hierarchy** window: right-click a GameObject and select **Find References In Scene**.

- ****Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector)** window: right-click a component and select **Find References In Scene**.

## Results

**Search** window tab: **Resources**.

## Actions

The context menu for the Asset Database search provider includes the following actions:

| Action | Description |
| --- | --- |
| Select | Open the asset in the Inspector and Project windows. This is the default double-click action. To change the default action, refer to Preferences. |
| Open | Open the asset in the Unity Editor or an external editor. |
| Reimport | For imported assets, reimports the asset from the source file. |
| Reveal | Opens the asset in your operating system’s file browser. |
| Delete | Deletes the asset. The Unity Editor requests confirmation before deleting. |
| Copy Path | Copies the asset’s path relative to your project’s root folder to the clipboard. |
| Copy GUID | Copies the asset’s GUID to the clipboard. |
| Properties | Opens a Focused inspector window for the asset. |

## Additional resources

- [Managing assets with the Asset Database](AssetDatabase.html)

- [Search for files](search-files.html)

- [Search presets](search-presets.html)

- [Visual query builder](search-visual-query.html)

- [Textual query references](search-textual-query.html)

Search assets with the Project search provider

Search files and presets
