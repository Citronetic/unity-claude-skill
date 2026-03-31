This version of Unity is unsupported.



# RTClearFlags





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



Flags that determine which render targets Unity clears when you use [CommandBuffer.ClearRenderTarget](Rendering.CommandBuffer.ClearRenderTarget.html).





You can combine flags by using the bitwise OR operator.


              


```
using UnityEngine;
using UnityEngine.Rendering;// Attach this script to a Camera and select a Clear Mode.
// When you enter Play mode, a command buffer clears the screen with different clear parameters.
[RequireComponent(typeof(Camera))]
public class MyClearScript : MonoBehaviour
{
    public enum ClearMode
    {
        All,
        ColorStencil
    }    public ClearMode m_ClearMode;    void Start()
    {
        var camera = GetComponent<Camera>();
        var buffer = new CommandBuffer();        switch (m_ClearMode)
        {
            case ClearMode.All:
                // Clear color, depth and stencil render targets. Stencil is cleared with value 0xF0.
                buffer.ClearRenderTarget(RTClearFlags.All, Color.red, 1.0f, 0xF0);
                break;
            case ClearMode.ColorStencil:
                // Clear only color and stencil render targets. Stencil is cleared with value 0xF0.
                buffer.ClearRenderTarget((RTClearFlags)((int)RTClearFlags.Color | (int)RTClearFlags.Stencil), Color.green, 1.0f, 0xF0);
                break;
        }        camera.AddCommandBuffer(CameraEvent.AfterSkybox, buffer);
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| None | Do not clear any render target. |
| Color | Clear all color render targets. |
| Depth | Clear the depth buffer. |
| Stencil | Clear the stencil buffer. |
| All | Clear all color render targets, the depth buffer, and the stencil buffer. This is equivalent to combining RTClearFlags.Color, RTClearFlags.Depth and RTClearFlags.Stencil. |
| DepthStencil | Clear both the depth and the stencil buffer. This is equivalent to combining RTClearFlags.Depth and RTClearFlags.Stencil. |
| ColorDepth | Clear both the color and the depth buffer. This is equivalent to combining RTClearFlags.Color and RTClearFlags.Depth. |
| ColorStencil | Clear both the color and the stencil buffer. This is equivalent to combining RTClearFlags.Color and RTClearFlags.Stencil. |
| Color0 | Clear color target 0. |
| Color1 | Clear color target 1. |
| Color2 | Clear color target 2. |
| Color3 | Clear color target 3. |
| Color4 | Clear color target 4. |
| Color5 | Clear color target 5. |
| Color6 | Clear color target 6. |
| Color7 | Clear color target 7. |


            
