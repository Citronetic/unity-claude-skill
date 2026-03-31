This version of Unity is unsupported.



# LightingDataAsset





class in
          UnityEditor



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



The lighting data asset used by the active Scene.





Please note that modifying this value currently does not affect the Scene immediately, the lighting data is only patched into the active Scene when loading the Scene.





### Constructors



| Constructor | Description |
| --- | --- |
| LightingDataAsset | Constructs an empty LightingDataAsset associated with specific scene. |





### Public Methods



| Method | Description |
| --- | --- |
| GetAmbientProbe | Gets the ambient probe stored in a LightingDataAsset in L2 spherical harmonic encoding. |
| GetDefaultReflectionCubemap | Gets the default reflection cubemap stored in a LightingDataAsset. |
| SetAmbientProbe | Sets the ambient probe stored in a LightingDataAsset. |
| SetDefaultReflectionCubemap | Sets the default reflection cubemap stored in a LightingDataAsset. |
| SetLights | Overwrites the Lights referenced by a LightingDataAsset. |





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





            
