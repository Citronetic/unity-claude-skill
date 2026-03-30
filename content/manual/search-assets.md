This version of Unity is unsupported.

Search GameObjects with the Hierarchy search provider

Search the Asset Database

# Search assets with the Project search provider

Use the Project search provider to search all assets in your project.

## Query syntax

Provider token: `p:` (for `Project`)

## Query examples

| Query example | Description |
| --- | --- |
| p: t=Texture width>=4096 | Find all textures bigger than 4K. |
| p: t=Material shader=Assets/Personal/Shaders/PBR_StandardSand.shadergraph | Find all materials using the PBR_StandardSand shaderA program that runs on the GPU. More infoSee in Glossary. |
| p: t=Material ref=Assets/Personal/Shaders/3DNoise_T.psd | Find all materials using the 3DNoise_T texture. |
| p: t=SceneAsset | Find all sceneA Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. More infoSee in Glossary files. |
| p: tag=MainCamera | Find all assets with the tag MainCamera. |
| p: ref="Assets/Prefabs/Crystal.prefab" | Find all assets referencing a specific prefab. |
| p: prefab:variant | Find all prefab variants. |
| p: ref=”Assets/Mine/Prefabs/Mu Models/Buildings/Fence.prefab” | Find assets that reference the Fence prefab. |
| p: missing:scripts scene="Assets/Scenes/Test/SampleScene.unity" | Find objects in the SampleScene that are missing scriptsA piece of code that allows you to create your own Components, trigger game events, modify Component properties over time and respond to user input in any way you like. More infoSee in Glossary. |
| p: missing:scripts from=prefab | Find prefabs that are missing scripts. |
| p: 7f64a6e091143c0458506b559165cf72 | Find the asset with the GUID 7f64a6e091143c0458506b559165cf72. |

## Provider filters

The Project search provider supports the following filters.

### Types

Use the `t` filter to find all assets of a specific type in the Project folder.

For example, to find all textures with the word `volume` in their name:

```
p: t:texture volume
```

For more information about types and properties in the Project search provider, and how they differ from the Hierarchy search provider, refer to [Search your project and scenes](search-project-and-scenes-overview.html).

### Properties

The syntax for properties in the Project search provider:

- Don’t use the `#` and `p` prefixes that you use in the Hierarchy search provider.

- If a property is unique to a component, you don’t have to specify the component in the query. For example, `p: mass:5.15` is equivalent to `p: articulationbody.mass:5.15` if the **GameObject**The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#GameObject) has no other components with a mass property.

- Words in filters can’t have spaces, so if a property or component name has spaces, remove them. For example, `articulation body` becomes `articulationbody`.

