This version of Unity is unsupported.



# AsyncReadManagerSummaryMetrics





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



A summary of the metrics collected for [AsyncReadManager](Unity.IO.LowLevel.Unsafe.AsyncReadManager.html) read operations.





Get a summary of the current metrics by calling [AsyncReadManagerMetrics.GetCurrentSummaryMetrics](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.GetCurrentSummaryMetrics.html). This function summarizes all metrics recorded since you started metrics collection or last cleared your metrics data.
        Get a summary of an existing set of [AsyncReadManagerRequestMetric](Unity.IO.LowLevel.Unsafe.AsyncReadManagerRequestMetric.html) records by calling [AsyncReadManagerMetrics.GetSummaryOfMetrics](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.GetSummaryOfMetrics.html). You can get these records by calling [AsyncReadManagerMetrics.GetMetrics](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.GetMetrics.html).
        In both cases, you can filter the data with [AsyncReadManagerMetricsFilters](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetricsFilters.html) in order to focus the summary on the particular categories of data you want to analyze.
        Additional resources: [AsyncReadManagerMetrics](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.html).


              


```
using Unity.IO.LowLevel.Unsafe;
using UnityEngine;public class GetMetricsSummary : MonoBehaviour
{
#if ENABLE_PROFILER && UNITY_2020_2_OR_NEWER
    AsyncReadManagerMetricsFilters m_Filter;
    AsyncReadManagerSummaryMetrics m_Summary;
    public void Start()
    {
        // Create a filter for texture file reads that have been completed
        m_Filter = new AsyncReadManagerMetricsFilters();
        m_Filter.SetStateFilter(ProcessingState.Completed);
    }    public void Update()
    {
        m_Summary = AsyncReadManagerMetrics.GetCurrentSummaryMetrics(m_Filter, AsyncReadManagerMetrics.Flags.ClearOnRead);
        Debug.Log($"Last frame bandwidth: {m_Summary.AverageBandwidthMBPerSecond} MB/s.");
    }#endif
}
```





### Properties



| Property | Description |
| --- | --- |
| AverageBandwidthMBPerSecond | The mean rate of reading of data (bandwidth), in Mbps, for read request metrics included in the summary calculation. |
| AverageReadSizeInBytes | The mean size of data read, in bytes, for read request metrics included in the summary calculation. |
| AverageReadTimeMicroseconds | The mean time taken for reading (excluding queue time), in microseconds, for read request metrics included in the summary calculation. |
| AverageThroughputMBPerSecond | The mean rate of request throughput, in Mbps, for read request metrics included in the summary calculation. |
| AverageTotalRequestTimeMicroseconds | The mean time taken from request to completion, in microseconds, for completed read request metrics included in the summary calculation. |
| AverageWaitTimeMicroseconds | The mean time taken from request to the start of reading, in microseconds, for read request metrics included in the summary calculation. |
| LongestReadAssetType | The asset type ID for the longest read included in the summary calculation. |
| LongestReadSubsystem | The Subsystem tag for the longest read included in the summary calculation. |
| LongestReadTimeMicroseconds | The longest read time (not including time in queue) included in the summary calculation in microseconds. |
| LongestWaitAssetType | The asset type ID for the longest wait time included in the summary calculation. |
| LongestWaitSubsystem | The Subsystem tag for the longest wait time included in the summary calculation. |
| LongestWaitTimeMicroseconds | The longest time spent waiting of metrics included in the summary calculation, in microseconds. |
| NumberOfAsyncReads | The total number of Async reads in the metrics included in the summary calculation. |
| NumberOfCachedReads | The total number of cached reads (so read time was zero) in the metrics included in the summary calculation. |
| NumberOfCanceledRequests | The total number of canceled requests in the metrics included in the summary calculation. |
| NumberOfCompletedRequests | The total number of completed requests in the metrics included in the summary calculation. |
| NumberOfFailedRequests | The total number of failed requests in the metrics included in the summary calculation. |
| NumberOfInProgressRequests | The total number of in progress requests in the metrics included in the summary calculation. |
| NumberOfSyncReads | The total number of Sync reads in the metrics included in the summary calculation. |
| NumberOfWaitingRequests | The total number of waiting requests in the metrics included in the summary calculation. |
| TotalBytesRead | The total number of bytes read in the metrics included in the summary calculation. |
| TotalNumberOfRequests | The total number of read requests included in the summary calculation. |


            
