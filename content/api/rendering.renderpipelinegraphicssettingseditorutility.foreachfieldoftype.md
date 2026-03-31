This version of Unity is unsupported.



# [RenderPipelineGraphicsSettingsEditorUtility](Rendering.RenderPipelineGraphicsSettingsEditorUtility.html).ForEachFieldOfType




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

public static void ForEachFieldOfType([Rendering.IRenderPipelineResources](Rendering.IRenderPipelineResources.html) resource,
Action<T> callback,
BindingFlags flags);






### Parameters



| Parameter | Description |
| --- | --- |
| resource | The resources being inspected. |
| callback | The callback to appy on all matching fields. |
| flags | Binding flags to filter what kind of fields should be search. |





### Description



Iterate on each fields of the [IRenderPipelineGraphicsSettings](Rendering.IRenderPipelineGraphicsSettings.html) of type T and perform the given callback on them.


            
