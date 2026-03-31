This version of Unity is unsupported.



# [Application](Application.html).backgroundLoadingPriority




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












                    public static [ThreadPriority](ThreadPriority.html) backgroundLoadingPriority;






### Description



Priority of background loading thread.





Lets you control how long it takes to load data asynchronously vs performance impact on the game while loading in the background.

Asynchronous load functions that load objects ([Resources.LoadAsync](Resources.LoadAsync.html), [AssetBundle.LoadAssetAsync](AssetBundle.LoadAssetAsync.html), AssetBundle.LoadAllAssetAsync), scenes ([SceneManager.LoadSceneAsync](SceneManagement.SceneManager.LoadSceneAsync.html)) do data read and deserialization on a separate background loading thread and object integration on a main thread.
*Integration* depends on an object type and for textures, meshes means uploading data to the GPU, audio clips prepare data for playing.

To avoid hiccups we limit *integration* time on a main thread depending on [backgroundLoadingPriority](Application-backgroundLoadingPriority.html) value:

- [ThreadPriority.Low](ThreadPriority.Low.html) - 2ms

- [ThreadPriority.BelowNormal](ThreadPriority.BelowNormal.html) - 4ms

- [ThreadPriority.Normal](ThreadPriority.Normal.html) - 10ms

- [ThreadPriority.High](ThreadPriority.High.html) - 50ms

This value defines the maximum time all asynchronous operations can spend within a single frame on a main thread.

The default value is [ThreadPriority.BelowNormal](ThreadPriority.BelowNormal.html), however some platforms override it:



          - Universal Windows Platform - [ThreadPriority.High](ThreadPriority.High.html)

          - Consoles - [ThreadPriority.Normal](ThreadPriority.Normal.html)





Background loading thread uses [backgroundLoadingPriority](Application-backgroundLoadingPriority.html) directly.

The Profiler marker **Application.Integrate Assets in Background** lets you optimize background loading.


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    void Example1()
    {
        // Load as much data as possible, as a result frame rate will drop.
        // Good for fast loading when showing progress bars.        Application.backgroundLoadingPriority = ThreadPriority.High;
    }    void Example2()
    {
        // Load data very slowly and try not to affect performance of the game.
        // Good for loading in the background while the game is playing.        Application.backgroundLoadingPriority = ThreadPriority.Low;
    }
}
```





Additional resources: [ThreadPriority](ThreadPriority.html) enum, [AsyncOperation.priority](AsyncOperation-priority.html).


            
