This version of Unity is unsupported.



# [BatchRendererGroup](Rendering.BatchRendererGroup.html).SetPickingMaterial




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

public void SetPickingMaterial([Material](Material.html) material);






### Parameters



| Parameter | Description |
| --- | --- |
| material | Unity Material. |





### Description



Set the material that Unity uses to render object picking data using the draw commands in the Scene view.





**Note:** This function does not prevent Unity from unloading this material when you switch scenes. To prevent this, ensure that `Material.hideFlags` contains the flags [HideFlags.HideAndDontSave](HideFlags.HideAndDontSave.html). Additional resources: [BatchCullingViewType.Picking](Rendering.BatchCullingViewType.Picking.html), [BatchCullingOutputDrawCommands.drawCommandPickingInstanceIDs](Rendering.BatchCullingOutputDrawCommands-drawCommandPickingInstanceIDs.html)


            
