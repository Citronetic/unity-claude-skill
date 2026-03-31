This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [ShaderWarmupSetup](Experimental.Rendering.ShaderWarmupSetup.html).vdecl




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












                    public VertexAttributeDescriptor[] vdecl;






### Description



The vertex data layout to use when prewarming shader variants.





For information on shader loading and prewarming, including a list of different prewarming techniques, see [Shader loading](../Manual/shader-loading.html).

On modern graphics APIs, such as DX12, Metal, and Vulkan, the graphics driver uses the vertex data layout when it creates shader progams. Use this to correctly prewarm shader variants for these graphics APIs.

Additional resources: [VertexAttributeDescriptor](Rendering.VertexAttributeDescriptor.html), [ShaderWarmup](Experimental.Rendering.ShaderWarmup.html), [Shader loading](../Manual/shader-loading.html)


            
