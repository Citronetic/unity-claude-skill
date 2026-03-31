This version of Unity is unsupported.



# [Material](Material.html).IsPropertyOverriden




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

public bool IsPropertyOverriden(string name);






## Declaration

public bool IsPropertyOverriden(int nameID);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | Property name ID, use Shader.PropertyToID to get it. |
| name | Property name, e.g. "_SrcBlend". |





### Returns



**bool**
        Returns true if the property you pass in is overriden by this material. Otherwise, returns false.





### Description



Checks whether a property is overriden by this material.





This method is Editor-only.

Additional resources: [Material.ApplyPropertyOverride](Material.ApplyPropertyOverride.html), [Material.RevertPropertyOverride](Material.RevertPropertyOverride.html).


            
