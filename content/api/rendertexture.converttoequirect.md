This version of Unity is unsupported.



# [RenderTexture](RenderTexture.html).ConvertToEquirect




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




                [Switch to Manual](../Manual/class-RenderTexture.html)










## Declaration

public void ConvertToEquirect([RenderTexture](RenderTexture.html) equirect,
[Camera.MonoOrStereoscopicEye](Camera.MonoOrStereoscopicEye.html) eye);






### Parameters



| Parameter | Description |
| --- | --- |
| equirect | RenderTexture to render the equirect format to. |
| eye | A Camera eye corresponding to the left or right eye for stereoscopic rendering, or neither for monoscopic rendering. |





### Description



Converts the render texture to equirectangular format (both stereoscopic or monoscopic equirect).
The left eye will occupy the top half and the right eye will occupy the bottom. The monoscopic version will occupy the whole texture.
Texture dimension must be of type [TextureDimension.Cube](Rendering.TextureDimension.Cube.html).


              


```
using UnityEngine;
using UnityEngine.Rendering;public class CreateEquirect : MonoBehaviour
{
    public RenderTexture cubemap;
    public RenderTexture cubemap2;
    public RenderTexture equirect;
    public bool renderStereo = true;
    public float stereoSeparation = 0.064f;    void LateUpdate()
    {
        //assume cubemap and cubemap2 are rendered using Camera.RenderToCubemap() for left/right eyes        if (equirect == null)
            return;        if (renderStereo)
        {
            cubemap.ConvertToEquirect(equirect, Camera.MonoOrStereoscopicEye.Left);
            cubemap2.ConvertToEquirect(equirect, Camera.MonoOrStereoscopicEye.Right);
        }
        else
        {
            cubemap.ConvertToEquirect(equirect, Camera.MonoOrStereoscopicEye.Mono);
        }
    }
}
```


            
