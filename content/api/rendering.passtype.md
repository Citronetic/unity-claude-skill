This version of Unity is unsupported.



# PassType





enumeration


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



















### Description



Shader pass type for Unity's lighting pipeline.





This corresponds to "LightMode" tag in the shader pass, see [Pass tags](../Manual/SL-PassTags.html).





### Properties



| Property | Description |
| --- | --- |
| Normal | Regular shader pass that does not interact with lighting. |
| Vertex | Legacy vertex-lit shader pass. |
| VertexLM | Legacy vertex-lit shader pass, with mobile lightmaps. |
| ForwardBase | Forward rendering base pass. |
| ForwardAdd | Forward rendering additive pixel light pass. |
| ShadowCaster | Shadow caster & depth texure shader pass. |
| Deferred | Deferred Shading shader pass. |
| Meta | Shader pass used to generate the albedo and emissive values used as input to lightmapping. |
| MotionVectors | Motion vector render pass. |
| ScriptableRenderPipeline | Custom scriptable pipeline. |
| ScriptableRenderPipelineDefaultUnlit | Custom scriptable pipeline when lightmode is set to default unlit or no light mode is set. |
| GrabPass | Grab Pass. Use this when you want to detect the type of the Grab Pass compared to other passes using the Normal type. Otherwise use Normal. |


            
