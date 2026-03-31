This version of Unity is unsupported.



# DefaultFormat





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



Use a default format to create either Textures or RenderTextures from scripts based on platform specific capability.


              


```
using UnityEngine;
using UnityEngine.Experimental.Rendering;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        // Create a new texture and assign it to the material of the renderer.
        Texture2D texture = new Texture2D(1, 1, DefaultFormat.LDR, TextureCreationFlags.None);
        GetComponent<Renderer>().material.mainTexture = texture;
    }
}
```





Each graphics card may not support all usages across formats. Use [SystemInfo.IsFormatSupported](SystemInfo.IsFormatSupported.html) to check which usages the graphics card supports.

Additional resources: [SystemInfo.GetGraphicsFormat](SystemInfo.GetGraphicsFormat.html), [Texture2D](Texture2D.html), [texture assets](../Manual/Textures.html).





### Properties



| Property | Description |
| --- | --- |
| LDR | Represents the default platform-specific LDR format. If the project uses the linear rendering mode, the actual format is sRGB. If the project uses the gamma rendering mode, the actual format is UNorm. |
| HDR | Represents the default platform specific HDR format. |
| DepthStencil | Represents the default platform-specific depth stencil format. |
| Shadow | Represents the default platform specific shadow format. |
| Video | Represents the default platform specific video format. |


            
