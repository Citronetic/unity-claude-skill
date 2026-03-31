This version of Unity is unsupported.



# [ContentLoadInterface](Unity.Loading.ContentLoadInterface.html).LoadSceneAsync




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

public static [Unity.Loading.ContentSceneFile](Unity.Loading.ContentSceneFile.html) LoadSceneAsync([Unity.Content.ContentNamespace](Unity.Content.ContentNamespace.html) nameSpace,
string filename,
string sceneName,
[Unity.Loading.ContentSceneParameters](Unity.Loading.ContentSceneParameters.html) sceneParams,
NativeArray<ContentFile> dependencies,
[Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) dependentFence);






### Parameters



| Parameter | Description |
| --- | --- |
| dependencies | List of the ContentFiles that will be referenced by the file being loaded. The ordering must match the ordering returned from the build process.
ContentFile.GlobalTableDependency can be used to indicate that the PersistentManager should be used to resolve references. This allows references to files such as "unity default resources". |
| nameSpace | The ContentNamespace used to filter the results. |
| filename | Path of the file on disk. |
| sceneName | The name that will be applied to the scene. |
| sceneParams | Struct that collects the various parameters into a single place. |
| dependentFence | The load will not begin until this JobHandle completes. |





### Returns



**ContentSceneFile**
        Handle to access the results of the load process.





### Description



Loads a scene serialized file asynchronously from disk.


              


```
using System.Collections;
using Unity.Collections;
using Unity.Content;
using Unity.Loading;
using UnityEngine;
using UnityEngine.SceneManagement;public class SampleBehaviour : MonoBehaviour
{
    public IEnumerator Start()
    {
        NativeArray<ContentFile> empty = new NativeArray<ContentFile>();
        ContentFile depFileHandle = ContentLoadInterface.LoadContentFileAsync(ContentNamespace.Default, "path/to/depfile", empty);        var sceneParams = new ContentSceneParameters();
        sceneParams.loadSceneMode = LoadSceneMode.Additive;
        sceneParams.localPhysicsMode = LocalPhysicsMode.None;
        sceneParams.autoIntegrate = false;        NativeArray<ContentFile> files = new NativeArray<ContentFile>(1, Allocator.Temp, NativeArrayOptions.ClearMemory);
        files[0] = depFileHandle;
        ContentSceneFile op = ContentLoadInterface.LoadSceneAsync(ContentNamespace.Default, "path/to/scene", "TestScene", sceneParams, files);
        files.Dispose();        // wait until the async loading process completes
        while (op.Status == SceneLoadingStatus.InProgress)
            yield return null;        op.IntegrateAtEndOfFrame();        // wait one frame
        yield return null;        // scene is now loaded and integrated ...        // unload scene
        op.UnloadAtEndOfFrame();
        yield return null;        ContentFileUnloadHandle unloadHandleDep = depFileHandle.UnloadAsync();        while (!unloadHandleDep.IsCompleted)
            yield return null;
    }
}
```


            
