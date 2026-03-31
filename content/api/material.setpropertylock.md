This version of Unity is unsupported.



# [Material](Material.html).SetPropertyLock




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




                [Switch to Manual](../Manual/class-Material.html)










## Declaration

public void SetPropertyLock(string name,
bool value);






## Declaration

public void SetPropertyLock(int nameID,
bool value);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | Property name ID, use Shader.PropertyToID to get it. |
| name | Property name, e.g. "_SrcBlend". |
| value | The desired lock state. |





### Description



Sets the lock state of a property for this material.





If a property is locked by the material, any Material Variant inheriting from this Material will be unable to change the value of the property. Note that this method is Editor-only.

Additional resources: Material.GetPropertyLock, [Material.IsPropertyLockedByAncestor](Material.IsPropertyLockedByAncestor.html).


            
