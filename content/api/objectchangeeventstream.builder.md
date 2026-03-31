This version of Unity is unsupported.



# Builder





struct in
          UnityEditor


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



Provides a way to construct an instance of [ObjectChangeEventStream](ObjectChangeEventStream.html).





### Properties



| Property | Description |
| --- | --- |
| eventCount | The number of events that have been recorded in this instance so far. |





### Constructors



| Constructor | Description |
| --- | --- |
| ObjectChangeEventStream.Builder | Constructs a new instance. |





### Public Methods



| Method | Description |
| --- | --- |
| Dispose | Releases the memory associated with this instance. |
| PushChangeAssetObjectPropertiesEvent | Adds an ChangeAssetObjectPropertiesEventArgs to the end of the stream. |
| PushChangeGameObjectOrComponentPropertiesEvent | Adds an ChangeGameObjectOrComponentPropertiesEventArgs to the end of the stream. |
| PushChangeGameObjectParentEvent | Adds an ChangeGameObjectParentEventArgs to the end of the stream. |
| PushChangeGameObjectStructureEvent | Adds an ChangeGameObjectStructureEventArgs to the end of the stream. |
| PushChangeGameObjectStructureHierarchyEvent | Adds an ChangeGameObjectStructureHierarchyEventArgs to the end of the stream. |
| PushChangeSceneEvent | Adds an ChangeSceneEventArgs to the end of the stream. |
| PushCreateAssetObjectEvent | Adds an CreateAssetObjectEventArgs to the end of the stream. |
| PushCreateGameObjectHierarchyEvent | Adds an CreateGameObjectHierarchyEventArgs to the end of the stream. |
| PushDestroyAssetObjectEvent | Adds an DestroyAssetObjectEventArgs to the end of the stream. |
| PushDestroyGameObjectHierarchyEvent | Adds an DestroyGameObjectHierarchyEventArgs to the end of the stream. |
| PushUpdatePrefabInstancesEvent | Adds an UpdatePrefabInstancesEventArgs to the end of the stream. |
| ToStream | Copies the data collected in this instance into a new ObjectChangeEventStream instance. |


            
