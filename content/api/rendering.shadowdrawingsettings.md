This version of Unity is unsupported.



# ShadowDrawingSettings





struct in
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



Settings for ScriptableRenderContext.DrawShadows.





This structure describes which shadow light to render ([lightIndex](Rendering.ShadowDrawingSettings-lightIndex.html)) with what split settings ([splitData](Rendering.ShadowDrawingSettings-splitData.html)).

Additional resources: [ShadowSplitData](Rendering.ShadowSplitData.html).





### Properties



| Property | Description |
| --- | --- |
| batchLayerMask | Unity renders objects whose BatchFilterSettings.batchLayer value is enabled in this bit mask. |
| cullingResults | Culling results to use. |
| lightIndex | The index of the shadow-casting light to be rendered. |
| objectsFilter | Specifies the filter Unity applies to GameObjects that it renders in the shadow pass. |
| splitIndex | The split index of the shadow-casting light to be rendered. With the default value of -1, Unity increments the split index from 0 for shadow renderer lists that are created consecutively for the same light index with matching filtering and masking settings. |
| useRenderingLayerMaskTest | Set this to true to make Unity filter Renderers during shadow rendering. Unity filters Renderers based on the Rendering Layer Mask of the Renderer itself, and the Rendering Layer Mask of each shadow casting Light. |





### Constructors



| Constructor | Description |
| --- | --- |
| ShadowDrawingSettings | Create a shadow settings object. |


            
