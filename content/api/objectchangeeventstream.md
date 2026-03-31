This version of Unity is unsupported.



# ObjectChangeEventStream





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



Represents a stream of events that describes the changes applied to objects in memory over the course of a frame.





### Properties



| Property | Description |
| --- | --- |
| isCreated | Indicates whether the ObjectChangeEventStream has an allocated memory buffer. |
| length | The number of events in the stream. |





### Public Methods



| Method | Description |
| --- | --- |
| Clone | Creates a copy of this stream with the specified allocator. |
| Dispose | Releases the memory associated with this stream. |
| GetChangeAssetObjectPropertiesEvent | Retrieves the event data at the given index as a ChangeAssetObjectPropertiesEventArgs. Throws an exception if the event type requested does not match the event stored in the stream. |
| GetChangeChildrenOrderEvent | Retrieves the event data at the given index as a ChangeChildrenOrderEventArgs. Throws an exception if the event type requested does not match the event stored in the stream. |
| GetChangeGameObjectOrComponentPropertiesEvent | Retrieves the event data at the given index as a ChangeAssetObjectPropertiesEventArgs. Throws an exception if the event type requested does not match the event stored in the stream. |
| GetChangeGameObjectParentEvent | Retrieves the event data at the given index as a ChangeGameObjectParentEventArgs. Throws an exception if the event type requested does not match the event stored in the stream. |
| GetChangeGameObjectStructureEvent | Retrieves the event data at the given index as a ChangeGameObjectStructureEventArgs. Throws an exception if the event type requested does not match the event stored in the stream. |
| GetChangeGameObjectStructureHierarchyEvent | Retrieves the event data at the given index as a ChangeGameObjectStructureHierarchyEventArgs. Throws an exception if the event type requested does not match the event stored in the stream. |
| GetChangeRootOrderEvent | Retrieves the event data at the given index as a ChangeRootOrderEventArgs. Throws an exception if the event type requested does not match the event stored in the stream. |
| GetChangeSceneEvent | Retrieves the event data at the given index as a ChangeSceneEventArgs. Throws an exception if the event type requested does not match the event stored in the stream. |
| GetCreateAssetObjectEvent | Retrieves the event data at the given index as a CreateAssetObjectEventArgs. Throws an exception if the event type requested does not match the event stored in the stream. |
| GetCreateGameObjectHierarchyEvent | Retrieves the event data at the given index as a CreateGameObjectHierarchyEventArgs. Throws an exception if the event type requested does not match the event stored in the stream. |
| GetDestroyAssetObjectEvent | Retrieves the event data at the given index as a DestroyAssetObjectEventArgs. Throws an exception if the event type requested does not match the event stored in the stream. |
| GetDestroyGameObjectHierarchyEvent | Retrieves the event data at the given index as a DestroyGameObjectHierarchyEventArgs. Throws an exception if the event type requested does not match the event stored in the stream. |
| GetEventType | Returns the type of the event at the specified index. |
| GetUpdatePrefabInstancesEvent | Retrieves the event data at the given index as a UpdatePrefabInstancesEventArgs. Throws an exception if the event type requested does not match the event stored in the stream. |


            
