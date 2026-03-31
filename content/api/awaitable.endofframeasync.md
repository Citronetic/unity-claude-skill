This version of Unity is unsupported.



# [Awaitable](Awaitable.html).EndOfFrameAsync




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

public static [Awaitable](Awaitable.html) EndOfFrameAsync(CancellationToken cancellationToken);






### Parameters



| Parameter | Description |
| --- | --- |
| cancellationToken | Optional cancellation token used to signal cancellation. |





### Description



Resumes execution after all Unity subsystems have run for the current frame.





**Note:** This method can only be called from the main thread and always completes on main thread.
Also, in Editor, this awaitable is incompatible with BatchMode and requires the game to be in play mode (in edit mode, it will never complete).


              


```
private async Awaitable DoSomethingAsync()
{
   Debug.Log("Before game systems got updated for current thread");
   await Awaitable.EndOfFrameAsync();
   Debug.Log("After game systems got updated for current thread");
}
```


            
