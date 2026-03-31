This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).SetGlobalFloat




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

public void SetGlobalFloat(string name,
float value);






## Declaration

public void SetGlobalFloat(int nameID,
float value);






### Description



Add a "set global shader float property" command.





When the command buffer will be executed, a global shader float property will be set at this point. The effect is as if [Shader.SetGlobalFloat](Shader.SetGlobalFloat.html) was called.


            
