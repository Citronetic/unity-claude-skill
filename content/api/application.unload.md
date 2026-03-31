This version of Unity is unsupported.



# [Application](Application.html).Unload




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

public static void Unload();






### Description



Unloads the Unity Player.





Unity triggers an [Application.unloading](Application-unloading.html) event and releases memory acquired by the Unity Player while keeping the current process alive. The amount of memory that is released depends on the platform. This is useful when Unity is integrated into another application (see [Unity as a Library](../Manual/UnityasaLibrary.html) as its component (for example, to display 2D/3D/AR content). When the application doesn't need content displayed by Unity anymore, you can release the associated memory by calling this method.

This is currently supported on iOS, Android, and the Universal Windows Platform. On the Web platform, use the `unityInstance.Quit()` JavaScript function to shut down Unity content on a web page.

On iOS and Android, Unload releases memory used by Scenes and GameObjects, but reserves some memory which is necessary for running Unity in the same process again. To learn more, see documentation on Unity as a Library for [iOS](../Manual/UnityasaLibrary-iOS.html) and [Android](../Manual/UnityasaLibrary-Android.html).

On the Universal Windows Platform, unloads the Unity runtime and release all engine memory. This is similar to quitting, except that the application process doesn't exit.

**Note:** This function does not return.


              


```
using UnityEngine;
using System.Collections;// Unload Unity when the user clicks the button. Exit is not applied to the application.public class ExampleClass : MonoBehaviour
{
    void OnGUI()
    {
        if (GUI.Button(new Rect(10, 10, 200, 75), "Unload"))
            Application.Unload();
    }    static void OnUnload()
    {
        Debug.Log("Unloading the Player");
    }    [RuntimeInitializeOnLoadMethod]
    static void RunOnStart()
    {
        Application.unloading += OnUnload;
    }
}
```





Additional resources: [Application.unloading](Application-unloading.html).


            
