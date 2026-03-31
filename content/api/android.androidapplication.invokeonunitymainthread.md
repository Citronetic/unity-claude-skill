This version of Unity is unsupported.



# [AndroidApplication](Android.AndroidApplication.html).InvokeOnUnityMainThread




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

public static void InvokeOnUnityMainThread([Unity.Android.Gradle.Manifest.Action](Unity.Android.Gradle.Manifest.Action.html) action);






### Description



Invokes delegate on Android application's main thread.





This is useful if you receive a Java callback on the UI thread, but want to process result on Unity's main thread.

Additional resources: [Threads](https://developer.android.com/guide/components/processes-and-threads#Threads)


              


```
using System.Threading;
using UnityEngine;
using UnityEngine.Android;public class JavaThreads : MonoBehaviour
{
    public class MyButtonListener : AndroidJavaProxy
    {
        public MyButtonListener()
            : base("android.view.View$OnClickListener")
        {
        }        public void onClick(AndroidJavaObject view)
        {
            Debug.Log($"onClick called on UI thread ${Thread.CurrentThread.ManagedThreadId}");            AndroidApplication.InvokeOnUnityMainThread(() =>
            {
                Debug.Log($"Delegating to main thread ${Thread.CurrentThread.ManagedThreadId}");
            });            view.Dispose();
        }
    }
    public void Start()
    {
        AndroidApplication.InvokeOnUIThread(() =>
        {
            // Button can only be added on UI thread
            using var button = new AndroidJavaObject("android.widget.Button", AndroidApplication.currentActivity);
            button.Call("setText", "Hello World");
            using var layoutParams = new AndroidJavaObject("android.widget.LinearLayout$LayoutParams", 500, 100);
            button.Call("setLayoutParams", layoutParams);
            button.Call("setOnClickListener", new MyButtonListener());            AndroidApplication.unityPlayer
                .Call<AndroidJavaObject>("getFrameLayout")
                .Call("addView", button);
        });
    }
}
```


            
