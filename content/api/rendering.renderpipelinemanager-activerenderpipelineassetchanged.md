This version of Unity is unsupported.



# [RenderPipelineManager](Rendering.RenderPipelineManager.html).activeRenderPipelineAssetChanged




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



















### Parameters



| Parameter | Description |
| --- | --- |
| value | The delegate that will be executed when the current RenderPipelineAsset has changed between frames. The first argument will be the previous RenderPipelineAsset, and the second argument will be the current RenderPipelineAsset. The one used to create the current RenderPipeline used to render the last frame. |





### Description



Delegate that you can use to invoke custom code when the current RenderPipelineAsset between frames has changed.


              


```
using UnityEngine;
using UnityEngine.Rendering;public class CurrentRenderPipelineAssetChangedExample : MonoBehaviour
{
    void Start()
    {
        RenderPipelineManager.activeRenderPipelineAssetChanged += RenderPipelineManager_activeRenderPipelineAssetChanged;
    }    private void OnDestroy()
    {
        RenderPipelineManager.activeRenderPipelineAssetChanged -= RenderPipelineManager_activeRenderPipelineAssetChanged;
    }    private void RenderPipelineManager_activeRenderPipelineAssetChanged(RenderPipelineAsset from, RenderPipelineAsset to)
    {
        Debug.Log($"RenderPipelineAsset has changed {(from != null ? from.GetType().Name : "Built-In")} to {(to != null ? to.GetType().Name : "Built-In")}");
    }
}
```


            
