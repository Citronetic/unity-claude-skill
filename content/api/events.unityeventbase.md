This version of Unity is unsupported.



# UnityEventBase





class in
          UnityEngine.Events



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


                  Leave feedback





Implements interfaces:[ISerializationCallbackReceiver](ISerializationCallbackReceiver.html)




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



Abstract base class for UnityEvents.





This class provides the base functionality for the UnityEvents.





### Public Methods



| Method | Description |
| --- | --- |
| GetPersistentEventCount | Get the number of registered persistent listeners. |
| GetPersistentListenerState | Returns the execution state of a persistent listener. |
| GetPersistentMethodName | Get the target method name of the listener at index index. |
| GetPersistentTarget | Get the target component of the listener at index index. |
| RemoveAllListeners | Remove all non-persistent (ie created from script) listeners  from the event. |
| SetPersistentListenerState | Modify the execution state of a persistent listener. |





### Static Methods



| Method | Description |
| --- | --- |
| GetValidMethodInfo | Given an object, function name, and a list of argument types; find the method that matches. |


            
