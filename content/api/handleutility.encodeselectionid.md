This version of Unity is unsupported.



# [HandleUtility](HandleUtility.html).EncodeSelectionId




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

public static [Vector4](Vector4.html) EncodeSelectionId(int pickingIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| pickingIndex | The picking index to encode. For example, a picking index passed from RenderPickingArgs.pickingIndex). |





### Returns



**Vector4**
        The Vector4 `selectionId` value used for rendering.





### Description



Translates a single integer picking index into a Vector4 `selectionId` value. The Vector4 selectionId is used to render the picking render textures during picking rendering.





Additional resources: [HandleUtility.DecodeSelectionId](HandleUtility.DecodeSelectionId.html), [HandleUtility.RegisterRenderPickingCallback](HandleUtility.RegisterRenderPickingCallback.html).


            
