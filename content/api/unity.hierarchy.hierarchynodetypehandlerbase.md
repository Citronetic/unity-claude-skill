This version of Unity is unsupported.



# HierarchyNodeTypeHandlerBase





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



Provides a base class for hierarchy node type handlers.





### Properties



| Property | Description |
| --- | --- |
| CommandList | Get the HierarchyCommandList associated with this handler. |
| Hierarchy | Get the Hierarchy owning this handler. |





### Public Methods



| Method | Description |
| --- | --- |
| Dispose | Disposes this hierarchy node type handler to free up resources in the derived class. |
| GetDefaultNodeFlags | Get the default value used to initialize a hierarchy node flags. |
| GetNodeType | Retrieves the hierarchy node type for this hierarchy node type handler. |
| GetNodeTypeName | Get the type name of this hierarchy node type handler. |
| SearchMatch | Determines if a node matches the search query. |





### Protected Methods



| Method | Description |
| --- | --- |
| Initialize | Initializes this hierarchy node type handler. |
| SearchBegin | Called when a new search query begins. |
| SearchEnd | Called when a search query ends. |


            
