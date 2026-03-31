This version of Unity is unsupported.



# HierarchyFlattened





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



Represents a read-only array of [HierarchyFlattenedNode](Unity.Hierarchy.HierarchyFlattenedNode.html) over a [Hierarchy](Unity.Hierarchy.Hierarchy.html). Used as an acceleration structure for query purposes.





Querying information about nodes completes much faster than the same methods
 on [Hierarchy](Unity.Hierarchy.Hierarchy.html) because they are stored during the updates.





### Properties



| Property | Description |
| --- | --- |
| Count | The total number of nodes. |
| Hierarchy | Accesses the hierarchy. |
| IsCreated | Whether this object is valid and uses memory or not. |
| this[int] | Gets the HierarchyFlattenedNode at a specified index. |
| UpdateNeeded | Determines if the flattened hierarchy needs an update. |
| Updating | Whether the flattened hierarchy is currently updating. |





### Constructors



| Constructor | Description |
| --- | --- |
| HierarchyFlattened | Cosntructs a new HierarchyFlattened. |





### Public Methods



| Method | Description |
| --- | --- |
| Contains | Determines if a specified node is in the hierarchy flattened. |
| Dispose | Disposes this object to release its memory. |
| EnumerateChildren | Gets an enumerable of children HierarchyNode for the specified node. |
| GetChildrenCount | Gets the number of child nodes that a hierarchy node has. |
| GetChildrenCountRecursive | Gets the number of child nodes that a hierarchy node has, including children of children. |
| GetDepth | Determines the depth of a node. |
| GetEnumerator | Gets the HierarchyFlattenedNode enumerator. |
| GetNextSibling | Gets the next sibling of a node. |
| GetParent | Gets the parent of a hierarchy node. |
| IndexOf | Gets the zero-based index of a specified node. |
| Update | Updates the flattened hierarchy and requests a rebuild of the list of HierarchyFlattenedNode from the Hierarchy topology. |
| UpdateIncremental | Updates the flattened hierarchy incrementally. |
| UpdateIncrementalTimed | Incrementally updates the flattened hierarchy until a time limit is reached. |


            
