This version of Unity is unsupported.

Additional Search filters

Functions reference

# Search query operators

The Scene, Asset, Objects, and Resource providers use a [`QueryEngine`](../ScriptReference/Search.QueryEngine.html) ([Scene](#scene-provider)A Scene contains the environments and menus of your game. Think of each unique Scene file as a unique level. In each Scene, you place your environments, obstacles, and decorations, essentially designing and building your game in pieces. [More info](CreatingScenes.html)
See in [Glossary](Glossary.html#Scene), [Asset](#asset-provider)Any media or data that can be used in your game or project. An asset may come from a file created outside of Unity, such as a 3D Model, an audio file or an image. You can also create some asset types in Unity, such as an Animator Controller, an Audio Mixer or a Render Texture. [More info](AssetWorkflow.html)
See in [Glossary](Glossary.html#Asset), [Objects](#objects-provider)The fundamental object in Unity scenes, which can represent characters, props, scenery, cameras, waypoints, and more. A GameObject’s functionality is defined by the Components attached to it. [More info](class-GameObject.html)
See in [Glossary](Glossary.html#Object) and [Resource](#resources-provider) providers) to parse and resolve their queries. They support a basic set of Query Operators that allow for more complex queries using Boolean operators and parentheses grouping. The table on this page lists the supported Query Operators.

**Case sensitivity**: Most Search queries ignore case. For example, `Stone` or `stone` or `sToNe` will yield the same results.

| Filter | Search token | Description |
| --- | --- | --- |
| Basic search | <any partial name> | mainSearches matching the word Main |
| And | and | Main and t:cameraSearch where name contains Main and is of type name containing camerat:texture and jpgSearches all of type texture containing jpg in their filename. Note: Since and is the default operator of the QueryEngine the last query is equivalent to:t:texture jpg |
| or | or | Player or MonsterSearches containing the word Player or Monster. |
| Group | (<group content>) | t:Character and (status=Poison or status=Stunned)Searches for a Character component where the value of status property is either Poison or Stunned. |
| Exclusion | -<Expression to exclude> | p: dep:door -t:SceneSearches all Assets with a dependency on an Asset containing the word door and that are not of type Scene. p: dep:door -stoneSearches all Assets with a dependency on an Asset containing the word door and that do not contain the word stone. |
| Exact Operator | !<something> | Most of the string matching in Search returns partial matches. Use the ! operator to return exact matches.p: stoneSearches all Assets containing the word stone (stone_hammer.png, stone_door.prefab).p: !stoneSearches all Assets with the exact name stone (e.g.: stone.png) |
| Partial Value match (:) | property:<partial value> | ref:asterBecause : is used, searches all Assets having an Asset containing the word aster (ex: asteroid2, asteroids) as a dependency. |
| Exact Value (=) | property=exactValue | ref=asteroidBecause = is used, searches all Assets having an Asset with the exact name asteroid as a dependency. |
| > | property>number | t:texture size>256Searches all textures with a size bigger than 256 bytes. |
| < | property<number | t:texture size<256Searches all textures with a size smaller than 256 bytes. |
| != | property!=number | t:texture size!=256Searches all textures with a size different than 256 bytes. |
| >= | property>=number | t:texture size>=256Searches all textures with a size bigger or equal than 256 bytes. |
| <= | property>number | t:texture size<=256Searches all textures with a size smaller or equal than 256 bytes. |

## Additional resources

- [Focus searches with search providers](search-filter-by-provider.html)

- [Visual query builder reference](search-visual-query.html)

- [Textual query references](search-textual-query.html)

- [Launch and use the Search window](search-window-reference.html)

Additional Search filters

Functions reference
