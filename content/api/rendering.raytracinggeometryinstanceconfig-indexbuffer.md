This version of Unity is unsupported.



# [RayTracingGeometryInstanceConfig](Rendering.RayTracingGeometryInstanceConfig.html).indexBuffer




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












                    public [GraphicsBuffer](GraphicsBuffer.html) indexBuffer;






### Description



The index buffer that Unity uses to define the ray tracing geometry instance.





You can use a common index buffer and vertex buffer to define multiple geometry instances with different properties (for example different materials).

Use `GraphicsBuffer.Target.Index | GraphicsBuffer.Target.Raw` for the [Target](GraphicsBuffer.Target.html) parameter when creating the index buffer from scripts.


            
