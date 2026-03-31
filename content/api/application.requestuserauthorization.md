This version of Unity is unsupported.



# [Application](Application.html).RequestUserAuthorization




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

public static [AsyncOperation](AsyncOperation.html) RequestUserAuthorization([UserAuthorization](UserAuthorization.html) mode);






### Description



Request authorization to use the webcam or microphone on iOS, and the webcam only on WebGL.





`Application.RequestUserAuthorization` is called to request permission for microphone and camera. The application shows a dialog box to the user and waits for the operation to complete before being able to use these features.

**Note:** Use [Application.HasUserAuthorization](Application.HasUserAuthorization.html) to query the result of the operation.


              


```
using UnityEngine;
using UnityEngine.iOS;
using System.Collections;// Show WebCams and Microphones on an iPhone/iPad.
// Make sure NSCameraUsageDescription and NSMicrophoneUsageDescription
// are in the Info.plist.public class ExampleClass : MonoBehaviour
{
    IEnumerator Start()
    {
        FindWebCams();        yield return Application.RequestUserAuthorization(UserAuthorization.WebCam);
        if (Application.HasUserAuthorization(UserAuthorization.WebCam))
        {
            Debug.Log("webcam found");
        }
        else
        {
            Debug.Log("webcam not found");
        }        FindMicrophones();        yield return Application.RequestUserAuthorization(UserAuthorization.Microphone);
        if (Application.HasUserAuthorization(UserAuthorization.Microphone))
        {
            Debug.Log("Microphone found");
        }
        else
        {
            Debug.Log("Microphone not found");
        }
    }    void FindWebCams()
    {
        foreach (var device in WebCamTexture.devices)
        {
            Debug.Log("Name: " + device.name);
        }
    }    void FindMicrophones()
    {
        foreach (var device in Microphone.devices)
        {
            Debug.Log("Name: " + device);
        }
    }
}
```


            
