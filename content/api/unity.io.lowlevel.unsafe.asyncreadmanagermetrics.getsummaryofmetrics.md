This version of Unity is unsupported.



# [AsyncReadManagerMetrics](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.html).GetSummaryOfMetrics




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

public static [Unity.IO.LowLevel.Unsafe.AsyncReadManagerSummaryMetrics](Unity.IO.LowLevel.Unsafe.AsyncReadManagerSummaryMetrics.html) GetSummaryOfMetrics(AsyncReadManagerRequestMetric[] metrics);






## Declaration

public static [Unity.IO.LowLevel.Unsafe.AsyncReadManagerSummaryMetrics](Unity.IO.LowLevel.Unsafe.AsyncReadManagerSummaryMetrics.html) GetSummaryOfMetrics(List<AsyncReadManagerRequestMetric> metrics);






### Parameters



| Parameter | Description |
| --- | --- |
| metrics | Array of previously collected AsyncReadManagerRequestMetrics. |





### Returns



**AsyncReadManagerSummaryMetrics**
        Calculated summary of the given metrics.





### Description



Summarizes an array containing [AsyncReadManagerRequestMetric](Unity.IO.LowLevel.Unsafe.AsyncReadManagerRequestMetric.html) records.





You can access the metrics collected for [AsyncReadManager](Unity.IO.LowLevel.Unsafe.AsyncReadManager.html) read operations by calling [GetMetrics](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.GetMetrics.html).




---








## Declaration

public static [Unity.IO.LowLevel.Unsafe.AsyncReadManagerSummaryMetrics](Unity.IO.LowLevel.Unsafe.AsyncReadManagerSummaryMetrics.html) GetSummaryOfMetrics(AsyncReadManagerRequestMetric[] metrics,
[Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetricsFilters](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetricsFilters.html) metricsFilters);






## Declaration

public static [Unity.IO.LowLevel.Unsafe.AsyncReadManagerSummaryMetrics](Unity.IO.LowLevel.Unsafe.AsyncReadManagerSummaryMetrics.html) GetSummaryOfMetrics(List<AsyncReadManagerRequestMetric> metrics,
[Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetricsFilters](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetricsFilters.html) metricsFilters);






### Parameters



| Parameter | Description |
| --- | --- |
| metrics | List of previously collected AsyncReadManagerRequestMetrics. |
| metricsFilters | Filters to apply to the data used in calculating the summary. |





### Returns



**AsyncReadManagerSummaryMetrics**
        Calculated summary of given metrics that match the filters.





### Description



Summarizes [AsyncReadManagerRequestMetric](Unity.IO.LowLevel.Unsafe.AsyncReadManagerRequestMetric.html) records that match the specified filter.





The summary returned is calculated from any data in the specified `metrics` list that matches the `metricsFilters`.
See AsyncReadManagerMetricsFilters.ctor for information about filter creation.
You can access the metrics collected for [AsyncReadManager](Unity.IO.LowLevel.Unsafe.AsyncReadManager.html) read operations by calling [GetMetrics](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.GetMetrics.html).


            
