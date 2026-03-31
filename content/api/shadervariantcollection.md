This version of Unity is unsupported.



# ShaderVariantCollection





class in
          UnityEngine



/



Inherits from:[Object](Object.html)



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



ShaderVariantCollection records which shader variants are actually used in each shader.





This is used for shader preloading ("warmup"), so that a game can make sure "actually required"
shader variants are loaded at startup (or level load time), to avoid shader compilation related hiccups later on in the game.

In Unity, many shaders internally have multiple "variants", to account for different light modes, lightmaps, shadows and so on. These variants are identified by a shader pass type, and a set of shader keywords. See [ShaderVariant](ShaderVariantCollection.ShaderVariant.html).

Typical use of ShaderVariantCollection is to record the shader variants used during a play session from the editor (under Graphics Settings), save them out as an asset, and add to the list of preloaded shaders (again in Graphics Settings). Additionally, you could call [WarmUp](ShaderVariantCollection.WarmUp.html) on a ShaderVariantCollection object manually.

ShaderVariantCollection generally replaces the old [Shader.WarmupAllShaders](Shader.WarmupAllShaders.html) function.





### Properties



| Property | Description |
| --- | --- |
| isWarmedUp | Is this ShaderVariantCollection already warmed up? (Read Only) |
| shaderCount | Number of shaders in this collection (Read Only). |
| variantCount | Number of total variants in this collection (Read Only). |
| warmedUpVariantCount | Number of total variants in this collection that are already warmed up (Read Only). |





### Constructors



| Constructor | Description |
| --- | --- |
| ShaderVariantCollection | Create a new empty shader variant collection. |





### Public Methods



| Method | Description |
| --- | --- |
| Add | Adds a new shader variant to the collection. |
| Clear | Remove all shader variants from the collection. |
| Contains | Checks if a shader variant is in the collection. |
| Remove | Removes shader variant from the collection. |
| WarmUp | Prewarms all shader variants in this shader variant collection. |
| WarmUpProgressively | Prewarms the given number of shader variants in this shader variant collection. |





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





            
