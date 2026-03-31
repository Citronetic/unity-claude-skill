This version of Unity is unsupported.



# HierarchyCommandList





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



Represents a list of commands that modify a hierarchy.





### Properties



| Property | Description |
| --- | --- |
| Capacity | The capacity in bytes for storing commands in the command list. |
| IsCreated | Determines if this object is valid and uses memory. |
| IsEmpty | Determines if the command list is empty. |
| IsExecuting | Determines if the command list is currently executing. |
| Size | The current size in bytes used by commands in the command list. |





### Constructors



| Constructor | Description |
| --- | --- |
| HierarchyCommandList | Constructs a new HierarchyCommandList. |





### Public Methods



| Method | Description |
| --- | --- |
| Add | Adds a new node that has a specified parent node to the hierarchy. |
| Clear | Clears all commands from the command list. |
| ClearProperty | Clears a property value for the specified hierarchy node. |
| Dispose | Disposes the command list and releases its memory. |
| Execute | Executes all the commands in the hierarchy command list. |
| ExecuteIncremental | Executes one command from the hierarchy command list. |
| ExecuteIncrementalTimed | Executes commands from the hierarchy command list until a time limit is reached. |
| Remove | Removes a node from the hierarchy. |
| RemoveChildren | Recursively removes all children of a node. |
| Reserve | Reserves memory for nodes to use. Use this to avoid memory allocation hits when you add batches of nodes. |
| SetName | Sets a name for a hierarchy node. |
| SetParent | Sets the parent node of a hierarchy node. |
| SetProperty | Sets a value for a property of a hierarchy node. |
| SetSortIndex | Sets the sorting index for a hierarchy node. |
| SortChildren | Sorts the child nodes of a hierarchy node by their sort index. |


            
