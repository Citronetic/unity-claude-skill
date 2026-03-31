This version of Unity is unsupported.



# [IProcessSceneWithReport](Build.IProcessSceneWithReport.html).OnProcessScene




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

public void OnProcessScene([SceneManagement.Scene](SceneManagement.Scene.html) scene,
[Build.Reporting.BuildReport](Build.Reporting.BuildReport.html) report);






### Parameters



| Parameter | Description |
| --- | --- |
| scene | The current Scene being processed. |
| report | A report containing information about the current build. When this callback is invoked for Scene loading during Editor playmode, this parameter will be null. |





### Description



Implement this function to receive a callback for each Scene during the build.





This callback is invoked during Player and AssetBundle builds, and also as a scene is reloaded while entering Editor playmode.
                    [BuildPipeline.isBuildingPlayer](BuildPipeline-isBuildingPlayer.html) can be used to determine in which context the callback is being called.


                    Additional resources: [BuildPipeline.BuildPlayer](BuildPipeline.BuildPlayer.html), [BuildPipeline.BuildAssetBundles](BuildPipeline.BuildAssetBundles.html), [BuildCallbackVersionAttribute](Build.BuildCallbackVersionAttribute.html).


              


```
using UnityEditor;
using UnityEditor.Build;
using UnityEditor.Build.Reporting;
using UnityEngine;[BuildCallbackVersion(1)]
class MyCustomBuildProcessor : IProcessSceneWithReport
{
    public int callbackOrder { get { return 0; } }
    public void OnProcessScene(UnityEngine.SceneManagement.Scene scene, BuildReport report)
    {
        Debug.Log("MyCustomBuildProcessor.OnProcessScene " + scene.name);
    }
}
```


            
