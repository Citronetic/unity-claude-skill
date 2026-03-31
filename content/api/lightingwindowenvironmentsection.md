This version of Unity is unsupported.



# LightingWindowEnvironmentSection





class in
          UnityEditor


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



Base class for the Inspector that overrides the Environment section of the Lighting window.





See also [SupportedOnRenderPipelineAttribute](Rendering.SupportedOnRenderPipelineAttribute.html).


              


```
using UnityEditor;
using UnityEngine;
using UnityEngine.Rendering;[SupportedOnRenderPipeline(typeof(CustomSRPAsset))]
class CustomEnvironmentSection : LightingWindowEnvironmentSection
{
    public override void OnInspectorGUI()
    {
        // The following will be displayed instead of the Environment section in the LightingWindow
        EditorGUILayout.LabelField("My Custom Environment Section !!");
    }
}
//Below is a custom empty render pipeline only here for explaining the filtering in ScriptableRenderPipelineExtensionclass CustomSRP : RenderPipeline
{
    protected override void Render(ScriptableRenderContext context, Camera[] cameras)
    { /* My custom rendering algorithm */ }
}class CustomSRPAsset : RenderPipelineAsset
{
    protected override RenderPipeline CreatePipeline()
    {
        return new CustomSRP();
    }
}
```





In this example, the Environment section of the Lighting window is overridden when the CustomSRP is in use.





### Public Methods



| Method | Description |
| --- | --- |
| OnDisable | OnDisable is called when this Inspector override is not used anymore. |
| OnEnable | OnEnable is called when this Inspector override is used. |
| OnInspectorGUI | A callback that is called when drawing the Environment section in the Lighting window. |


            
