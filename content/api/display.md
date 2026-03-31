This version of Unity is unsupported.



# Display





class in
          UnityEngine



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Provides access to a display / screen for rendering operations.





Unity supports multi-display rendering on:



          - Desktop platforms (Windows, macOS X, and Linux)

          - Android (OpenGL ES and Vulkan)

          - iOS





Some features in the Display class only work on some of the supported platforms. See the properties and methods for more information about platform compatibility.

Use the Display class to operate on the displays themselves, and [Camera.targetDisplay](Camera-targetDisplay.html) to set up cameras for rendering to individual displays.

Additional resources: [Camera.targetDisplay](Camera-targetDisplay.html), [Canvas.targetDisplay](Canvas-targetDisplay.html).


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    Camera extCam;
    Camera cam;    void Start()
    {
        // GUI is rendered with last camera.
        // As we want it to end up in the main screen, make sure main camera is the last one drawn.
        extCam.depth = cam.depth - 1;        cam.SetTargetBuffers(Display.main.colorBuffer, Display.main.depthBuffer);
        extCam.enabled = false;
    }    void Update()
    {
        if (Display.displays.Length > 1 && !extCam.enabled)
        {
            Display.displays[1].SetRenderingResolution(256, 256);
            extCam.SetTargetBuffers(Display.displays[1].colorBuffer, Display.displays[1].depthBuffer);
        }
        extCam.enabled = Display.displays.Length > 1;
    }
}
```





### Static Properties



| Property | Description |
| --- | --- |
| activeEditorGameViewTarget | Get the Editors active GameView display target. |
| displays | The list of connected displays. |
| main | Main Display. |





### Properties



| Property | Description |
| --- | --- |
| active | Gets the state of the display and returns true if the display is active and false if otherwise. |
| colorBuffer | Color RenderBuffer. |
| depthBuffer | Depth RenderBuffer. |
| renderingHeight | Vertical resolution that the display is rendering at. |
| renderingWidth | Horizontal resolution that the display is rendering at in the viewport. |
| requiresBlitToBackbuffer | True when the back buffer requires an intermediate texture to render. |
| requiresSrgbBlitToBackbuffer | True when doing a blit to the back buffer requires manual color space conversion. |
| systemHeight | Vertical native display resolution. |
| systemWidth | Horizontal native display resolution. |





### Public Methods



| Method | Description |
| --- | --- |
| Activate | Activates an external display. For example, a secondary monitor connected to the system. |
| SetParams | Windows platforms only. Sets rendering size and position on screen. |
| SetRenderingResolution | Sets rendering resolution for the display. |





### Static Methods



| Method | Description |
| --- | --- |
| RelativeMouseAt | Query relative mouse coordinates. |


            
