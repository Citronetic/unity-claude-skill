This version of Unity is unsupported.



# ISceneTemplatePipeline





interface in
          UnityEditor.SceneTemplate


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



Derive from this interface to package a custom code sequence when a Scene template is instantiated. ISceneTemplatePipeline is instantiated once when a template is instantiated, and is notified multiple times during the instantiation sequence.


              


```
using UnityEngine.SceneManagement;
using UnityEditor.SceneTemplate;public class MySceneTemplatePipeline : ISceneTemplatePipeline
{
    public virtual bool IsValidTemplateForInstantiation(SceneTemplateAsset sceneTemplateAsset)
    {
        // Check if the scene template is valid for this project.
        return true;
    }    public virtual void BeforeTemplateInstantiation(SceneTemplateAsset sceneTemplateAsset, bool isAdditive, string sceneName)
    {
        // Do some work before instantiating the new scene based on the template.
        UnityEngine.Debug.Log($"BeforeTemplateInstantiation {sceneTemplateAsset.name} isAdditive: {isAdditive} sceneName: {sceneName}");
    }    public virtual void AfterTemplateInstantiation(SceneTemplateAsset sceneTemplateAsset, Scene scene, bool isAdditive, string sceneName)
    {
        // Do some work after instantiating the new scene.
        UnityEngine.Debug.Log($"AfterTemplateInstantiation {sceneTemplateAsset.name} scene: {scene} isAdditive: {isAdditive} sceneName: {sceneName}");
    }
}
```





### Public Methods



| Method | Description |
| --- | --- |
| AfterTemplateInstantiation | An event called after the Scene template is instantiated, and while the new scene is still loaded. |
| BeforeTemplateInstantiation | An event called before the Scene template is instantiated. |
| IsValidTemplateForInstantiation | An event called before the New Scene dialog is displayed to determine whether this template is available in the dialog. |


            
