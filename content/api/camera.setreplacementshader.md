This version of Unity is unsupported.



# [Camera](Camera.html).SetReplacementShader




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




                [Switch to Manual](../Manual/class-Camera.html)










## Declaration

public void SetReplacementShader([Shader](Shader.html) shader,
string replacementTag);






### Description



Make the camera render with shader replacement.





See [Rendering with Replaced Shaders](../Manual/SL-ShaderReplacement.html) page for details.

If the replacementTag argument is not in use, pass an empty string as the value.

After calling this function, camera will render its view with shader replacement. Call
[ResetReplacementShader](Camera.ResetReplacementShader.html) to reset it back to normal rendering.

Additional resources: [Rendering with Replaced Shaders](../Manual/SL-ShaderReplacement.html), [ResetReplacementShader](Camera.ResetReplacementShader.html), [RenderWithShader](Camera.RenderWithShader.html).


            
