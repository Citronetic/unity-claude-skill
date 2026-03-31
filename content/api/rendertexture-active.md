This version of Unity is unsupported.



# [RenderTexture](RenderTexture.html).active




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







                    public static [RenderTexture](RenderTexture.html) active;






### Description



Currently active render texture.





All rendering goes into the active RenderTexture.
If the active RenderTexture is `null` everything is rendered in the main window.

Setting [RenderTexture.active](RenderTexture-active.html) is the same as calling [Graphics.SetRenderTarget](Graphics.SetRenderTarget.html). Typically
you change or query the active render texture when implementing custom graphics effects;
if all you need is to make a Camera render into a texture then use [Camera.targetTexture](Camera-targetTexture.html)
instead.

When a RenderTexture becomes active its hardware rendering context is automatically created if
it hasn't been created already.

Additional resources: [Graphics.SetRenderTarget](Graphics.SetRenderTarget.html), [GraphicsTexture.active](Rendering.GraphicsTexture-active.html).


              


```
using UnityEngine;
using System.Collections;// Get the contents of a RenderTexture into a Texture2D
public class ExampleClass : MonoBehaviour
{
    static public Texture2D GetRTPixels(RenderTexture rt)
    {
        // Remember currently active render texture
        RenderTexture currentActiveRT = RenderTexture.active;        // Set the supplied RenderTexture as the active one
        RenderTexture.active = rt;        // Create a new Texture2D and read the RenderTexture image into it
        Texture2D tex = new Texture2D(rt.width, rt.height);
        tex.ReadPixels(new Rect(0, 0, tex.width, tex.height), 0, 0);
        tex.Apply();        // Restore previously active render texture
        RenderTexture.active = currentActiveRT;
        return tex;
    }
}
```


            
