This version of Unity is unsupported.



# [Camera](Camera.html).RenderWithShader




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

public void RenderWithShader([Shader](Shader.html) shader,
string replacementTag);






### Parameters



| Parameter | Description |
| --- | --- |
| shader | The shader to render visible objects with. |
| replacementTag | The ShaderLab Tag used to filter which objects are rendered. |





### Description



Render the camera with shader replacement.





See [Rendering with Replaced Shaders](../Manual/SL-ShaderReplacement.html) page for details.

This will render the camera. It will use the camera's clear flags, target texture and all other settings.

If the replacementTag argument is not in use, pass an empty string as the value.

The camera will **not** send [MonoBehaviour.OnPreCull](MonoBehaviour.OnPreCull.html), [MonoBehaviour.OnPreRender](MonoBehaviour.OnPreRender.html) or
[MonoBehaviour.OnPostRender](MonoBehaviour.OnPostRender.html) to attached scripts. Image filters will not be rendered either.

This is used for special effects, e.g. rendering screen space normal buffer of the whole Scene,
heat vision and so on. To make use of this feature, usually you create a camera and disable it.
Then call RenderWithShader on it.

You are not able to call the Render function from a camera that is currently rendering. If you wish to
do this create a copy of the camera, and make it match the original one using [CopyFrom](Camera.CopyFrom.html).

The following example shows how to render the current camera with a replacement shader and store the
result in a render texture.

Additional resources: [Rendering with Replaced Shaders](../Manual/SL-ShaderReplacement.html), [SetReplacementShader](Camera.SetReplacementShader.html), [Render](Camera.Render.html).


              


```
using UnityEngine;
using UnityEngine;public class ReplaceShader : MonoBehaviour
{
    public Shader overrideShader;
    public RenderTexture output;
    void Update()
    {
        // Check if there is a current camera rendering
        if (Camera.current != null)
        {
            // Assign the output render texture to the current camera
            Camera.current.targetTexture = output;
            //
            // Render the scene by replacing all the "RenderType" shaders with the overrideShader
            Camera.current.RenderWithShader(overrideShader, "RenderType");
            //
            // Set the output render texture back to null to avoid side effects.
            Camera.current.targetTexture = null;
        }
        else
        {
            Debug.LogWarning("No current camera available for rendering.");
        }
    }
}
```


            
