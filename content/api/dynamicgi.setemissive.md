This version of Unity is unsupported.



# [DynamicGI](DynamicGI.html).SetEmissive




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

public static void SetEmissive([Renderer](Renderer.html) renderer,
[Color](Color.html) color);






### Parameters



| Parameter | Description |
| --- | --- |
| renderer | The Renderer that should get a new color. |
| color | The emissive Color. |





### Description



Allows to set an emissive color for a given renderer quickly, without the need to render the emissive input for the entire system.





Note that a subsequent [DynamicGI.UpdateMaterials](DynamicGI.UpdateMaterials.html) call on *any* renderer within the system will clear the effects of DynamicGI.SetEmissive.

        Additional resources: [UpdateMaterials](DynamicGI.UpdateMaterials.html).


            
