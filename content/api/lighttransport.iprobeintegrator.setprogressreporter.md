This version of Unity is unsupported.



# [IProbeIntegrator](LightTransport.IProbeIntegrator.html).SetProgressReporter




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

public void SetProgressReporter([LightTransport.BakeProgressState](LightTransport.BakeProgressState.html) progress);






### Parameters



| Parameter | Description |
| --- | --- |
| progress | Progress state object that will receive updates during integration. |





### Description



Configures progress tracking for integration operations.





Sets up progress reporting for long-running integration operations. The integrator updates the progress state during execution, allowing external systems to display progress information and handle cancellation requests.

The progress reporter provides:



          - Completion percentage (0.0 to 1.0).

          - Ability to cancel operations.

          - Work step tracking for detailed progress.





Additional resources: [BakeProgressState.Progress](LightTransport.BakeProgressState.Progress.html), [BakeProgressState.Cancel](LightTransport.BakeProgressState.Cancel.html).


              


```
var integrator = new RadeonRaysProbeIntegrator();
using var progress = new BakeProgressState();
integrator.SetProgressReporter(progress);// Start integration in background
var integrationTask = Task.Run(() =>
{
    return integrator.IntegrateDirectRadiance(context, 0, 1000, 2048, false, outputBuffer);
});// Monitor progress
while (!integrationTask.IsCompleted)
{
    float currentProgress = progress.Progress();
    Debug.Log($"Integration progress: {currentProgress * 100:F1}%");    // Allow user to cancel
    if (userRequestedCancel)
    {
        progress.Cancel();
    }    await Task.Delay(100);
}var result = await integrationTask;
```


            
