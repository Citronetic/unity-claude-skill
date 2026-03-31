This version of Unity is unsupported.



# AwaitableCompletionSource





class in
          UnityEngine



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



Objects allowing to control completion of an Awaitable object from user code.





### Properties



| Property | Description |
| --- | --- |
| Awaitable | Get the awaitable controlled by the completion source. |





### Public Methods



| Method | Description |
| --- | --- |
| Reset | Reset the completion source (this will set the Awaitable property to a new Awaitable object). |
| SetCanceled | Raise cancellation. |
| SetException | Raise completion with an exception. |
| SetResult | Raise completion. |
| TrySetCanceled | Raise cancellation (returns false if the awaitable was already completed or canceled). |
| TrySetException | Raise completion with an exception. |
| TrySetResult | Raise the awaitable completion. |


            
