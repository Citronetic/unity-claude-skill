This version of Unity is unsupported.



# [GameObject](GameObject.html).sceneCullingMask




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




                [Switch to Manual](../Manual/class-GameObject.html)







                    public ulong sceneCullingMask;






### Description



The Scene culling mask defined for the GameObject. (Read Only)





Unity uses [SceneCullingMasks](SceneManagement.SceneCullingMasks.html) to determine which scene to render the GameObject in. The `sceneCullingMask` is a bitfield stored as an unsigned 64-bit integer [ulong](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/integral-numeric-types). Cameras only render an object in a scene if the bits set on the Scene's mask (retrievable with[EditorSceneManager.GetSceneCullingMask](SceneManagement.EditorSceneManager.GetSceneCullingMask.html)) match those in the object's `sceneCullingMask`.


              


```
using UnityEngine;
using UnityEditor.SceneManagement;[ExecuteInEditMode]
public class ExampleClass : MonoBehaviour
{

    void Start()
    {
        //Check if gameObject is visible in scene
        if(gameObject.sceneCullingMask == EditorSceneManager.GetSceneCullingMask(gameObject.scene))
        {
            Debug.Log("Object is visible");
        }
        else
        {
            Debug.Log("Object is not visible");
        }
    }
}
```





Additional resources: [SceneCullingMasks](SceneManagement.SceneCullingMasks.html), [Camera.overrideSceneCullingMask](Camera-overrideSceneCullingMask.html), [EditorSceneManager.SetSceneCullingMask](SceneManagement.EditorSceneManager.SetSceneCullingMask.html)


            
