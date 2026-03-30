This version of Unity is unsupported.



# [AndroidJNI](AndroidJNI.html).InvokeAttached




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

public static void InvokeAttached([Unity.Android.Gradle.Manifest.Action](Unity.Android.Gradle.Manifest.Action.html) action);






### Description



Calls [AndroidJNI.AttachCurrentThread](AndroidJNI.AttachCurrentThread.html) (if necessary) before invoking a delegate, and then calls [AndroidJNI.DetachCurrentThread](AndroidJNI.DetachCurrentThread.html).





**Note:** Use this method to invoke Java methods on threads other than the main thread.


              


```
using System;
using UnityEngine;
using UnityEngine.Android;public class JavaThreads : MonoBehaviour
{
    public void Start()
    {
        var t = new System.Threading.Thread(() =>
        {
            AndroidJNI.InvokeAttached(() => Debug.Log(AndroidApplication.currentActivity.Call<string>("getLocalClassName")));
        });
        t.Start();
    }
}
```


            
