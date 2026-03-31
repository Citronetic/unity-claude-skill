This version of Unity is unsupported.



# [RenderPipelineManager](Rendering.RenderPipelineManager.html).activeRenderPipelineCreated




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



Delegate that you can use to invoke custom code right after [RenderPipelineManager.currentPipeline](Rendering.RenderPipelineManager-currentPipeline.html) is created.





Unity does not switch the render pipeline immediately when you set [GraphicsSettings.currentRenderPipeline](Rendering.GraphicsSettings-currentRenderPipeline.html) or [QualitySettings.renderPipeline](QualitySettings-renderPipeline.html). Unity only instantiate a new `RenderPipeline` instance the first time any [Camera](Camera.html) renders after you set a new `RenderPipelineAsset`. You can
subscribe to this event to know that `RenderPipeline`  is created. To access the current pipeline object you can rely on [RenderPipelineManager.currentPipeline](Rendering.RenderPipelineManager-currentPipeline.html) which will point to the newly created `RenderPipeline`.


              


```
using UnityEngine;
using UnityEngine.Rendering;
public class CurrentRenderPipelineCreatedExample : MonoBehaviour
{
    void Start()
    {
        RenderPipelineManager.activeRenderPipelineCreated += RenderPipelineManager_activeRenderPipelineCreated;
    }    private void OnDestroy()
    {
        RenderPipelineManager.activeRenderPipelineCreated -= RenderPipelineManager_activeRenderPipelineCreated;
    }    private void RenderPipelineManager_activeRenderPipelineCreated()
    {
        Debug.Log($"Render Pipeline {RenderPipelineManager.currentPipeline.GetType().Name} is created.");
    }
}
```


            
