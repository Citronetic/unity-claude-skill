This version of Unity is unsupported.



# BakeProgressState





class in
          UnityEngine.LightTransport


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



Provides progress reporting and cancellation support for asynchronous light baking operations.





This class reports progress for ongoing asynchronous bake operations and provides a method to request the cancellation of the operation. It supports work-step based progress tracking and can be shared across multiple operations for unified progress reporting.

BakeProgressState is commonly used with:



          - [InputExtraction.PopulateWorld](LightTransport.InputExtraction.PopulateWorld.html) for world population progress.

          - [IProbeIntegrator](LightTransport.IProbeIntegrator.html) methods for integration progress tracking.

          - Long-running light transport operations that benefit from progress feedback.





The progress state uses a work-step model where the total expected work is set upfront and completed work is incremented as operations progress.


              


```
// Set up progress tracking for a baking operation
using var progress = new BakeProgressState();
progress.SetTotalWorkSteps(1000);// Configure integrator to report progress
var integrator = new RadeonRaysProbeIntegrator();
integrator.SetProgressReporter(progress);// Start integration operation
var integrationTask = Task.Run(() =>
{
    return integrator.IntegrateDirectRadiance(
        context, 0, probeCount, 2048, false, outputBuffer);
});// Monitor progress and allow cancellation
while (!integrationTask.IsCompleted)
{
    float currentProgress = progress.Progress();
    Debug.Log($"Baking progress: {currentProgress * 100:F1}%");    // Check for user cancellation
    if (Input.GetKeyDown(KeyCode.Escape))
    {
        progress.Cancel();
        Debug.Log("Cancelling bake operation...");
    }    await Task.Delay(100);
}// Check if operation was cancelled
if (progress.WasCancelled())
{
    Debug.Log("Bake operation was cancelled");
}
else
{
    var result = await integrationTask;
    Debug.Log($"Bake completed: {result.type}");
}
```





### Constructors



| Constructor | Description |
| --- | --- |
| BakeProgressState | Constructor. |





### Public Methods



| Method | Description |
| --- | --- |
| Cancel | Cancel the asynchronous operation. |
| Dispose | Dispose the BakeProgressState object. |
| IncrementCompletedWorkSteps | Increments the amount of completed work steps for this progress state. |
| Progress | Get the progress value. |
| SetTotalWorkSteps | Sets the total amount of work steps for the progress state. Increase the completed work steps using IncrementCompletedWorkSteps. |
| WasCancelled | Checks whether the work represented by this progress state was cancelled. |


            
