This version of Unity is unsupported.



# [Renderer](Renderer.html).GetPropertyBlock




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

public void GetPropertyBlock([MaterialPropertyBlock](MaterialPropertyBlock.html) properties);






## Declaration

public void GetPropertyBlock([MaterialPropertyBlock](MaterialPropertyBlock.html) properties,
int materialIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| properties | Material parameters to retrieve. |
| materialIndex | The index of the Material you want to get overridden parameters from. The index ranges from 0 to Renderer.sharedMaterials.Length-1. |





### Description



Get per-Renderer or per-Material property block.





The retrieved properties are stored in the property block passed in through "properties". If no properties are set, the property block is cleared. In either case the property block you pass in is completely overwritten.

If you provide a Material index, only the parameters of that Material are retrieved.

        Additional resources: [MaterialPropertyBlock](MaterialPropertyBlock.html), [SetPropertyBlock](Renderer.SetPropertyBlock.html).


            
