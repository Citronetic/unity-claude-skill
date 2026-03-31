This version of Unity is unsupported.



# AsyncReadManagerMetricsFilters Constructor




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

public AsyncReadManagerMetricsFilters();






## Declaration

public AsyncReadManagerMetricsFilters(ulong typeID);






## Declaration

public AsyncReadManagerMetricsFilters([Unity.IO.LowLevel.Unsafe.ProcessingState](Unity.IO.LowLevel.Unsafe.ProcessingState.html) state);






## Declaration

public AsyncReadManagerMetricsFilters([Unity.IO.LowLevel.Unsafe.FileReadType](Unity.IO.LowLevel.Unsafe.FileReadType.html) readType);






## Declaration

public AsyncReadManagerMetricsFilters([Unity.IO.LowLevel.Unsafe.Priority](Unity.IO.LowLevel.Unsafe.Priority.html) priorityLevel);






## Declaration

public AsyncReadManagerMetricsFilters([Unity.IO.LowLevel.Unsafe.AssetLoadingSubsystem](Unity.IO.LowLevel.Unsafe.AssetLoadingSubsystem.html) subsystem);






### Parameters



| Parameter | Description |
| --- | --- |
| typeID | The YAML Class ID for the asset type to include in the summary calculations. See the YAML Class ID Reference page. |
| state | The Processing State to include in the summary calculations. |
| readType | The type of file read (async or sync) to include in the summary calculations. |
| priorityLevel | The priority level to include in the summary calculations. |
| subsystem | The Subsystem 'tag' to include in the summary calculations. |





### Description



Constructor for an instance of the Summary Metrics Filters, used to filter the metrics data that is included in the calculation of a summary.





The constructor takes one value of a filter. To take multiple values for the same filter, you can use the array constructor (below). For multiple filters, use the Set method for additional required filter types.


              


```
using Unity.IO.LowLevel.Unsafe;
using UnityEngine;public class GetMetricsSummary : MonoBehaviour
{
#if ENABLE_PROFILER && UNITY_2020_2_OR_NEWER
    public void Start()
    {
        // Create a filter for texture file reads that have been completed
        AsyncReadManagerMetricsFilters m_TextureFilter = new AsyncReadManagerMetricsFilters(AssetLoadingSubsystem.Texture);
        m_TextureFilter.SetStateFilter(ProcessingState.Completed);
    }#endif
}
```




---








## Declaration

public AsyncReadManagerMetricsFilters(ulong[] typeIDs,
ProcessingState[] states,
FileReadType[] readTypes,
Priority[] priorityLevels,
AssetLoadingSubsystem[] subsystems);






## Declaration

public AsyncReadManagerMetricsFilters(ulong[] typeIDs);






## Declaration

public AsyncReadManagerMetricsFilters(ProcessingState[] states);






## Declaration

public AsyncReadManagerMetricsFilters(FileReadType[] readTypes);






## Declaration

public AsyncReadManagerMetricsFilters(Priority[] priorityLevels);






## Declaration

public AsyncReadManagerMetricsFilters(AssetLoadingSubsystem[] subsystems);






### Parameters



| Parameter | Description |
| --- | --- |
| typeIDs | An array of all the TypeIDs to include in the summary calculations. |
| states | An array of all the ProcessingStates to include in the summary calculations. |
| readTypes | An array of all the FileReadTypes to include in the summary calculations. As there are only two options, this is generally unnecesary. |
| priorityLevels | An array of all the Priority levels to include in the summary calculations. As there are only two options, this is generally unnecesary. |
| subsystems | An array of all the Subsystem 'tags' to include in the summary calculations. |





### Description



Constructor for an instance of the Summary Metrics Filters, used to filter the metrics data that is included in the calculation of a summary.





The constructor takes an array of values for a single filter, or for all of the filters. For multiple filters, but not all, use the Set method for additional required filter types.


              


```
using Unity.IO.LowLevel.Unsafe;
using UnityEngine;public class GetMetricsSummary : MonoBehaviour
{
#if ENABLE_PROFILER && UNITY_2020_2_OR_NEWER
    public void Start()
    {
        // Create a filter for mesh and texture file reads that have been completed or failed
        AssetLoadingSubsystem[] assetLoadingSubsystems = new AssetLoadingSubsystem[] {AssetLoadingSubsystem.Texture, AssetLoadingSubsystem.Mesh};
        AsyncReadManagerMetricsFilters m_SummaryFilter = new AsyncReadManagerMetricsFilters(assetLoadingSubsystems);
        m_SummaryFilter.SetStateFilter(new ProcessingState[] { ProcessingState.Completed, ProcessingState.Failed });
    }#endif
}
```


            
