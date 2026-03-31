This version of Unity is unsupported.



# [AndroidApplication](Android.AndroidApplication.html).currentContext




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












                    public static [AndroidJavaObject](AndroidJavaObject.html) currentContext;






### Description



Indicates the Java instance of the current context.





For more information, refer to the Android developer documentation on [Context](https://developer.android.com/reference/android/content/Context).

**Note:** This object is managed by Unity runtime, so do not call [AndroidJavaObject.Dispose](AndroidJavaObject.Dispose.html) on it.


              


```
using UnityEngine;
using UnityEngine.Android;public class Controller : MonoBehaviour
{
    void Start()
    {
        var isRunningGameActivity = AndroidApplication.currentContext.Call<string>("getLocalClassName").Equals("com.unity3d.player.UnityPlayerGameActivity");
        var isRunningActivity = AndroidApplication.currentContext.Call<string>("getLocalClassName").Equals("com.unity3d.player.UnityPlayerActivity");
        Debug.Log($"GameActivity {isRunningGameActivity}");
        Debug.Log($"Activity {isRunningActivity}");
    }
}
```


            
