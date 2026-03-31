This version of Unity is unsupported.



# UnityWebRequestAsyncOperation





class in
          UnityEngine.Networking



/



Inherits from:[AsyncOperation](AsyncOperation.html)



/



Implemented in:[UnityEngine.UnityWebRequestModule](UnityEngine.UnityWebRequestModule.html)


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



Asynchronous operation object returned from [UnityWebRequest.SendWebRequest](Networking.UnityWebRequest.SendWebRequest.html)().

You can yield until it continues, register an event handler with [AsyncOperation.completed](AsyncOperation-completed.html), or manually check whether it's done ([AsyncOperation.isDone](AsyncOperation-isDone.html)) or progress ([AsyncOperation.progress](AsyncOperation-progress.html)).





### Properties



| Property | Description |
| --- | --- |
| webRequest | Returns the associated UnityWebRequest that created the operation. |





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



            
