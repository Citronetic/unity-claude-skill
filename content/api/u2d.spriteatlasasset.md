This version of Unity is unsupported.



# SpriteAtlasAsset





class in
          UnityEditor.U2D



/



Inherits from:[Object](Object.html)


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



SpriteAtlasAsset stores inputs for generating SpriteAtlas and generates atlas textures on Import.





### Properties



| Property | Description |
| --- | --- |
| isVariant | Checks whether the Sprite Atlas Importer set the Sprite Atlas as a Variant. |





### Public Methods



| Method | Description |
| --- | --- |
| Add | Add an array of Assets to the packable objects list. |
| GetMasterAtlas | Gets the Master Sprite Atlas for the given Variant Sprite Atlas. |
| Remove | Removes objects from the Atlas's packable objects list. |
| SetIsVariant | Sets whether this Sprite Atlas is a Variant or not. |
| SetMasterAtlas | Sets an Atlas to be the Master Atlas. |
| SetScriptablePacker | Sets the ScriptablePacker ScriptableObject to SpriteAtlasAsset so custom packing can be implemented. |





### Static Methods



| Method | Description |
| --- | --- |
| Load | Loads SpriteAtlasAsset at the given path. File extension of SpriteAtlasAsset is *.spriteatlasv2. |
| Save | Saves SpriteAtlasAsset to disk. File extension of SpriteAtlasAsset is *.spriteatlasv2. |





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



### Operators

| Operator | Description |
| --- | --- |
| bool | Does the object exist? |
| operator != | Compares if two objects refer to a different object. |
| operator == | Compares two object references to see if they refer to the same object. |





            
