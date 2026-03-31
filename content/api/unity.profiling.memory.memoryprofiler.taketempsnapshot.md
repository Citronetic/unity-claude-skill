This version of Unity is unsupported.



# [MemoryProfiler](Unity.Profiling.Memory.MemoryProfiler.html).TakeTempSnapshot




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

public static void TakeTempSnapshot(Action<string,bool> finishCallback,
[Unity.Profiling.Memory.CaptureFlags](Unity.Profiling.Memory.CaptureFlags.html) captureFlags);






### Parameters



| Parameter | Description |
| --- | --- |
| finishCallback | Event that is fired once the memory snapshot has finished the process of capturing data. |
| captureFlags | Flag mask defining the content of the memory snapshot. |





### Description



Triggers a memory snapshot capture to the [Application.temporaryCachePath](Application-temporaryCachePath.html) folder.





Internally [MemoryProfiler.TakeSnapshot](Unity.Profiling.Memory.MemoryProfiler.TakeSnapshot.html) is called with the destination path set to the "<[Application.temporaryCachePath](Application-temporaryCachePath.html)>/<projectName>.snap".


              


```
using System.Collections;
using System.IO;
using Unity.Profiling.Memory;
using UnityEngine;public static class MemoryProfilerExample
{
    public static IEnumerator TakeSnapshot()
    {
        bool snapshotFinished = false;
        string resultingSnapshotPath = null;
        MemoryProfiler.TakeTempSnapshot((filePath, success) =>
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
            var fileName = Path.GetFileName(resultingSnapshotPath);
            // Ensure a unique file name to move this file to.
            var finalPath = Path.Combine(Application.persistentDataPath, "DateTime.Now.Ticks" + fileName);            // Remove any pre-existing file first.
            if (File.Exists(finalPath))
                File.Delete(finalPath);            //  Move the file out of the temporary cache to somewhere more permanent.
            File.Move(resultingSnapshotPath, finalPath);            // If you don't have access to the Player's file system you could also upload the file to an end-point that is accessible to you here.
        }
    }
}
```





Additional resources:  [Application.temporaryCachePath](Application-temporaryCachePath.html), [MemoryProfiler.TakeSnapshot](Unity.Profiling.Memory.MemoryProfiler.TakeSnapshot.html).


            
