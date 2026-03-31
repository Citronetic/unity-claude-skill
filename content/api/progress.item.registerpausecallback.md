This version of Unity is unsupported.



# [Progress.Item](Progress.Item.html).RegisterPauseCallback




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















## Declaration

public void RegisterPauseCallback(Func<bool,bool> callback);






### Parameters



| Parameter | Description |
| --- | --- |
| callback | This function is called when a progress indicator's task is paused. It takes a boolean parameter that specifies whether the task needs to pause or resume. When the value is true, the task needs to pause. When the value is false, the task needs to resume. The function returns true if it actually performed the requested action. |





### Description



Registers a callback that is called when a user pauses a running progress indicator's task.





Additional resources: [Progress.RegisterPauseCallback](Progress.RegisterPauseCallback.html), [Progress.Item.UnregisterPauseCallback](Progress.Item.UnregisterPauseCallback.html), [Progress.Item.Pause](Progress.Item.Pause.html).


            
