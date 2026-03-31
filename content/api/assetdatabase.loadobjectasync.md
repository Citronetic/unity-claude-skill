This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).LoadObjectAsync




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

public static [AssetDatabaseLoadOperation](AssetDatabaseLoadOperation.html) LoadObjectAsync(string assetPath,
long localId);






### Parameters



| Parameter | Description |
| --- | --- |
| assetPath | Path of the asset to load. |
| localId | The local identifier of the object that you want to load. This allows you to load a specific object and its dependencies as opposed to the entire asset. |





### Returns



**AssetDatabaseLoadOperation**
        A UnityEditor.AssetDatabaseLoadOperation which you can use to track the progress of the operation.





### Description



Loads a specific Object and its dependencies from an Asset file asynchronously.





All paths are relative to the project folder, for example: "Assets/MyTextures/hello.png".

Additional resources: [AssetDatabase.TryGetGUIDAndLocalFileIdentifier](AssetDatabase.TryGetGUIDAndLocalFileIdentifier.html), [GlobalObjectId.targetObjectId](GlobalObjectId-targetObjectId.html).


              


```
using UnityEngine;
using UnityEditor;
using System.Collections;public class MyPlayer : MonoBehaviour
{
    public IEnumerator Start()
    {
        // This will load all objects in the fbx and return a single Mesh object.
        Mesh m = AssetDatabase.LoadAssetAtPath<Mesh>("Assets/test.fbx");        AssetDatabase.TryGetGUIDAndLocalFileIdentifier(m, out string guid, out long localId);        // At some point after the Mesh may or may not have unloaded we can reload just the mesh
        AssetDatabaseLoadOperation op = AssetDatabase.LoadObjectAsync("Assets/test.fbx", localId);        // yield until the operation is completed
        while (!op.isDone)
            yield return null;        Mesh reloadedMesh = (Mesh)op.LoadedObject;
    }
}
```


            
