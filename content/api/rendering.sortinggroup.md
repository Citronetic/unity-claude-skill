This version of Unity is unsupported.



# SortingGroup





class in
          UnityEngine.Rendering



/



Inherits from:[Behaviour](Behaviour.html)



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



Adding a SortingGroup component to a GameObject will ensure that all Renderers within the GameObject's descendants will be sorted and rendered together.





A common use case for having a SortingGroup is to create complex 2D characters that are made up of multiple [SpriteRenderer](SpriteRenderer.html)s. When several clones of such a character overlap, their individual body parts might not be sorted properly resulting in a visual glitch where the the body parts interleave. For example, the hands of two characters might be sorted in front of their bodies, where you would expect one entire character to be drawn in front of the other character. The SortingGroup component solves this by ensuring the entire branch of the character are sorted and rendered together.

The descendants of the SortingGroup are sorted using the same [SortingLayer](SortingLayer.html) and [Renderer.sortingOrder](Renderer-sortingOrder.html). However, they are only sorted against other descendants of the SortingGroup and not with any renderers outside of it. This allows you to reuse the same [SortingLayer](SortingLayer.html)s (for example, "Hands", "Torso"...) to sort body parts while ensuring they never interleave with other clones of the character.

The SortingGroups, together with other renderers, are sorted using the [SortingLayer](SortingLayer.html) and [Renderer.sortingOrder](Renderer-sortingOrder.html). Additionally, they can be nested within other SortingGroups. This is useful if you have branches of descendants that should not be mixed up i.e. the "Left Hand" vs the "Right Hand" hierarchy branches.

The maximum number of sorting groups and renderers is 4096.





### Properties



| Property | Description |
| --- | --- |
| sortAtRoot | Ignores any parent SortingGroup and sorts this and its descendant Renderers against other Renderers at the root level. |
| sortingLayerID | Unique ID of the Renderer's sorting layer. |
| sortingLayerName | Name of the Renderer's sorting layer. |
| sortingOrder | Renderer's order within a sorting layer. |





### Static Methods



| Method | Description |
| --- | --- |
| UpdateAllSortingGroups | Updates all Sorting Group immediately. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| enabled | Enabled Behaviours are Updated, disabled Behaviours are not. |
| isActiveAndEnabled | Checks whether a component is enabled, attached to a GameObject that is active in the hierarchy, and the component's OnEnable has been called. |
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





            
