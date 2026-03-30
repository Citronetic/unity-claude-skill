This version of Unity is unsupported.



# AndroidJavaRunnable




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

public delegate void AndroidJavaRunnable();






### Description



AndroidJavaRunnable is the Unity representation of a java.lang.Runnable object.





Note that this is a delegate. As such, a new java.lang.reflect.Proxy object is created every time it is passed as an argument to Java. This means that passing a variable of AndroidJavaRunnable type to Java multiple times results in a new Java object each time with different hash code values. It also means that calling `equals()` on the Java object created as a representation of an AndroidJavaRunnable variable always returns false, even when compared to itself.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    // Pass execution context over to the Java UI thread.
    void Start()
    {
        AndroidJavaClass unityPlayer = new AndroidJavaClass("com.unity3d.player.UnityPlayer");
        AndroidJavaObject activity = unityPlayer.GetStatic<AndroidJavaObject>("currentActivity");
        activity.Call("runOnUiThread", new AndroidJavaRunnable(runOnUiThread));
    }    void runOnUiThread()
    {
        Debug.Log("I'm running on the Java UI thread!");
    }
}
```


            
