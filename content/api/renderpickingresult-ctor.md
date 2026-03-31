This version of Unity is unsupported.



# RenderPickingResult Constructor




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

public RenderPickingResult(int renderedPickingIndexCount,
[HandleUtility.ResolvePickingCallback](HandleUtility.ResolvePickingCallback.html) resolver);






## Declaration

public RenderPickingResult(int renderedPickingIndexCount,
[HandleUtility.ResolvePickingWithWorldPositionCallback](HandleUtility.ResolvePickingWithWorldPositionCallback.html) resolver);






### Parameters



| Parameter | Description |
| --- | --- |
| renderedPickingIndexCount | The number of picking indices used. |
| resolver | The callback to invoke for resolving a picking index to a GameObject reference. This callback can be provided either as a ResolvePickingCallback or a ResolvePickingWithWorldPositionCallback based on whether you need the information of the world space position or the depth value for where the picking occurred. |





### Description



Constructs a `RenderPickingResult` value.





Additional resources: [RenderPickingResult](RenderPickingResult.html).


            
