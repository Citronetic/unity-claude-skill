This version of Unity is unsupported.



# [HandleUtility](HandleUtility.html).ResolvePickingWithWorldPositionCallback




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

public delegate Object ResolvePickingWithWorldPositionCallback(int localPickingIndex,
[Vector3](Vector3.html) worldPos,
float depth);






### Parameters



| Parameter | Description |
| --- | --- |
| localPickingIndex | The 0-based index that specifies what picking index was selected. |
| worldPos | The world space position where the picking occurred. |
| depth | The raw depth value read from the picking render texture. |





### Description



The delegate type to return from [RenderPickingCallback](HandleUtility.RenderPickingCallback.html) through the [RenderPickingResult.resolverWithWorldPos](RenderPickingResult-resolverWithWorldPos.html) member, with the additional world space position and depth information of where the click occurred.





Additional resources: [RenderPickingResult](RenderPickingResult.html).


            
