This version of Unity is unsupported.



# [MemoryProfiler](Unity.Profiling.Memory.MemoryProfiler.html).CreatingMetadata




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



A metadata event that collection methods can subscribe to.





This event is fired when you capture a memory snapshot. Use it to provide meta data to the snapshot file, for example information related to the context, such as the level, in which it was taken.


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

Additional resources: [MemoryProfiler.MetadataCollect](https://docs.unity3d.com/Packages/com.unity.memoryprofiler@latest/index.html?subfolder=/api/Unity.MemoryProfiler.MetadataCollect.html), [MemoryProfiler.TakeSnapshot](Unity.Profiling.Memory.MemoryProfiler.TakeSnapshot.html), [MemorySnapshotMetadata](Unity.Profiling.Memory.MemorySnapshotMetadata.html).


            
