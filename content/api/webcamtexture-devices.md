This version of Unity is unsupported.



# [WebCamTexture](WebCamTexture.html).devices




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












                    public static WebCamDevice[] devices;






### Description



Return a list of available devices.





This queries the system for the list of devices connected and it can be slow.
You should cache this value by keeping a copy of the result if you want to use it repeatedly.

**Note:** On devices running Android 10 and newer versions, this list includes both [logical and physical](https://developer.android.com/media/camera/camera2/multi-camera#logical) cameras, if the device exposes them. On Android 9, this list includes only logical cameras because requesting characteristics for physical cameras isn't supported.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    // Gets the list of devices and prints them to the console.
    void Start()
    {
        WebCamDevice[] devices = WebCamTexture.devices;
        for (int i = 0; i < devices.Length; i++)
            Debug.Log(devices[i].name);
    }
}
```


            