Unity indexes properties according to their internal name, which might be different than the display name in the ****Inspector**A Unity window that displays information about the currently selected GameObject, asset or project settings, allowing you to inspect and edit the values. [More info](UsingTheInspector.html)
See in [Glossary](Glossary.html#Inspector)** window. To search by property value, do one of the following:

- Use the visual query builder, which uses the property’s display name.

- Check the **Inspector** window in Debug mode to find the internal name of a property.

**Tip:** To search for assets that share a value with an asset you’re editing in the **Inspector** window: right-click the property in the **Inspector** window and select **Search Same Property Value**.

For more information about types and properties in the Project search provider, and how they differ from the Hierarchy search provider, refer to [Search your project and scenes](search-project-and-scenes-overview.html).

### Area (Index)

Find all textures in assets, installed packages, or both.

| Filter option | Query example | Description |
| --- | --- | --- |
| Assets | p: a:assets t:material | Find all materials in the Assets folder, but not in the installed packages. |
| Packages | p: a:packages t:material | Find all materials in installed packages, but not in the Assets folder. |
| All | p: a:all t:material | Find all materials in the Assets folder and in installed packages. |

Options:

- **All**: Both assets and packages.

- **Assets**: Exclude packages.

- **Packages**: Exclude the Assets folder.

```
p: a:<assets/packages/all>
```

Example: Find all textures in installed packages:

```
p: a:packages t:texture
```

### Prefabs

Find [prefabs](Prefabs.html)An asset type that allows you to store a GameObject complete with components and properties. The prefab acts as a template from which you can create new object instances in the scene. [More info](Prefabs.html)
See in [Glossary](Glossary.html#Prefab) or their GameObjects.

| Filter | Query example | Description |
| --- | --- | --- |
| Any | prefab:any | Find any asset (Project search provider) or GameObject (Hierarchy search provider) that is part of a prefab. If you search for prefab instead of prefab:any, the results include anything with the string prefab in its name or path. |
| Altered | prefab:altered | Find prefab instances or variants with overrides, including default overrides. |
| Asset | prefab:asset | Find prefab asset. |
| Base | prefab:base | Find base prefabs. |
| Instance | prefab:instance | Find objects that are part of a prefab instance. |
| Model | prefab:model | Find GameObjects that are part of a model prefab. |
| Modified | prefab:modified | Find GameObjects that are a prefab instance with overrides. |
| Non asset | prefab:nonasset | Find prefabs that aren’t prefab asset. |
| Regular | prefab:regular | Find regular prefab instances or assets. |
| Root prefab | prefab:root | Find prefabs that aren’t children of other prefabs. |
| Top (root) | prefab:top | Find top-level prefab roots. |
| Variant | prefab:variant | Find prefab variants (Project search provider) or GameObjects from a variant (Hierarchy search provider). |

For details on the different prefab options, refer to [Prefabs](Prefabs.html).

### Reference

Find assets referencing an object by its [`GlobalObjectId`](ScriptReference:GlobalObjectId), path, or name.

| Filter option | Query example | Description |
| --- | --- | --- |
| Referencing asset (ID, path, or name) | p:ref:Assets/Trees/Prefab/Pine.prefab | Find assets referencing another asset by its name, exact path, or GlobalObjectId. |

If you don’t know the asset’s ID, use this filter as part of a [visual query](search-visual-query.html), where you’re able to choose the referenced asset from a list. If you need a textual query, you can convert the visual query to a textual one. For more information, refer to [Launch and use the search window](search-window-reference.html#search-mechanisms).

To get an asset’s exact path, right-click the asset in the **Project** window and select **Copy Path**.

Another way to find references is with the context (right-click) menu:

- **Project** window: right-click an asset and select **Find References In Scene** or **Find References In Project**.

- **Hierarchy** window: right-click a GameObject and select **Find References In Scene**.

- **Inspector** window: right-click a component and select **Find References In Scene**.

### Filters

Find assets by file characteristics.

| Filter | Description | Example |
| --- | --- | --- |
| Age | Days since last modified. | p: age>=0.01 |
| Directory | Exact path to the asset file. | p: dir="Assets/AnimationSipts" |
| File extension | File extension. Equivalent to p: *.<extension> | p: ext:cs |
| File size | Files size in bytes. | p: size>=8096 |
| Name | File name by exact match (but without case matching; dry and Dry return the same results). | p: name="dry" |
| Sub asset | List nested assets without having to specify their name. | p: is:subasset |

### Labels

Find assets by their built-in or user-defined labels.

```
p: l:<label>
```

For example: Find all assets with the label `Weapons`:

```
p: l:Weapons
```

### No Results Limit

By default, the **Search** window returns to first 2,999 results. The No Results Limit option returns all results, however many there are.

Query example: finds all scripts, even if the results list is longer than the usual limit.

```
p: +noResultsLimit t:script
```

When using a visual query, No Results Limit is part of the **Options** filter group.

### Fuzzy search

Use a fuzzy search to find items that are similar to your query, but not an exact match. For example, where the string’s characters aren’t in the same order, or have other characters between them.

Query example: To find two GameObjects, one called `score` and one called `scr`:

```
h: +fuzzy scr
```

When using a visual query, the Fuzzy Search filter is part of the **Options** filter group.

## Results

**Search** window tab: **Project**.

## Actions

The context menu for the Project search provider includes the following actions:

| Action | Description |
| --- | --- |
| Select | Selects the asset in the Project window. This is the same as a single mouse click. |
| Open | Opens the Asset, either in the Unity Editor or in an external editor. This is the default double-click action. To change the default action, refer to Preferences. Note that if you double-click a scene file, the Unity Editor opens it in the Hierarch window. |
| Delete | Deletes the asset. |
| Copy Path | Copies the path of the asset relative to the Project window. |
| Reimport | Reimports the asset. |
| Reveal | Shows the asset in the operating system’s file browser. |
| Properties | Opens a Focused Inspector window for the asset. |

## Add files and package asset searches

You can add results from the Files search and from the packages you have in your Project folder.

For more information, refer to [Add result types and indices](search-window-reference.html#add-result-types-and-indices).

## Search the file system

**Note:** The Assets search provider always runs a `find` query as part of its search.

To search unindexed files, use an asterisk (*****) in a query. The query then includes both a normal asset search and a wildcard search against the file systems.

## Additional resources

- [Visual query builder reference](search-visual-query.html)

- [Textual query references](search-textual-query.html)

- [Search your project and scenes](search-project-and-scenes-overview.html)

- [Search query operators](search-query-operators.html)

Search GameObjects with the Hierarchy search provider

Search the Asset Database
