This version of Unity is unsupported.



# [BakeProgressState](LightTransport.BakeProgressState.html).IncrementCompletedWorkSteps




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

public void IncrementCompletedWorkSteps(ulong steps);






### Parameters



| Parameter | Description |
| --- | --- |
| steps | Number of work steps to increment by. |





### Description



Increments the amount of completed work steps for this progress state.





Updates the progress by adding the specified number of completed work steps. This method is typically called by the implementation during operation execution to report incremental progress.

The progress percentage is calculated as: completedSteps / totalSteps.

Additional resources: SetTotalWorkSteps for setting the total expected work.


              


```
// Custom operation with manual progress reporting
using var progress = new BakeProgressState();
progress.SetTotalWorkSteps(100);for (int i = 0; i < 100; i++)
{
    // Perform some work
    ProcessLightProbe(i);    // Report progress
    progress.IncrementCompletedWorkSteps(1);    // Log progress
    float currentProgress = progress.Progress();
    Debug.Log($"Processing: {currentProgress * 100:F0}% complete");    // Check for cancellation
    if (progress.WasCancelled())
    {
        Debug.Log("Operation cancelled by user");
        break;
    }
}
```


            
