This version of Unity is unsupported.



# [AndroidApplication](Android.AndroidApplication.html).unityPlayer




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












                    public static [AndroidJavaObject](AndroidJavaObject.html) unityPlayer;






### Description



Indicates the Unity bridge Java instance used by an activity or a service.





You can access this property from Unity's main thread which means you can use it in `Start()`, `Awake()`, or in methods with [RuntimeInitializeOnLoadMethodAttribute](RuntimeInitializeOnLoadMethodAttribute.html). However, you cannot access it from constructors or field initializers as these are called on the loader thread.

**Note:** This object is managed by Unity runtime, so do not call [AndroidJavaObject.Dispose](AndroidJavaObject.Dispose.html) on it.


              


```
using UnityEngine;
using UnityEngine.Android;public class Controller : MonoBehaviour
{
    void Start()
    {
        var bridgeClass = AndroidApplication.unityPlayer.Call<string>("toString");
        var isActivity = bridgeClass.StartsWith("com.unity3d.player.UnityPlayerForActivityOrService");
        var isGameActivity = bridgeClass.StartsWith("com.unity3d.player.UnityPlayerForGameActivity");
        Debug.Log($"Class for Activity: {isActivity}, Class for GameActivity: {isGameActivity}");
    }
}
```


            
