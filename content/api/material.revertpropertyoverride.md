This version of Unity is unsupported.



# [Material](Material.html).RevertPropertyOverride




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

public void RevertPropertyOverride(string name);






## Declaration

public void RevertPropertyOverride(int nameID);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | Property name ID, use Shader.PropertyToID to get it. |
| name | Property name, e.g. "_SrcBlend". |





### Description



Removes the override on a property.





After the Editor reverts a Property override, it no longer marks that Property as overriden. That Property now inherits its value from the parent. Note that this method is Editor-only.

Additional resources: [Material.IsPropertyOverriden](Material.IsPropertyOverriden.html), [Material.ApplyPropertyOverride](Material.ApplyPropertyOverride.html).


            
