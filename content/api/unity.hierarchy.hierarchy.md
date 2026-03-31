This version of Unity is unsupported.



# Hierarchy





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



Represents a tree-like container of nodes.





### Properties



| Property | Description |
| --- | --- |
| Count | The total number of nodes. |
| IsCreated | Whether or not this object is valid and uses memory. |
| Root | The root node. |
| UpdateNeeded | Whether the hierarchy requires an update. |
| Updating | Whether the hierarchy is currently updating. |





### Constructors



| Constructor | Description |
| --- | --- |
| Hierarchy | Constructs a new Hierarchy. |





### Public Methods



| Method | Description |
| --- | --- |
| Add | Adds a new node that has a specified parent node to the hierarchy. |
| Clear | Removes all nodes from the hierarchy. |
| Dispose | Dispose this object to release its memory. |
| DoesChildrenNeedsSorting | Gets whether the child nodes of a hierarchy node need to be sorted. |
| EnumerateChildren | Gets the child nodes of a hierarchy node. |
| EnumerateNodeTypeHandlersBase | Enumerates all the node type handlers base that this hierarchy uses. |
| Exists | Determines whether a node exists or not. |
| GetChild | Gets the child node at the specified index of a hierarchy node. |
| GetChildIndex | Gets the index of a child node in the parent's children list. |
| GetChildren | Gets the child nodes of a hierarchy node. |
| GetChildrenCount | Gets the number of child nodes that a hierarchy node has. |
| GetChildrenCountRecursive | Gets the number of child nodes that a hierarchy node has, including children of children. |
| GetDepth | Determines the depth of a node. |
| GetName | Gets the name of a hierarchy node. |
| GetNextSibling | Gets the next sibling of a node. |
| GetNodeType | Gets the type of the specified hierarchy node. |
| GetNodeTypeHandlerBase | Gets a hierarchy node type handler instance from this hierarchy. |
| GetOrCreateNodeTypeHandler | Get or create a hierarchy node type handler instance for this hierarchy. |
| GetOrCreatePropertyString | Creates a string property with a specified name. |
| GetOrCreatePropertyUnmanaged | Creates an unmanaged property with a specified name. |
| GetParent | Gets the parent of a hierarchy node. |
| GetPath | Gets the path of a hierarchy node. |
| GetSortIndex | Gets the sort index of a hierarchy node. Default is 0. |
| Remove | Removes a node from the hierarchy. |
| RemoveChildren | Recursively removes all children of a node. |
| Reserve | Ensures that the hierarchy has enough memory reserved for storing the specified number of nodes. |
| ReserveChildren | Ensures that the hierarchy node has enough memory reserved for storing the specified number of children nodes. |
| SetName | Sets the name of a hierarchy node. |
| SetParent | Sets the parent of a hierarchy node. |
| SetSortIndex | Sets the sort index of a hierarchy node. |
| SortChildren | Sorts the child nodes of a hierarchy node according to their sort index. |
| Update | Updates the hierarchy and requests that every registered hierarchy node type handler integrates their changes into the hierarchy. |
| UpdateIncremental | Updates the hierarchy incrementally. |
| UpdateIncrementalTimed | Incrementally updates the hierarchy until a time limit is reached. |


            
