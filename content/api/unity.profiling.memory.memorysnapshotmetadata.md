This version of Unity is unsupported.



# MemorySnapshotMetadata





class in
          Unity.Profiling.Memory



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



Container for memory snapshot metadata.





Code that subscribes to the [MemoryProfiler.CreatingMetadata](Unity.Profiling.Memory.MemoryProfiler.CreatingMetadata.html) event receives a MemorySnapshotMetadata object to populate with meta data for a memory snapshot that is about to be taken.


              


```
using System;
using UnityEngine;
using Unity.Profiling.Memory;public class MemoryProfilerExample : MonoBehaviour
{
    public string levelName = "Default Level Name";    void Start()
    {
        MemoryProfiler.CreatingMetadata += CreateMetadata;
    }    void CreateMetadata(MemorySnapshotMetadata metadata)
    {
        metadata.Description = $"This Memory Snapshot capture started at {DateTime.Now} in level {levelName}.";
    }    void OnDestroy()
    {
        MemoryProfiler.CreatingMetadata -= CreateMetadata;
    }
}
```





**Note:** If the project has the [Memory Profiler package](https://docs.unity3d.com/Packages/com.unity.memoryprofiler@latest/) installed in the Editor, it is recommended to implement a concrete implementation of [MemoryProfiler.MetadataCollect](https://docs.unity3d.com/Packages/com.unity.memoryprofiler@latest/index.html?subfolder=/api/Unity.MemoryProfiler.MetadataCollect.html) instead, which will inject your implementation into any Player builds you make.

Additional resources: [MemoryProfiler.MetadataCollect"](https://docs.unity3d.com/Packages/com.unity.memoryprofiler@latest/index.html?subfolder=/api/Unity.MemoryProfiler.MetadataCollect.html), [MemoryProfiler.TakeSnapshot](Unity.Profiling.Memory.MemoryProfiler.TakeSnapshot.html), [MemoryProfiler.CreatingMetadata](Unity.Profiling.Memory.MemoryProfiler.CreatingMetadata.html).





### Properties



| Property | Description |
| --- | --- |
| Description | User defined metadata that provides a description for the memory snapshot. |


            
