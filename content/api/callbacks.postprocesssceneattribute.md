This version of Unity is unsupported.



# PostProcessSceneAttribute





class in
          UnityEditor.Callbacks



/



Inherits from:[CallbackOrderAttribute](CallbackOrderAttribute.html)


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



Add this attribute to a method to get a notification just after building the Scene.





A method with this attribute will also get called when entering Playmode, when [SceneManager.LoadScene](SceneManagement.SceneManager.LoadScene.html) is called.

                `PostProcessSceneAttribute` has an option to provide an order index in the callback, starting at 0. This is useful if you have more than one OnPostprocessScene callback, and you would like them to be called in a certain order. Callbacks are called in order, starting at zero.

                **Note:** If there are no new changes to the scene since the previous Player build, Unity doesn't rebuild the scene but uses cached Player data instead. In this case the `PostProcessSceneAttribute` callback is not called. To ensure an unchanged scene rebuilds, you can either modify the scene or clear the build cache with [BuildOptions.CleanBuildCache](BuildOptions.CleanBuildCache.html). Using [EditorSceneManager.MarkSceneDirty](SceneManagement.EditorSceneManager.MarkSceneDirty.html) alone is not sufficient to trigger the callback.

                Additional resources: [IProcessSceneWithReport](Build.IProcessSceneWithReport.html), [Incremental Build Pipeline](../Manual/building-introduction.html)


              


```
// C# example:
// Automatically creates a game object with a primitive mesh renderer and appropriate collider.
using UnityEngine;
using UnityEditor;
using UnityEditor.Callbacks;public class MyScenePostprocessor {
    [PostProcessSceneAttribute (2)]
    public static void OnPostprocessScene() {
        GameObject cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
        cube.transform.position = new Vector3(0.0f, 0.5f, 0.0f);
    }
}
```





### Inherited Members














            
