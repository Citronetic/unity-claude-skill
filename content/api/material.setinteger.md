This version of Unity is unsupported.



# [Material](Material.html).SetInteger




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

public void SetInteger(string name,
int value);






## Declaration

public void SetInteger(int nameID,
int value);






### Parameters



| Parameter | Description |
| --- | --- |
| nameID | Property name ID, use Shader.PropertyToID to get it. |
| value | Integer value to set. |
| name | Property name, e.g. "_SrcBlend". |





### Description



Sets a named integer value.





When setting values on materials using the Standard Shader, you should be aware that you may need to use [EnableKeyword](Material.EnableKeyword.html) to enable features of the shader that were not previously in use. For more detail, read [Accessing Materials via Script](../Manual/MaterialsAccessingViaScript.html).


            
