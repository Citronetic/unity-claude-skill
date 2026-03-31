This version of Unity is unsupported.



# [Permission](Android.Permission.html).ShouldShowRequestPermissionRationale




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

public static bool ShouldShowRequestPermissionRationale(string permission);






### Parameters



| Parameter | Description |
| --- | --- |
| permission | A string identifier for permission. This is the value of Android constant. |





### Returns



**bool**
        The value returned by equivalent Android method.





### Description



Check whether to display the UI explaining the reason for permission before requesting it.





For more information on this method, refer to [Android developer documentation](https://developer.android.com/reference/android/app/Activity#shouldShowRequestPermissionRationale(java.lang.String)).


              


```
using UnityEngine;
using UnityEngine.Android;public class RequestPermissionScript : MonoBehaviour
{
    internal void PermissionCallbacks_PermissionDeniedAndDontAskAgain(string permissionName)
    {
        Debug.Log($"{permissionName} PermissionDeniedAndDontAskAgain");
    }    internal void PermissionCallbacks_PermissionGranted(string permissionName)
    {
        Debug.Log($"{permissionName} PermissionCallbacks_PermissionGranted");
    }    internal void PermissionCallbacks_PermissionDenied(string permissionName)
    {
        Debug.Log($"{permissionName} PermissionCallbacks_PermissionDenied");
    }    void Start()
    {
        if (Permission.HasUserAuthorizedPermission(Permission.Microphone))
        {
            // The user authorized use of the microphone.
        }
        else
        {
            // The user has not authorized microphone usage.
            // Check whether you need to display the rationale for requesting permission
            bool useCallbacks = false;
            if (!useCallbacks)
            {
                if (Permission.ShouldShowRequestPermissionRationale(Permission.Microphone))
                    {
                    // Show a message or inform the user in other ways why your application needs the microphone permission.
                    }
                // Ask for permission or proceed without the functionality enabled.
                Permission.RequestUserPermission(Permission.Microphone);
            }
            else
            {
                var callbacks = new PermissionCallbacks();
                callbacks.PermissionDenied += PermissionCallbacks_PermissionDenied;
                callbacks.PermissionGranted += PermissionCallbacks_PermissionGranted;
                callbacks.PermissionDeniedAndDontAskAgain += PermissionCallbacks_PermissionDeniedAndDontAskAgain;
                Permission.RequestUserPermission(Permission.Microphone, callbacks);
            }
        }
    }
}
```


            
