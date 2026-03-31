This version of Unity is unsupported.



# UserAuthorization





enumeration


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



















### Description



Use this enum to request permission from the user’s device for access to system features.





To request permission, pass this as a parameter to [Application.RequestUserAuthorization](Application.RequestUserAuthorization.html).

**Note**: The Microphone API is not available for the Web platform.


              


```
// This script outputs the feed from a video input source (if one exists) to the texture of the GameObject you attach this script to.
// For this to work, attach this script to a GameObject that has a Renderer component. using UnityEngine;
using System.Collections;public class WebcamExample : MonoBehaviour
{
    private WebCamTexture webCamTexture;    IEnumerator Start()
    {
        // Request permission from the device for access to video input sources.
        yield return Application.RequestUserAuthorization(UserAuthorization.WebCam);

        // If the user approves access to video, play video feed to GameObject's texture.
        if (Application.HasUserAuthorization(UserAuthorization.WebCam))
        {
            // Get the first available video input source.
            string webCamName = WebCamTexture.devices[0].name;
            Debug.Log($"Selected WebCam: {webCamName}");            // Use this webcam to create a WebCamTexture.
            webCamTexture = new WebCamTexture(webCamName);            // Assign the texture to the current GameObject.
            Renderer renderer = GetComponent<Renderer>();
            if (renderer != null)
            {
                renderer.material.mainTexture = webCamTexture;
            }            // Stream the footage from the webcam.
            webCamTexture.Play();
        }
        else
        {
            Debug.Log("Webcam not found.");
        }
    }    void OnApplicationQuit()
    {
        // Stop the webcam feed when the application closes.
        if (webCamTexture != null && webCamTexture.isPlaying)
        {
            webCamTexture.Stop();
        }
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| WebCam | Request permission to use any video input sources attached to the device. |
| Microphone | Request permission to use any audio input sources attached to the device. |


            
