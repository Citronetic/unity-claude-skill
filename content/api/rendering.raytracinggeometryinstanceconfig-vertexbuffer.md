This version of Unity is unsupported.



# [RayTracingGeometryInstanceConfig](Rendering.RayTracingGeometryInstanceConfig.html).vertexBuffer




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












                    public [GraphicsBuffer](GraphicsBuffer.html) vertexBuffer;






### Description



The vertex buffer that Unity uses to define the ray tracing geometry instance.





Define the vertex buffer format by specifiying a list of vertex attributes in [vertexAttributes](Rendering.RayTracingGeometryInstanceConfig-vertexAttributes.html) array.

You can use a common vertex buffer and index buffer to define multiple geometry instances with different properties (for example different materials).

Use `GraphicsBuffer.Target.Vertex | GraphicsBuffer.Target.Raw` for the [Target](GraphicsBuffer.Target.html) parameter when creating the vertex buffer from scripts.


            
