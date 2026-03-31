This version of Unity is unsupported.



# [RenderPipelineManager](Rendering.RenderPipelineManager.html).activeRenderPipelineTypeChanged




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



Delegate that you can use to invoke custom code when Unity changes the active render pipeline, and the new [RenderPipeline](Rendering.RenderPipeline.html) has a different type to the old one.





If the `RenderPipeline` that Unity uses to render a frame is a different type to the one from the previous frame, Unity executes the methods in this delegate's invocation list.

If you are writing a tool that relies on the resources or results of a type of `RenderPipeline`, you can use this delegate to be notified of any change.

The following code example demonstrates how to add a method to this delegate's invocation list, and later remove it.


              


```
using UnityEngine;
using UnityEngine.Rendering;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        RenderPipelineManager.activeRenderPipelineTypeChanged += OnRenderPipelineTypeChanged;
    }    void OnRenderPipelineTypeChanged()
    {
        // Put the code that you want to execute everytime the Render Pipeline used is changed
        // You can know which pipeline is currently active by calling RenderPipelineManager.currentPipeline
    }    void OnDestroy()
    {
        RenderPipelineManager.activeRenderPipelineTypeChanged -= OnRenderPipelineTypeChanged;
    }
}
```





Additional resources: [How to get, set, and configure the active render pipeline](../Manual/srp-setting-render-pipeline-asset.html), [GraphicsSettings.currentRenderPipeline](Rendering.GraphicsSettings-currentRenderPipeline.html), [GraphicsSettings.defaultRenderPipeline](Rendering.GraphicsSettings-defaultRenderPipeline.html), [QualitySettings.renderPipeline](QualitySettings-renderPipeline.html), [RenderPipelineManager.currentPipeline](Rendering.RenderPipelineManager-currentPipeline.html).


            
