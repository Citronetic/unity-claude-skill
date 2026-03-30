This version of Unity is unsupported.



# [ScreenCapture](ScreenCapture.html).CaptureScreenshotAsTexture




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

public static [Texture2D](Texture2D.html) CaptureScreenshotAsTexture(int superSize);






## Declaration

public static [Texture2D](Texture2D.html) CaptureScreenshotAsTexture([ScreenCapture.StereoScreenCaptureMode](ScreenCapture.StereoScreenCaptureMode.html) stereoCaptureMode);






### Parameters



| Parameter | Description |
| --- | --- |
| superSize | Factor by which to increase resolution. |
| stereoCaptureMode | Specifies the eye texture to capture when stereo rendering is enabled. |





### Description



Captures a screenshot of the game view into a Texture2D object.





When `superSize` parameter is larger than 1, a larger resolution screenshot will be
produced. For example, passing 4 will make the screenshot be 4x4 larger than it normally
would. This is useful to produce screenshots for printing.

To get a reliable output from this method you must make sure it is called once the frame rendering has ended, and not during the rendering process. A simple way of ensuring this is to call it from a coroutine that yields on WaitForEndOfFrame. If you call this method during the rendering process you will get unpredictable and undefined results.


              


```
using UnityEngine;
using System.Collections;public class ScreenShotter : MonoBehaviour
{
    IEnumerator RecordFrame()
    {
        yield return new WaitForEndOfFrame();
        var texture = ScreenCapture.CaptureScreenshotAsTexture();
        // do something with texture        // cleanup
        Object.Destroy(texture);
    }    public void LateUpdate()
    {
        StartCoroutine(RecordFrame());
    }
}
```


            
