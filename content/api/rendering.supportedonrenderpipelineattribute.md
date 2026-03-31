This version of Unity is unsupported.



# SupportedOnRenderPipelineAttribute





class in
          UnityEngine.Rendering



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Set which render pipelines make a class active.





Add `[SupportedOnRenderPipeline]` above a class to set which [Render Pipeline Assets](Rendering.RenderPipelineAsset.html) make a class active. For example, `[SupportedOnRenderPipeline(typeof(HDRenderPipelineAsset))`.

            `[SupportedOnRenderPipeline]` works only with some attributes - for example, [CustomEditor](CustomEditor.html).
            You can use `[SupportedOnRenderPipeline]` without an argument if you want all [Scriptable Render Pipeline](../Manual/ScriptableRenderPipeline.html) Assets to make the class active.
            The following example makes the `BehaviourEditor` class active when any Scriptable Render Pipeline asset is active.


              


```
using UnityEditor;
using UnityEngine;
using UnityEngine.Rendering;[CustomEditor(typeof(Behaviour))]
[SupportedOnRenderPipeline]
public class BehaviourEditor : Editor
{
    public override void OnInspectorGUI()
    {
        EditorGUILayout.LabelField($"{nameof(BehaviourEditor)} is supported on the currently active render pipeline.");
    }
}public class Behaviour : MonoBehaviour
{
}
```





Additional resources: [RenderPipelineAsset](Rendering.RenderPipelineAsset.html).





### Properties



| Property | Description |
| --- | --- |
| isSupportedOnCurrentPipeline | The value is true if the current RenderPipelineAsset supports the attribute. |
| renderPipelineTypes | The Render Pipeline Assets that support the attribute. |





### Public Methods



| Method | Description |
| --- | --- |
| GetSupportedMode | Use SupportedOnRenderPipelineAttribute.GetSupportedMode to find out whether a RenderPipelineAsset supports the attribute. |





### Static Methods



| Method | Description |
| --- | --- |
| IsTypeSupportedOnRenderPipeline | Use this method to determine whether a type has the SupportedOnRenderPipelineAttribute attribute and determine whether a RenderPipelineAsset type supports that attribute. |


            
