This version of Unity is unsupported.



# [Permission](Android.Permission.html).HasUserAuthorizedPermission




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

public static bool HasUserAuthorizedPermission(string permission);






### Parameters



| Parameter | Description |
| --- | --- |
| permission | A string representing the permission to request. For permissions which Unity has not predefined, you can provide Android's in-built permission strings such as "android.permission.READ_CONTACTS". For a list of permission strings, refer to Android's documentation on  Manifest.permission. |





### Returns



**bool**
        Whether the requested permission has been granted.





### Description



Check if the user has granted access to a device resource or information that requires authorization.


              


```
using UnityEngine;
using UnityEngine.Android;public class CheckPermissionScript : MonoBehaviour
{
    void Start()
    {
        if (Permission.HasUserAuthorizedPermission(Permission.Microphone))
            Debug.Log("Microphone permission has been granted.");
    }
}
```


            
