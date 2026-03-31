This version of Unity is unsupported.



# [ScriptableRenderContext](Rendering.ScriptableRenderContext.html).Cull




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

public [Rendering.CullingResults](Rendering.CullingResults.html) Cull(ref [Rendering.ScriptableCullingParameters](Rendering.ScriptableCullingParameters.html) parameters);






### Parameters



| Parameter | Description |
| --- | --- |
| parameters | Parameters for culling. |





### Returns



**CullingResults**
        Culling results.





### Description



Performs culling based on the ScriptableCullingParameters typically obtained from the Camera currently being rendered.





Culling results are bound to a [ScriptableRenderContext](Rendering.ScriptableRenderContext.html) they will be used with; memory used by culling results is released once the render loop is finished..

Additional resources: [Camera.TryGetCullingParameters](Camera.TryGetCullingParameters.html).


            
