This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# GraphicsState





struct in
          UnityEngine.Experimental.Rendering



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



A graphics state identifies a specific rendering configuration.





Modern graphics APIs (i.e. Metal, D3D12, Vulkan) use both the active shader variant and rendering configuration to create the accurate GPU representation of a shader.





### Properties



| Property | Description |
| --- | --- |
| attachments | Array of color attachments used in this rendering configuration. |
| baseShadingRate | The pipeline fragment shading rate. |
| depthAttachmentIndex | The index of the attachment to be used as the depth/stencil buffer for this rendering configuration. |
| depthBias | The global depth bias value for this rendering configuration. |
| forceCullMode | The forced cull mode in this rendering configuration. |
| invertCulling | Flag indicating if backface culling is inverted in this rendering configuration. |
| invertProjection | Flag indicating if the projection matrix is inverted in this rendering configuration. |
| multiviewCount | The number of VR views used in this rendering configuration. |
| negativeScale | Flag indicating if the mesh has inverted scale in this rendering configuration. |
| renderState | The render state used in this rendering configuration. |
| sampleCount | The number of samples per pixel in this rendering configuration. |
| shadingRateCombinerFragment | The second combiner operation between the result of the first combiner operation and the attachment's shading rate. |
| shadingRateCombinerPrimitive | The first combiner operation between the pipeline fragment shading rate and the primitive fragment shading rate. |
| shadingRateIndex | Index of attachment used as shading rate image. |
| slopeDepthBias | The global slope depth bias value for this rendering configuration. |
| subPasses | Array containing information of each subpass. |
| subPassIndex | Index of the active subpass in this rendering configuration. |
| topology | The topology of the Mesh, e.g: Triangles, Lines, Quads, Points, etc. used in this rendering configuration. |
| vertexAttributes | Array containing information of vertex attributes. |
| wireframe | Is wireframe mode enabled for this rendering configuration. |


            
