This version of Unity is unsupported.



# [FileHandle](Unity.IO.LowLevel.Unsafe.FileHandle.html).Close




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

public [Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) Close([Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) dependency);






### Parameters



| Parameter | Description |
| --- | --- |
| dependency | (Optional) The JobHandle to wait on before closing the file. |





### Returns



**JobHandle**
        The JobHandle for the asynchronous close operation. You can use this JobHandle as a dependency when scheduling other jobs that must not run before the close operation is finished.





### Description



Asynchronously closes the file referenced by this FileHandle and disposes the FileHandle instance.





Always close FileHandles when done to avoid memory leaks and needlessly locking files. FileHandles that fail to open must still be closed.

Once closed, the FileHandle instance is disposed and becomes invalid. To check for completion of the close operation, use the JobHandle returned by this method.


              


```
using System.IO;
using Unity.IO.LowLevel.Unsafe;
using Unity.Jobs;
using UnityEngine;class AsyncCloseSample : MonoBehaviour
{
    FileHandle fileHandle;
    public unsafe void Start()
    {
        string filePath = Path.Combine(Application.streamingAssetsPath, "myfile.bin");        fileHandle = AsyncReadManager.OpenFileAsync(filePath);
    }    public unsafe void Update()
    {
        if (fileHandle.IsValid() && fileHandle.JobHandle.IsCompleted)
        {
            JobHandle closeHandle = fileHandle.Close();            closeHandle.Complete();
        }
    }
}
```


            
