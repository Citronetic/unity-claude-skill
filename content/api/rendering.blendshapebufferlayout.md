This version of Unity is unsupported.



# BlendShapeBufferLayout





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



Determines the data that Unity returns when you call [Mesh.GetBlendShapeBuffer](Mesh.GetBlendShapeBuffer.html).





When you call `Mesh.GetBlendShapeBuffer`, you can access one of two buffers containing blend shape vertices. Use this value to determine which buffer to access. The default is [BlendShapeBufferLayout.PerShape](Rendering.BlendShapeBufferLayout.PerShape.html).

Additional resources: [Mesh data: blend shapes](../Manual/AnatomyofaMesh.html#blend-shapes.html), [Mesh.GetBlendShapeBuffer](Mesh.GetBlendShapeBuffer.html).





### Properties



| Property | Description |
| --- | --- |
| PerShape | Use this enum to get the blend shape data in blend shape order. |
| PerVertex | Order the data by mesh vertex. |


            
