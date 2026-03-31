This version of Unity is unsupported.



# [Camera](Camera.html).ViewportToScreenPoint




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




                [Switch to Manual](../Manual/class-Camera.html)










## Declaration

public [Vector3](Vector3.html) ViewportToScreenPoint([Vector3](Vector3.html) position);






### Description



Transforms `position` from viewport space into screen space.





Viewport space is normalized and relative to the camera. The bottom-left of the camera is
(0,0); the top-right is (1,1). The z position is in world units from the camera.

Screen space is defined in pixels. The bottom-left of the screen is (0,0); the right-top
is ([pixelWidth](Camera-pixelWidth.html),[pixelHeight](Camera-pixelHeight.html)). The z position is in world units from the camera.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Draw an image based on normalized view coordinates
    // rather than pixel positions.
    Texture2D bottomPanel;    void VPToScreenPtExample()
    {
        var origin = Camera.main.ViewportToScreenPoint(new Vector3(0.25f, 0.1f, 0));
        var extent = Camera.main.ViewportToScreenPoint(new Vector3(0.5f, 0.2f, 0));        GUI.DrawTexture(new Rect(origin.x, origin.y, extent.x, extent.y), bottomPanel);
    }
}
```


            
