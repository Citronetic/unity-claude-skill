This version of Unity is unsupported.



# [AsyncReadManagerMetrics](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.html).GetMetrics




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

public static AsyncReadManagerRequestMetric[] GetMetrics([Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.Flags](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.Flags.html) flags);






## Declaration

public static AsyncReadManagerRequestMetric[] GetMetrics([Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetricsFilters](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetricsFilters.html) filters,
[Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.Flags](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.Flags.html) flags);






### Parameters



| Parameter | Description |
| --- | --- |
| flags | Flags to control the behaviour, including clearing the underlying completed metrics after reading. |
| filters | (Optional) The filters to control the data returned. |





### Returns



**AsyncReadManagerRequestMetric[]**
        Array of [read request metrics](Unity.IO.LowLevel.Unsafe.AsyncReadManagerRequestMetric.html) currently stored in the AsyncReadManager, which can be filtered by passing [AsyncReadManagerMetricsFilters](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetricsFilters.html).





### Description



Returns the current [AsyncReadManager](Unity.IO.LowLevel.Unsafe.AsyncReadManager.html) metrics.





This function can filter the metrics collected by passing [AsyncReadManagerMetricsFilters](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetricsFilters.html).
See AsyncReadManagerMetricsFilters.ctor for information about filter creation.


              


```
using Unity.IO.LowLevel.Unsafe;
using UnityEngine;
public class AsyncReadManagerMetricsSample : MonoBehaviour
{
#if ENABLE_PROFILER && UNITY_2020_2_OR_NEWER
    void Start()
    {
        AsyncReadManagerMetrics.StartCollectingMetrics();
    }    void Update()
    {
        AsyncReadManagerRequestMetric[] thisFrameMetrics = AsyncReadManagerMetrics.GetMetrics(AsyncReadManagerMetrics.Flags.ClearOnRead);
        foreach (AsyncReadManagerRequestMetric metric in thisFrameMetrics)
        {
            if (metric.State == ProcessingState.Completed)
            {
                double bandwidthMBPerSecond = metric.SizeBytes / (metric.TotalTimeMicroseconds - metric.TimeInQueueMicroseconds);
                Debug.LogFormat($"Asset name:\"{metric.AssetName}\", bandwidth = {bandwidthMBPerSecond}MB/s");
            }
        }
    }#endif
}
```




---








## Declaration

public static void GetMetrics(List<AsyncReadManagerRequestMetric> outMetrics,
[Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.Flags](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.Flags.html) flags);






## Declaration

public static void GetMetrics(List<AsyncReadManagerRequestMetric> outMetrics,
[Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetricsFilters](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetricsFilters.html) filters,
[Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.Flags](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.Flags.html) flags);






### Parameters



| Parameter | Description |
| --- | --- |
| outMetrics | The pre-allocated list to store the metrics in. |
| flags | Flags to control the behaviour, including clearing the underlying completed metrics after reading. |
| filters | (Optional) The filters to control the data returned. |





### Description



Writes the current [AsyncReadManager](Unity.IO.LowLevel.Unsafe.AsyncReadManager.html) metrics into the given List.





This function can filter the metrics collected by passing [AsyncReadManagerMetricsFilters](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetricsFilters.html).
See AsyncReadManagerMetricsFilters.ctor for information about filter creation.


              


```
using Unity.IO.LowLevel.Unsafe;
using System.Collections.Generic;
using UnityEngine;
public class AsyncReadManagerMetricsSample : MonoBehaviour
{
#if ENABLE_PROFILER && UNITY_2020_2_OR_NEWER
    void Start()
    {
        AsyncReadManagerMetrics.StartCollectingMetrics();
    }    void Update()
    {
        List<AsyncReadManagerRequestMetric> thisFrameMetrics = new List<AsyncReadManagerRequestMetric>();
        AsyncReadManagerMetrics.GetMetrics(thisFrameMetrics, AsyncReadManagerMetrics.Flags.ClearOnRead);
        foreach (AsyncReadManagerRequestMetric metric in thisFrameMetrics)
        {
            if (metric.State == ProcessingState.Completed)
            {
                double bandwidthMBPerSecond = metric.SizeBytes / (metric.TotalTimeMicroseconds - metric.TimeInQueueMicroseconds);
                Debug.LogFormat($"Asset name:\"{metric.AssetName}\", bandwidth = {bandwidthMBPerSecond}MB/s");
            }
        }
    }#endif
}
```


            
