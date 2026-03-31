This version of Unity is unsupported.



# [RayTracingGeometryInstanceConfig](Rendering.RayTracingGeometryInstanceConfig.html).vertexAttributes




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












                    public VertexAttributeDescriptor[] vertexAttributes;






### Description



An array of vertex attributes that define the vertex format of [vertexBuffer](Rendering.RayTracingGeometryInstanceConfig-vertexBuffer.html).





The Position attribute is mandatory for building an acceleration structure. You can access other vertex attributes in shader code using helper functions from **UnityRayTracingMeshUtils.cginc** header.


              


```
// Defining a vertex format that contains the position, the normal and texture coordinates attributes.
VertexAttributeDescriptor[] vertexDescs = new VertexAttributeDescriptor[3];
vertexDescs[0] = new VertexAttributeDescriptor(VertexAttribute.Position, VertexAttributeFormat.Float32, 3, 0);
vertexDescs[1] = new VertexAttributeDescriptor(VertexAttribute.Normal, VertexAttributeFormat.Float32, 3, 0);
vertexDescs[2] = new VertexAttributeDescriptor(VertexAttribute.TexCoord0, VertexAttributeFormat.Float32, 2, 0);
```





Unity supports the following Position attribute data formats for building acceleration structures:



          - [VertexAttributeFormat.Float32](Rendering.VertexAttributeFormat.Float32.html)

          - [VertexAttributeFormat.Float16](Rendering.VertexAttributeFormat.Float16.html)

          - [VertexAttributeFormat.SNorm16](Rendering.VertexAttributeFormat.SNorm16.html)





The Position attribute must be part of vertex buffer stream 0.

Additional resources: [VertexAttributeDescriptor](Rendering.VertexAttributeDescriptor.html).


            
