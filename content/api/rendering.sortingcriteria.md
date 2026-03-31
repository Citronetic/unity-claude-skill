This version of Unity is unsupported.



# SortingCriteria





enumeration


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



How to sort objects during rendering.





Control the way Unity sorts objects before drawing them by using and combining these flags.

The basic flags are:



          - [SortingLayer](Rendering.SortingCriteria.SortingLayer.html),

          - [RenderQueue](Rendering.SortingCriteria.RenderQueue.html),

          - [BackToFront](Rendering.SortingCriteria.BackToFront.html),

          - [QuantizedFrontToBack](Rendering.SortingCriteria.QuantizedFrontToBack.html),

          - [OptimizeStateChanges](Rendering.SortingCriteria.OptimizeStateChanges.html),

          - [CanvasOrder](Rendering.SortingCriteria.CanvasOrder.html).





Multiple flags, when combined, are applied in the above order.

Some commonly-used sorting combinations are provided for convenience. Use [CommonOpaque](Rendering.SortingCriteria.CommonOpaque.html) for opaque objects. This combination of flags includes optimization for reducing draw state changes and draws roughly front-to-back to reduce drawing over the same pixels many times. Use [CommonTransparent](Rendering.SortingCriteria.CommonTransparent.html) for transparent objects, which need to be sorted from back to front before being drawn for them all to be visible.

Additional resources: DrawingSettings.sorting, ScriptableRenderContext.DrawRenderers.





### Properties



| Property | Description |
| --- | --- |
| None | Do not sort objects. |
| SortingLayer | Sort by renderer sorting layer. |
| RenderQueue | Sort by material render queue. |
| BackToFront | Sort objects back to front. |
| QuantizedFrontToBack | Sort objects in rough front-to-back buckets. |
| OptimizeStateChanges | Sort objects to reduce draw state changes. |
| CanvasOrder | Sort renderers taking canvas order into account. |
| RendererPriority | Sorts objects by renderer priority. |
| CommonOpaque | Typical sorting for opaque objects. |
| CommonTransparent | Typical sorting for transparencies. |


            
