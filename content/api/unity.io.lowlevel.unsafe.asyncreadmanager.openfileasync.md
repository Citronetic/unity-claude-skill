This version of Unity is unsupported.



# [AsyncReadManager](Unity.IO.LowLevel.Unsafe.AsyncReadManager.html).OpenFileAsync




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

public static [Unity.IO.LowLevel.Unsafe.FileHandle](Unity.IO.LowLevel.Unsafe.FileHandle.html) OpenFileAsync(string fileName);






### Parameters



| Parameter | Description |
| --- | --- |
| fileName | The path to the file to be opened. |





### Returns



**FileHandle**
        The FileHandle of the file being opened. Use the FileHandle to check the status of the open operation, to read the file, and to close the file when done.





### Description



Opens the file asynchronously.





**Note:** WebGL builds do not support using `AsyncReadManager` to open files from a remote web server; for example, from the path `Application.streamingAssetsPath` which maps to a URL on a remote web server.


              


```
using System.IO;
using Unity.IO.LowLevel.Unsafe;
using UnityEngine;class AsyncOpenSample : MonoBehaviour
{
    FileHandle fileHandle;
    public unsafe void Start()
    {
        string filePath = Path.Combine(Application.streamingAssetsPath, "myfile.bin");        fileHandle = AsyncReadManager.OpenFileAsync(filePath);
    }    public unsafe void Update()
    {
        if (fileHandle.IsValid() && fileHandle.JobHandle.IsCompleted)
        {
            fileHandle.Close().Complete();
        }
    }
}
```


            
