This version of Unity is unsupported.



# [Texture2D](Texture2D.html).ReadPixels




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

public void ReadPixels([Rect](Rect.html) source,
int destX,
int destY,
bool recalculateMipMaps = true);






### Parameters



| Parameter | Description |
| --- | --- |
| source | The region of the render target to read from. |
| destX | The x position in the texture to write the pixels to. |
| destY | The y position in the texture to write the pixels to. |
| recalculateMipMaps | When the value is true, Unity automatically recalculates the mipmap for the texture after it writes the pixel data. Otherwise, Unity doesn't do this automatically. |





### Description



Reads pixels from the current render target and writes them to a texture.





This method copies a rectangular area of pixel colors from the currently active render target on the GPU (for example the screen, a [RenderTexture](RenderTexture.html), or a [GraphicsTexture](Rendering.GraphicsTexture.html)) and writes them to a texture on the CPU at position (`destX`, `destY`). [Texture.isReadable](Texture-isReadable.html) must be `true`, and you must call [Apply](Texture2D.Apply.html) after `ReadPixels` to upload the changed pixels to the GPU.

The lower left corner is (0, 0).

`ReadPixels` is usually slow, because the method waits for the GPU to complete all previous work first. To copy a texture more quickly, use one of the following methods instead:



          - [AsyncGPUReadback.RequestIntoNativeArray](Rendering.AsyncGPUReadback.RequestIntoNativeArray.html) to copy a texture from the GPU to the CPU.

          - [Graphics.CopyTexture](Graphics.CopyTexture.html), [CommandBuffer.CopyTexture](Rendering.CommandBuffer.CopyTexture.html) or [Graphics.Blit](Graphics.Blit.html) to copy a texture on the GPU only.





The render target and the texture must use the same format, and the format must be supported on the device for both rendering and sampling.

You can automatically update the mipmap when you call [Apply](Texture2D.Apply.html) instead of setting `recalculateMipMaps` to `true`.

The following code example demonstrates how to use `ReadPixels` in the Built-in Render Pipeline. In Scriptable Render Pipelines such as the Universal Render Pipeline (URP), [Camera.onPostRender](Camera-onPostRender.html) isn't available, but you can use [RenderPipelineManager.endCameraRendering](Rendering.RenderPipelineManager-endCameraRendering.html) in a similar way.


              


```
using UnityEngine;public class ReadPixelsExample : MonoBehaviour
{
    // Set Renderer to a GameObject that has a Renderer component and a material that displays a texture
    public Renderer screenGrabRenderer;    private Texture2D destinationTexture;
    private bool isPerformingScreenGrab;    void Start()
    {
        // Create a new Texture2D with the width and height of the screen, and cache it for reuse
        destinationTexture = new Texture2D(Screen.width, Screen.height, TextureFormat.RGB24, false);        // Make screenGrabRenderer display the texture.
        screenGrabRenderer.material.mainTexture = destinationTexture;        // Add the onPostRender callback
        Camera.onPostRender += OnPostRenderCallback;
    }    void Update()
    {
        // When the user presses the Space key, perform the screen grab operation
        if (Input.GetKeyDown(KeyCode.Space))
        {
            isPerformingScreenGrab = true;
        }
    }    void OnPostRenderCallback(Camera cam)
    {
        if (isPerformingScreenGrab)
        {
            // Check whether the Camera that just finished rendering is the one you want to take a screen grab from
            if (cam == Camera.main)
            {
                // Define the parameters for the ReadPixels operation
                Rect regionToReadFrom = new Rect(0, 0, Screen.width, Screen.height);
                int xPosToWriteTo = 0;
                int yPosToWriteTo = 0;
                bool updateMipMapsAutomatically = false;                // Copy the pixels from the Camera's render target to the texture
                destinationTexture.ReadPixels(regionToReadFrom, xPosToWriteTo, yPosToWriteTo, updateMipMapsAutomatically);                // Upload texture data to the GPU, so the GPU renders the updated texture
                // Note: This method is costly, and you should call it only when you need to
                // If you do not intend to render the updated texture, there is no need to call this method at this point
                destinationTexture.Apply();                // Reset the isPerformingScreenGrab state
                isPerformingScreenGrab = false;
            }
        }
    }    // Remove the onPostRender callback
    void OnDestroy()
    {
        Camera.onPostRender -= OnPostRenderCallback;
    }
}
```





Additional resources: [ImageConversion.EncodeToPNG](ImageConversion.EncodeToPNG.html).


            
