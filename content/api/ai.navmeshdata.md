This version of Unity is unsupported.



# NavMeshData





class in
          UnityEngine.AI



/



Inherits from:[Object](Object.html)



/



Implemented in:[UnityEngine.AIModule](UnityEngine.AIModule.html)


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



Contains and represents NavMesh data.





An object of this class can be used for creating instances of NavMeshes. See [NavMesh.AddNavMeshData](AI.NavMesh.AddNavMeshData.html). The contained NavMesh can be built and updated using the build API. See [NavMeshBuilder](AI.NavMeshBuilder.html) and methods therein.





### Properties



| Property | Description |
| --- | --- |
| position | Gets or sets the world space position of the NavMesh data. |
| rotation | Gets or sets the orientation of the NavMesh data. |
| sourceBounds | Returns the bounding volume of the input geometry used to build this NavMesh (Read Only). |





### Constructors



| Constructor | Description |
| --- | --- |
| NavMeshData | Constructs a new object for representing a NavMesh for the default agent type. |





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





            
