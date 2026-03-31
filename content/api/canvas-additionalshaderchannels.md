This version of Unity is unsupported.



# [Canvas](Canvas.html).additionalShaderChannels




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












                    public [AdditionalCanvasShaderChannels](AdditionalCanvasShaderChannels.html) additionalShaderChannels;






### Description



Get or set the mask of additional shader channels to be used when creating the [Canvas](Canvas.html) mesh.





The [Canvas](Canvas.html) will always include Position, Color, and Uv0 shader channels when generating the mesh for a overlay [Canvas](Canvas.html) and will also include Normal and Tangent for ScreenSpace.Camera and World space [Canvas](Canvas.html). These are the optional additional parameters to be copied.


              


```
using UnityEngine;public class SetCanvasShaderChannels : MonoBehaviour
{
    public Canvas canvas;    void Start()
    {
        canvas.additionalShaderChannels |= AdditionalCanvasShaderChannels.Normal;
        canvas.additionalShaderChannels |= AdditionalCanvasShaderChannels.TexCoord1;
        canvas.additionalShaderChannels |= AdditionalCanvasShaderChannels.Tangent;
    }
}
```


            
