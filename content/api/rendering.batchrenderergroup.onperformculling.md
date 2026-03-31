This version of Unity is unsupported.



# [BatchRendererGroup](Rendering.BatchRendererGroup.html).OnPerformCulling




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

public delegate [Unity.Jobs.JobHandle](Unity.Jobs.JobHandle.html) OnPerformCulling([Rendering.BatchRendererGroup](Rendering.BatchRendererGroup.html) rendererGroup,
[Rendering.BatchCullingContext](Rendering.BatchCullingContext.html) cullingContext,
[Rendering.BatchCullingOutput](Rendering.BatchCullingOutput.html) cullingOutput,
IntPtr userContext);






### Parameters



| Parameter | Description |
| --- | --- |
| rendererGroup | The BatchRendererGroup to cull. |
| cullingContext | Provides read-only information about the culling request (like visibility culling planes) that the callback can use to determine visible instances. |
| cullingOutput | The target that the callback should write resulting draw commands. |
| userContext | An optional pointer to custom data that you can associate with the BatchRendererGroup. |





### Description



Culling callback function.





For more information, see [BatchRendererGroup](../Manual/batch-renderer-group.html).


            
