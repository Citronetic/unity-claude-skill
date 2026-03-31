This version of Unity is unsupported.



# HierarchyViewModel





class in
          Unity.Hierarchy



/



Implemented in:[UnityEngine.HierarchyCoreModule](UnityEngine.HierarchyCoreModule.html)


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



A hierarchy view model is a read-only filtering view of a [HierarchyFlattened](Unity.Hierarchy.HierarchyFlattened.html).





### Properties



| Property | Description |
| --- | --- |
| Count | The total number of nodes. |
| Hierarchy | Accesses the Hierarchy. |
| HierarchyFlattened | Accesses the HierarchyFlattened. |
| IsCreated | Whether this object is valid and uses memory. |
| this[int] | Gets the HierarchyNode at a specified index. |
| UpdateNeeded | Whether the hierarchy view model requires an update. |
| Updating | Whether the hierarchy view model is currently updating. |





### Constructors



| Constructor | Description |
| --- | --- |
| HierarchyViewModel | Cosntructs a new HierarchyViewModel. |





### Public Methods



| Method | Description |
| --- | --- |
| ClearFlags | Clears the specified flags on all hierarchy nodes. |
| Contains | Determines if a specified node is in the hierarchy view model. |
| Dispose | Disposes this object and releases its memory. |
| DoesNotHaveAllFlags | Gets whether or not all of the specified flags are not set on any hierarchy node. |
| DoesNotHaveAllFlagsCount | Gets the number of nodes that do not have all of the specified flags set. |
| DoesNotHaveAnyFlags | Gets whether or not any of the specified flags are not set on any hierarchy node. |
| DoesNotHaveAnyFlagsCount | Gets the number of nodes that do not have any of the specified flags set. |
| EnumerateNodesWithAllFlags | Gets an enumerable of all hierarchy nodes that have all of the specified flags set. |
| EnumerateNodesWithAnyFlags | Gets an enumerable of all hierarchy nodes that have any of the specified flags set. |
| EnumerateNodesWithoutAllFlags | Gets an enumerable of all hierarchy nodes that do not have all of the specified flags set. |
| EnumerateNodesWithoutAnyFlags | Gets an enumerable of all hierarchy nodes that do not have any of the specified flags set. |
| GetChildrenCount | Gets the number of child nodes that a hierarchy node has. |
| GetChildrenCountRecursive | Gets the number of child nodes that a hierarchy node has, including children of children. |
| GetDepth | Determines the depth of a node. |
| GetEnumerator | Gets the HierarchyNode enumerator. |
| GetFlags | Gets all the flags set on a given hierarchy node. |
| GetIndicesWithAllFlags | Gets the indices for all hierarchy nodes that have all of the specified flags set. |
| GetIndicesWithAnyFlags | Gets the indices for all hierarchy nodes that have any of the specified flags set. |
| GetIndicesWithoutAllFlags | Gets the indices of all hierarchy nodes that do not have all of the specified flags set. |
| GetIndicesWithoutAnyFlags | Gets the indices of all hierarchy nodes that do not have any of the specified flags set. |
| GetNextSibling | Gets the next sibling of a node. |
| GetNodesWithAllFlags | Gets all hierarchy nodes that have all of the specified flags set. |
| GetNodesWithAnyFlags | Gets all hierarchy nodes that have any of the specified flags set. |
| GetNodesWithoutAllFlags | Gets all hierarchy nodes that do not have all of the specified flags set. |
| GetNodesWithoutAnyFlags | Gets all hierarchy nodes that do not have any of the specified flags set. |
| GetParent | Gets the parent of a hierarchy node. |
| HasAllFlags | Gets whether or not all of the specified flags are set on any hierarchy node. |
| HasAllFlagsCount | Gets the number of nodes that have all of the specified flags set. |
| HasAnyFlags | Gets whether or not any of the specified flags are set on any hierarchy node. |
| HasAnyFlagsCount | Gets the number of nodes that have any of the specified flags set. |
| IndexOf | Gets the zero-based index of a specified node. |
| SetFlags | Sets the specified flags on all hierarchy nodes. |
| SetQuery | Sets the search query. |
| ToggleFlags | Toggles the specified flags on all hierarchy nodes. |
| Update | Updates the hierarchy view model and requests a rebuild of the list of HierarchyNode that filters the HierarchyFlattened. |
| UpdateIncremental | Updates the hierarchy view model incrementally. |
| UpdateIncrementalTimed | Updates the hierarchy view model incrementally until a time limit is reached. |


            
