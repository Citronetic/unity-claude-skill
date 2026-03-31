This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).SetGlobalInteger




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

public void SetGlobalInteger(int nameID,
int value);






## Declaration

public void SetGlobalInteger(string name,
int value);






### Description



Adds a command to set the value of a given property for all Shaders, where the property is an integer.





When Unity executes the CommandBuffer, it sets the value of the given property for all Shaders. The effect is as the same as calling [Shader.SetGlobalInteger](Shader.SetGlobalInteger.html).

For properties that use the legacy ShaderLab type `Int`, which are internally represented as floats, use [SetGlobalInt](Rendering.CommandBuffer.SetGlobalInt.html).


            
