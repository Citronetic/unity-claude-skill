This version of Unity is unsupported.



# AsyncReadManagerMetrics





class in
          Unity.IO.LowLevel.Unsafe



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



Manages the recording and retrieval of metrics from the [AsyncReadManager](Unity.IO.LowLevel.Unsafe.AsyncReadManager.html).





The metrics manager records the states and timings of individual read operations, as well as additional, contextual information for certain asset types.  The manager collects metrics for C# [AsyncReadManager.Read](Unity.IO.LowLevel.Unsafe.AsyncReadManager.Read.html) operations and read operations from internal Unity systems.

            Begin recording metrics by calling [StartCollectingMetrics](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.StartCollectingMetrics.html) and end recording with [StopCollectingMetrics](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.StopCollectingMetrics.html). You can enable metrics collection when your program first launches using the command-line argument "-enable-file-read-metrics". Turn off metrics when your data collection is finished to avoid the small performance impact associated with metric collection.

            Retrieve metric data by calling [GetMetrics](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.GetMetrics.html), which returns an array of metrics records. You can also get a summary of the current data with  [GetCurrentSummaryMetrics](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.GetCurrentSummaryMetrics.html). In both cases, you can choose whether or not to clear the existing metrics when you make these functions calls. If you do not clear the metrics data, then the same records are included in the returned array or summary the next time you get the metrics or a summary. If you do clear the metrics, only new data is included the next time you call either method.

            Call [GetSummaryOfMetrics](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.GetSummaryOfMetrics.html) to summarize the records in an array of [AsyncReadManagerRequestMetric](Unity.IO.LowLevel.Unsafe.AsyncReadManagerRequestMetric.html) objects (which you have retrieved earlier using [GetMetrics](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.GetMetrics.html)). When calling either [GetSummaryOfMetrics](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.GetSummaryOfMetrics.html) or [GetCurrentSummaryMetrics](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.GetCurrentSummaryMetrics.html), you can filter the data used to compute the summary by passing in a set of [AsyncReadManagerMetricsFilters](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetricsFilters.html) objects.

            The AsyncReadManagerMetrics class is only available in development builds and the Editor. You should guard usage of this class using the scripting define symbol `ENABLE_PROFILER` (as demonstrated in following example).


              


```
using UnityEngine;
using Unity.IO.LowLevel.Unsafe;class AsyncReadManagerMetricsSample : MonoBehaviour
{
    const int maxNumberFrames = 10;
    public void Start()
    {
#if ENABLE_PROFILER && UNITY_2020_2_OR_NEWER
        AsyncReadManagerMetrics.StartCollectingMetrics();
#endif
    }    public void Update()
    {
        if (Time.frameCount > maxNumberFrames)
        {
#if ENABLE_PROFILER && UNITY_2020_2_OR_NEWER
            AsyncReadManagerRequestMetric[] metrics = AsyncReadManagerMetrics.GetMetrics(AsyncReadManagerMetrics.Flags.ClearOnRead);
            AsyncReadManagerMetrics.StopCollectingMetrics();
            Debug.LogFormat("Number of metrics collected: {0}", metrics.Length); // If no reads have been triggered, this will be zero
#endif
        }
    }
}
```





### Static Methods



| Method | Description |
| --- | --- |
| ClearCompletedMetrics | Clears the metrics for all completed requests, including failed and canceled requests. |
| GetCurrentSummaryMetrics | Gets a summary of the metrics collected for AsyncReadManager read operations since you started data collection or last cleared the metrics data. |
| GetMetrics | Returns the current AsyncReadManager metrics. |
| GetSummaryOfMetrics | Summarizes an array containing AsyncReadManagerRequestMetric records. |
| GetTotalSizeOfNonASRMReadsBytes | Returns the amount of data (in bytes) read through systems other than the AsyncReadManager. |
| IsEnabled | Reports whether the metrics system for the AsyncReadManager is currently recording data. |
| StartCollectingMetrics | Begin recording metrics data for AsyncReadManager read operations. |
| StopCollectingMetrics | Stop recording metrics data for AsyncReadManager read operations. |


            
