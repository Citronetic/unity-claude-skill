This version of Unity is unsupported.



# [VideoClip](Video.VideoClip.html).pixelAspectRatioNumerator




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












                    public uint pixelAspectRatioNumerator;






### Description



Returns the numerator of the pixel aspect ratio (numerator:denominator). (Read Only).





The pixel aspect ratio (for example, 10:11) determines the shape of each pixel. The first number (10) is the numerator and is the width of the pixel. The second number (11) is the denominator and is the height of the pixel. You can use the pixel aspect ratio to resize a video to appear less stretched.

Additional resources: [VideoClip.pixelAspectRatioDenominator](Video.VideoClip-pixelAspectRatioDenominator.html).


              


```
// This script creates a plane, adds a VideoPlayer component and plays a video on it.
// It uses the pixel aspect ratio denominator and numerator to resize the plane to prevent the video appearing stretched. using UnityEngine;
using UnityEngine.Video;public class PixelAspectRatioExample : MonoBehaviour
{
    public VideoClip videoClip;
    public Camera mainCamera;
    void Start()
    {
        if (videoClip != null)
        {
            float numerator = (float)videoClip.pixelAspectRatioNumerator;
            float denominator = (float)videoClip.pixelAspectRatioDenominator;            // Create a plane to project the video clip onto.
            GameObject videoPlane = GameObject.CreatePrimitive(PrimitiveType.Plane);
            // Create the VideoPlayer and assign a VideoClip.
            VideoPlayer videoPlayer = videoPlane.AddComponent<VideoPlayer>();
            videoPlayer.clip = videoClip;            // Set the plane to the same position as your GameObject.
            videoPlane.transform.position = transform.position;            // Rotate the plane to face the camera and adjust.
            videoPlane.transform.LookAt(mainCamera.transform);
            videoPlane.transform.Rotate(90, 0, 0);            // Scale the plane to match the video's aspect ratio.
            float planeWidth = videoPlane.transform.localScale.x * numerator / denominator;
            videoPlane.transform.localScale = new Vector3(planeWidth, 1, 1);        }
        else
        {
            Debug.LogError("No VideoClip assigned in the Inspector.");
        }
    }
}
```


            
