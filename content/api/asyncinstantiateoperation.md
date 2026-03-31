This version of Unity is unsupported.



# AsyncInstantiateOperation





class in
          UnityEngine



/



Inherits from:[AsyncOperation](AsyncOperation.html)



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



Asynchronous instantiate operation on UnityEngine.Object type.





The operation is used by Object.InstantiateAsync internally and usually wrapped by AsyncInstantiateOperation<T>.





### Properties



| Property | Description |
| --- | --- |
| Result | If isDone is true, then Result contains the instantiated objects. The size of the array is the same as the 'count' argument for the InstantiateAsync call. |





### Public Methods



| Method | Description |
| --- | --- |
| Cancel | Method that cancels all the operations connected to the asynchronous instantiation if the operation is not done yet, that is, where isDone == false. This method deletes all the objects created so far, which are not visible to users while they're not activated, and stops all the internal jobs connected to the operation. |
| IsWaitingForSceneActivation | This property can be true only if allowSceneActivation is set to false, and if the operation has already completed everything needed for object instantiation except for the main thread integrating the objects and calling their Awake methods. Users can set allowSceneActivation to true to trigger the activation or call the Cancel method to cancel instantiation. |
| WaitForCompletion | Blocks the current thread until this operation is done. |





### Static Methods



| Method | Description |
| --- | --- |
| GetIntegrationTimeMS | Gets the target duration allowed per frame to integrate instantiated object operations, in milliseconds. |
| SetIntegrationTimeMS | Sets the target duration allowed per frame to integrate instantiated object operations, in milliseconds. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| allowSceneActivation | Allow Scenes to be activated as soon as it is ready. |
| isDone | Has the operation finished? (Read Only) |
| priority | Priority lets you tweak in which order async operation calls will be performed. |
| progress | What's the operation's progress. (Read Only) |











### Events

| Event | Description |
| --- | --- |
| completed | Raised when this AsyncOperation operation has completed. |



            
