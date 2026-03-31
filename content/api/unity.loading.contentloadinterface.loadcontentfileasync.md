This version of Unity is unsupported.



# [ContentLoadInterface](Unity.Loading.ContentLoadInterface.html).LoadContentFileAsync




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

public static [Unity.Loading.ContentFile](Unity.Loading.ContentFile.html) LoadContentFileAsync([Unity.Content.ContentNamespace](Unity.Content.ContentNamespace.html) nameSpace,
string filename,
NativeArray<ContentFile> dependencies,
[Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) dependentFence);






### Parameters



| Parameter | Description |
| --- | --- |
| nameSpace | The ContentNamespace used to filter the results. |
| filename | Path of the file on disk. |
| dependencies | List of the ContentFiles that will be referenced by the file being loaded. The ordering must match the ordering returned from the build process.
ContentFile.GlobalTableDependency can be used to indicate that the PersistentManager should be used to resolve references. This allows references to files such as "unity default resources". |
| dependentFence | The load will not begin until this JobHandle completes. A default JobHandle can be used if there is no dependency. |





### Returns



**ContentFile**
        Handle to access the results of the load process.





### Description



Loads a serialized file asynchronously from disk.





The status of the load operation can be accessed using the returned [ContentFile](Unity.Loading.ContentFile.html). Objects loaded with this function will not be garbage collected; the user is responsible for calling [ContentFile.UnloadAsync](Unity.Loading.ContentFile.UnloadAsync.html) to free resources when they are no longer required. The user must call [ContentFile.UnloadAsync](Unity.Loading.ContentFile.UnloadAsync.html) even if the load fails.


              


```
using System.Collections;
using Unity.Collections;
using Unity.Content;
using Unity.Loading;
using UnityEngine;public class SampleBehaviour : MonoBehaviour
{
    public IEnumerator Start()
    {
        NativeArray<ContentFile> empty = new NativeArray<ContentFile>();
        ContentFile depFileHandle = ContentLoadInterface.LoadContentFileAsync(ContentNamespace.Default, "path/to/depfile", empty);        NativeArray<ContentFile> depFiles = new NativeArray<ContentFile>(1, Allocator.Temp);
        depFiles[0] = depFileHandle;
        ContentFile rootFileHandle = ContentLoadInterface.LoadContentFileAsync(ContentNamespace.Default, "path/to/rootfile", depFiles);
        depFiles.Dispose();        // yield coroutine until loading is complete
        while (rootFileHandle.LoadingStatus == LoadingStatus.InProgress)
            yield return null;        ulong localFileIdentifierOfObjectIWant = 25;
        GameObject obj = (GameObject)rootFileHandle.GetObject(localFileIdentifierOfObjectIWant);        // When done using obj. unload both files.
        ContentFileUnloadHandle unloadHandleRoot = rootFileHandle.UnloadAsync();
        ContentFileUnloadHandle unloadHandleDep = depFileHandle.UnloadAsync();        // yield coroutine until loading is complete
        while (!unloadHandleRoot.IsCompleted || !unloadHandleRoot.IsCompleted)
            yield return null;        // file is now completly unloaded. obj has been deleted
    }
}
```


            
