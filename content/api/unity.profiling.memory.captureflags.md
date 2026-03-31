This version of Unity is unsupported.



# CaptureFlags





enumeration


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



Flags that specify what kind of data to capture in a snapshot.





These flags provide control for what broad data categories should be included in the snapshot. For general purpose captures it is recommended to capture with all flags, or at least with [CaptureFlags.ManagedObjects](Unity.Profiling.Memory.CaptureFlags.ManagedObjects.html), [CaptureFlags.NativeObjects](Unity.Profiling.Memory.CaptureFlags.NativeObjects.html) and [CaptureFlags.NativeAllocations](Unity.Profiling.Memory.CaptureFlags.NativeAllocations.html).

For more focused investigations where the size of the snapshot and the speed at which it is taken are important, you can use a narrower set of [CaptureFlags](Unity.Profiling.Memory.CaptureFlags.html). For example, if the only goal is to check native object sizes, then not setting the [CaptureFlags.ManagedObjects](Unity.Profiling.Memory.CaptureFlags.ManagedObjects.html) flag can greately reduce capture time and size. If detailed NativeAllocations, such as those used by native collections, and the graphics sizes of native objects is not important, the [CaptureFlags.NativeAllocations](Unity.Profiling.Memory.CaptureFlags.NativeAllocations.html) can be left off as well.

**Note:** [CaptureFlags.NativeAllocations](Unity.Profiling.Memory.CaptureFlags.NativeAllocations.html) and [CaptureFlags.NativeAllocationSites](Unity.Profiling.Memory.CaptureFlags.NativeAllocationSites.html) won't add extra data to the snapshot unless the build supports the collection of native call stack information, which currently requires source code access.


              


```
using System;
using System.Collections;
using System.IO;
using Unity.Profiling.Memory;
using UnityEngine;public static class MemoryProfilerExample
{
    public static IEnumerator TakeSnapshot()
    {
        var snapshotFileName = "SnapshotName.tmpsnap";
        // Make sure the file does not exist, e.g. as a left over of a failed previous attempt to take a snapshot.
        if (File.Exists(snapshotFileName))
            File.Delete(snapshotFileName);        bool snapshotFinished = false;
        string resultingSnapshotPath = null;
        MemoryProfiler.TakeSnapshot(snapshotFileName, (filePath, success) =>
        {
            snapshotFinished = true;
            if (success)
            {
                resultingSnapshotPath = Path.GetFullPath(filePath);
                Debug.Log($"Snapshot captured and stored at {resultingSnapshotPath}.");
            }
            else
            {
                Debug.LogError("Failed to take a snapshot.");
            }
        },
            CaptureFlags.ManagedObjects | CaptureFlags.NativeObjects | CaptureFlags.NativeAllocations);        while (!snapshotFinished)
        {
            yield return null;
        }        if (resultingSnapshotPath != null && File.Exists(resultingSnapshotPath))
        {
            var finalPath = resultingSnapshotPath.Replace(".tmpsnap", ".snap");
            // Remove any pre-existing file first.
            if (File.Exists(finalPath))
                File.Delete(finalPath);            // Now that writing to the file has succesfully completed, rename the file to the .snap extension to denote that the Memory Profiler can open it.
            File.Move(resultingSnapshotPath, finalPath);            // If you don't have access to the Player's file system you could also upload the file to an end-point that is accessible to you here.
        }
    }
}
```





Additional resources: [Memory Profiler package](https://docs.unity3d.com/Packages/com.unity.memoryprofiler@latest/), [MemoryProfiler.TakeSnapshot](Unity.Profiling.Memory.MemoryProfiler.TakeSnapshot.html).





### Properties



| Property | Description |
| --- | --- |
| ManagedObjects | Specifies that the entire managed heap and all the data needed to parse it should be captured as part of the Memory Snapshot. |
| NativeObjects | Specifies that information about Native Objects should be collected. |
| NativeAllocations | Specifies that the Native Memory used by any Native Allocation made by Unity should be captured. |
| NativeAllocationSites | Specifies the location that each native allocation was allocated at. |
| NativeStackTraces | Specifies that Call-Stack Symbols for the Native Call-stack of each Allocation should be collected. |


            
