This version of Unity is unsupported.



# [GraphicsTexture](Rendering.GraphicsTexture.html).active




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












                    public static [Rendering.GraphicsTexture](Rendering.GraphicsTexture.html) active;






### Description



Currently active graphics texture.





All rendering goes into the active GraphicsTexture.
If the active GraphicsTexture is `null`, everything renders in the main window. If the active render target is a [RenderTexture](RenderTexture.html), `GraphicsTexture.active` returns the [graphicsTexture](Texture-graphicsTexture.html) of [RenderTexture.active](RenderTexture-active.html).

In order to set the active render target to a GraphicsTexture, it must have [GraphicsTextureDescriptorFlags.RenderTarget](Rendering.GraphicsTextureDescriptorFlags.RenderTarget.html) enabled in [GraphicsTextureDescriptor.flags](Rendering.GraphicsTextureDescriptor-flags.html) on texture creation.

Setting `GraphicsTexture.active` is the same as calling [Graphics.SetRenderTarget](Graphics.SetRenderTarget.html) with a single GraphicsTexture. Typically
you change or query the active render target when implementing custom graphics effects;
if all you need is to make a Camera render into a texture, then use [Camera.targetTexture](Camera-targetTexture.html) with a [RenderTexture](RenderTexture.html)
instead.

Additional resources: [GraphicsTextureDescriptorFlags.RenderTarget](Rendering.GraphicsTextureDescriptorFlags.RenderTarget.html), [Graphics.SetRenderTarget](Graphics.SetRenderTarget.html), [RenderTexture.active](RenderTexture-active.html).


              


```
using UnityEngine;
using UnityEngine.Rendering;
using System.Collections;// Get the contents of a GraphicsTexture into a Texture2D
public class ExampleClass : MonoBehaviour
{
    static public Texture2D GetGfxTexPixels(GraphicsTexture gfxTex)
    {
        // Remember currently active render target
        GraphicsTexture currentActiveRT = GraphicsTexture.active;        // Set the supplied GraphicsTexture as the active one
        GraphicsTexture.active = gfxTex;        // Create a new Texture2D and read the GraphicsTexture image into it
        Texture2D tex = new Texture2D(gfxTex.descriptor.width, gfxTex.descriptor.height);
        tex.ReadPixels(new Rect(0, 0, tex.width, tex.height), 0, 0);
        tex.Apply();        // Restore previously active render texture
        GraphicsTexture.active = currentActiveRT;
        return tex;
    }
}
```


            
