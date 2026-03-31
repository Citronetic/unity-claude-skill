This version of Unity is unsupported.



# FilteringSettings Constructor




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

public FilteringSettings(Nullable<RenderQueueRange> renderQueueRange = RenderQueueRange.all,
int layerMask,
uint renderingLayerMask,
int excludeMotionVectorObjects);






### Parameters



| Parameter | Description |
| --- | --- |
| renderQueueRange | A RenderQueueRange struct that sets the value of renderQueueRange. Unity renders objects whose Material.renderQueue value is within the given range. The default value is RenderQueueRange.all. |
| layerMask | A bit mask that sets the value of layerMask. Unity renders objects whose GameObject.layer value is enabled in this bit mask. The default value is -1. |
| renderingLayerMask | A bit mask that sets the value of renderingLayerMask. Unity renders objects whose Renderer.renderingLayerMask value is enabled in this bit mask. The default value is uint.MaxValue. |
| excludeMotionVectorObjects | An int that sets the value of excludeMotionVectorObjects. When this is 1, Unity excludes objects that have a motion pass enabled, or have changed position since the last frame. The default value is 0. |





### Description



Creates a `FilteringSettings` struct for use with Rendering.ScriptableRenderContext.DrawRenderers.





**Note:** If you call `new FilteringSettings()` without any parameters, Unity creates an empty `FilteringSettings` struct. An empty struct contains no data and all internal values default to 0; for example, it has a `layerMask` value of 0, and so on. Unless you overwrite its properties, this empty struct tells Unity to exclude all objects.

If you call this constructor with one or more parameters, Unity sets any unspecified values to the default. The default value for each property performs no filtering. To create a `FilteringSettings` struct with all default values, use [FilteringSettings.defaultValue](Rendering.FilteringSettings-defaultValue.html).

This example demonstrates the syntax for creating a `FilteringSettings` struct with some non-default values.


              


```
using UnityEngine;
using UnityEngine.Rendering;public class FilteringSettingsExample
{
    public FilteringSettings CreateFilteringSettings()
    {
        // Instantiate a RenderQueueRange struct that represents the RenderQueue values you want to render
        // In this example, render materials whose RenderQueue value is in the opaque range
        var desiredRenderQueueRange = RenderQueueRange.opaque;        // Create a bit mask that represents the layers you want to render
        // In this example, only render objects on layer 0 (the "Default" layer)
        int layerIndex = 0;
        int layerMask = 1 << layerIndex;        // Instantiate a FilteringSettings struct with the desired values
        // Unity sets any unspecified values to the same as FilteringSettings.default
        FilteringSettings filteringSettings = new FilteringSettings(desiredRenderQueueRange, layerMask);        return filteringSettings;
    }
}
```





Additional resources: ScriptableRenderContext.DrawRenderers, [Creating a simple render loop in a custom render pipeline](../Manual/srp-creating-simple-render-loop.html).


            
