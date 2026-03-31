This version of Unity is unsupported.



# [Material](Material.html).GetShaderPassEnabled




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

public bool GetShaderPassEnabled(string passName);






### Parameters



| Parameter | Description |
| --- | --- |
| passName | Shader pass name (case insensitive). |





### Returns



**bool**
        True if the Shader pass is enabled.





### Description



Checks whether a given Shader pass is enabled on this Material.





By default, all shader passes are enabled.
Note that this method only returns `false` if the pass has been explicitly disabled for this Material using
[SetShaderPassEnabled](Material.SetShaderPassEnabled.html). If a pass does not exist in the currently used Shader, but has not been disabled,
then the method still returns `true`.

Additional resources: [SetShaderPassEnabled](Material.SetShaderPassEnabled.html), RenderLoop, [Shader pass tags](../Manual/SL-PassTags.html).


            
