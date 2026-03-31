This version of Unity is unsupported.



# [Shader](Shader.html).globalRenderPipeline




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




                [Switch to Manual](../Manual/class-Shader.html)







                    public static string globalRenderPipeline;






### Description



Render pipeline currently in use.





This value is used to filter sub shaders based on the "RenderPipeline" tag. If a sub shader uses the "RenderPipeline" tag, it is used if and only if globalRenderPipeline matches the value completely. A sub shader that doesn't use the "RenderPipeline" tag will match all render pipelines. A matching sub shader is selected for all shaders when this value changes.


            
