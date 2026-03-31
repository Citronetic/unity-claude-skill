This version of Unity is unsupported.



# [RenderPipeline](Rendering.RenderPipeline.html).ProcessRenderRequests




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

protected void ProcessRenderRequests([Rendering.ScriptableRenderContext](Rendering.ScriptableRenderContext.html) context,
[Camera](Camera.html) camera,
RequestData renderRequest);






### Parameters



| Parameter | Description |
| --- | --- |
| context | The context to render the request. |
| camera | The camera to render the request. |
| renderRequest | All the necessary destination information to render the request, for example render destination, mipmap level, slice index, and so on. This information varies based on the RequestData type. |





### Description



Implement this method in a custom Scriptable Render Pipeline (SRP) to execute render requests submitted using [RenderPipeline.SubmitRenderRequest](Rendering.RenderPipeline.SubmitRenderRequest.html).





Unity calls this method with the render pipeline when you call [RenderPipeline.SubmitRenderRequest](Rendering.RenderPipeline.SubmitRenderRequest.html) or [Camera.SubmitRenderRequest](Camera.SubmitRenderRequest.html). If you're creating a custom Scriptable Render Pipeline, you must implement this method and [RenderPipeline.IsRenderRequestSupported](Rendering.RenderPipeline.IsRenderRequestSupported.html) to render requests outside of the Unity render loop.

See also: [RenderPipeline.SupportsRenderRequest](Rendering.RenderPipeline.SupportsRenderRequest.html), [RenderPipeline.SubmitRenderRequest](Rendering.RenderPipeline.SubmitRenderRequest.html).


              


```
using UnityEngine;
using UnityEngine.Rendering;
using System.Collections.Generic;public class ExampleRenderPipelineInstance : RenderPipeline
{
    public ExampleRenderPipelineInstance()
    {
    }    override protected bool IsRenderRequestSupported<RequestData>(Camera camera, RequestData data)
    {
        // StandardRequest is supported by this render pipeline
        if (data is StandardRequest)
            return true;        return false;
    }    // Process a basic render request to a Texture2D destination with a single mipmap level
    override protected void ProcessRenderRequests<RequestData>(ScriptableRenderContext context, Camera camera, RequestData renderRequest)
    {
        StandardRequest standardRequest = renderRequest as StandardRequest;        if (standardRequest != null)
        {
            RenderTexture destination = standardRequest.destination;            // Don't go further if there's no destination texture.
            if (destination == null)
            {
                Debug.LogError("Your render request has no destination texture. Set a destination texture before sending a request");
                return;
            }            int mipLevel = standardRequest.mipLevel;
            int slice = standardRequest.slice;
            int face = (int)standardRequest.face;            // If mip is 0 and target is Texture2D, immediately render to the requested destination.
            if (destination.dimension != TextureDimension.Tex2D || mipLevel != 0)
            {
                Debug.LogError("ProcessRenderRequests only support Texture2D destination with a single mipmap level. Adjust your render request");
                return;
            }            // Store data that will be changed.
            var originalTarget = camera.targetTexture;            camera.targetTexture = destination;            Render(context, new Camera[] { camera });            // Restore data.
            camera.targetTexture = originalTarget;
            Graphics.SetRenderTarget(originalTarget);
        }
        else
        {
            Debug.LogWarning("RenderRequest type: " + typeof(RequestData).FullName  + " is either invalid or unsupported by the current pipeline");
        }
    }    override protected void Render(ScriptableRenderContext context, List<Camera> cameras)
    {
        // Put your Render method code here
    }
}
```


            
