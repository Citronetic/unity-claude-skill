This version of Unity is unsupported.



# LODGroup





class in
          UnityEngine



/



Inherits from:[Component](Component.html)



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




                [Switch to Manual](../Manual/class-LODGroup.html)














### Description



LODGroup lets you group multiple Renderers into LOD levels.





This can be used to switch between different LOD levels at runtime based on size on screen.





### Static Properties



| Property | Description |
| --- | --- |
| crossFadeAnimationDuration | The cross-fading animation duration in seconds. ArgumentException will be thrown if it is set to zero or a negative value. |





### Properties



| Property | Description |
| --- | --- |
| animateCrossFading | Specify if the cross-fading should be animated by time. The animation duration is specified globally as crossFadeAnimationDuration. |
| enabled | Allows you to enable or disable the LODGroup. |
| fadeMode | The LOD fade mode used. |
| lastLODBillboard | Specify whether the last LOD level is a BillboardRenderer. |
| localReferencePoint | The local reference point against which the LOD distance is calculated. |
| lodCount | The number of LOD levels. |
| size | The size of the LOD object in local space. |





### Public Methods



| Method | Description |
| --- | --- |
| ForceLOD | Disable automatic LOD selection based on camera distance by forcing a specific LOD level, or revert to the default automatic behavior by passing a negative value as parameter. |
| GetLODs | Returns the array of LODs. |
| RecalculateBounds | Recalculate the bounding region for the LODGroup. This process can be slow. To avoid lag, call this function infrequently. |
| SetLODs | Set the LODs for the LOD group. This removes any existing LODs configured on the LODGroup. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| gameObject | The game object this component is attached to. A component is always attached to a game object. |
| tag | The tag of this game object. |
| transform | The Transform attached to this GameObject. |
| hideFlags | Should the object be hidden, saved with the Scene or modifiable by the user? |
| name | The name of the object. |






### Public Methods

| Method | Description |
| --- | --- |
| BroadcastMessage | Calls the method named methodName on every MonoBehaviour in this game object or any of its children. |
| CompareTag | Checks the GameObject's tag against the defined tag. |
| GetComponent | Gets a reference to a component of type T on the same GameObject as the component specified. |
| GetComponentInChildren | Gets a reference to a component of type T on the same GameObject as the component specified, or any child of the GameObject. |
| GetComponentIndex | Gets the index of the component on its parent GameObject. |
| GetComponentInParent | Gets a reference to a component of type T on the same GameObject as the component specified, or any parent of the GameObject. |
| GetComponents | Gets references to all components of type T on the same GameObject as the component specified. |
| GetComponentsInChildren | Gets references to all components of type T on the same GameObject as the component specified, and any child of the GameObject. |
| GetComponentsInParent | Gets references to all components of type T on the same GameObject as the component specified, and any parent of the GameObject. |
| SendMessage | Calls the method named methodName on every MonoBehaviour in this game object. |
| SendMessageUpwards | Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. |
| TryGetComponent | Gets the component of the specified type, if it exists. |
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





            
