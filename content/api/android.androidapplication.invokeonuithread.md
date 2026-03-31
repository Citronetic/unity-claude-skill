This version of Unity is unsupported.



# [AndroidApplication](Android.AndroidApplication.html).InvokeOnUIThread




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

public static void InvokeOnUIThread([Unity.Android.Gradle.Manifest.Action](Unity.Android.Gradle.Manifest.Action.html) action);






### Description



Invokes delegate on Android application's UI thread.





**Note:** Certain Android Java functions, such as those related to the user interface can only be called on the UI thread.

Additional resources: [Threads](https://developer.android.com/guide/components/processes-and-threads#Threads)


              


```
using System;
using UnityEngine;
using UnityEngine.Android;
public class JavaThreads: MonoBehaviour
{
    public void Start()
    {
        AndroidApplication.InvokeOnUIThread(() =>
        {
            // Button can only be added on UI thread
            using var button = new AndroidJavaObject("android.widget.Button", AndroidApplication.currentActivity);
            button.Call("setText", "Hello World");
            using var layoutParams = new AndroidJavaObject("android.widget.LinearLayout$LayoutParams", 500, 100);
            button.Call("setLayoutParams", layoutParams);
            AndroidApplication.unityPlayer
                .Call<AndroidJavaObject>("getFrameLayout")
                .Call("addView", button);
        });
    }
}
```


            
