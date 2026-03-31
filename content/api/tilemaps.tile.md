This version of Unity is unsupported.



# Tile





class in
          UnityEngine.Tilemaps



/



Inherits from:[Tilemaps.TileBase](Tilemaps.TileBase.html)



/



Implemented in:[UnityEngine.TilemapModule](UnityEngine.TilemapModule.html)


                  Leave feedback




                  Suggest a change












## Success!



Thank you for helping us improve the quality of Unity Documentation. Although we cannot accept all submissions, we do read each suggested change from our users and will make updates where applicable.

                      Close




## Submission failed



For some reason your suggested change could not be submitted. Please <a>try again</a> in a few minutes. And thank you for taking the time to help us improve the quality of Unity Documentation.

                      Close


                      Your name


                      Your email


                      Suggestion*

                      Submit suggestion


Cancel



















### Description



Class for a default tile in the [Tilemap](Tilemaps.Tilemap.html).





This inherits from [TileBase](Tilemaps.TileBase.html) and represents a default tile to be placed in a [Tilemap](Tilemaps.Tilemap.html). It implements [TileBase.GetTileData](Tilemaps.TileBase.GetTileData.html) for simple rendering of a [Sprite](Sprite.html) in the tile map.





### Properties



| Property | Description |
| --- | --- |
| color | Color of the Tile. |
| flags | TileFlags of the Tile. |
| gameObject | GameObject of the Tile. |
| sprite | Sprite to be rendered at the Tile. |
| transform | Transform matrix of the Tile. |





### Public Methods



| Method | Description |
| --- | --- |
| GetTileData | Retrieves the tile rendering data for the Tile. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| hideFlags | Should the object be hidden, saved with the Scene or modifiable by the user? |
| name | The name of the object. |






### Public Methods

| Method | Description |
| --- | --- |
| GetInstanceID | Gets  the instance ID of the object. |
| ToString | Returns the name of the object. |
| GetTileAnimationData | Retrieves any tile animation data from the scripted tile. |
| RefreshTile | This method is called when the tile is refreshed. |
| StartUp | StartUp is called on the first frame of the running Scene. |




### Static Methods

| Method | Description |
| --- | --- |
| Destroy | Removes a GameObject, component, or asset. |
| DestroyImmediate | Destroys the specified object immediately. Use with caution and in Edit mode only. |
| DontDestroyOnLoad | Do not destroy the target Object when loading a new Scene. |
| FindAnyObjectByType | Retrieves any active loaded object of Type type. |
| FindFirstObjectByType | Retrieves the first active loaded object of Type type. |
| FindObjectsByType | Retrieves a list of all loaded objects of Type type. |
| Instantiate | Clones the object original and returns the clone. |
| InstantiateAsync | Captures a snapshot of the original object (that must be related to some GameObject) and returns the AsyncInstantiateOperation. |
| CreateInstance | Creates an instance of a scriptable object. |



### Operators

| Operator | Description |
| --- | --- |
| bool | Does the object exist? |
| operator != | Compares if two objects refer to a different object. |
| operator == | Compares two object references to see if they refer to the same object. |



### Messages

| Message | Description |
| --- | --- |
| Awake | Called when an instance of ScriptableObject is created. |
| OnDestroy | This function is called when the scriptable object will be destroyed. |
| OnDisable | This function is called when the scriptable object goes out of scope. |
| OnEnable | This function is called when the object is loaded. |
| OnValidate | Editor-only function that Unity calls when the script is loaded or a value changes in the Inspector. |
| Reset | Reset to default values. |




            
