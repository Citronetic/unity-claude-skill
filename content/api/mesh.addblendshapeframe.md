This version of Unity is unsupported.



# [Mesh](Mesh.html).AddBlendShapeFrame




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




                [Switch to Manual](../Manual/class-Mesh.html)










## Declaration

public void AddBlendShapeFrame(string shapeName,
float frameWeight,
Vector3[] deltaVertices,
Vector3[] deltaNormals,
Vector3[] deltaTangents);






### Parameters



| Parameter | Description |
| --- | --- |
| shapeName | Name of the blend shape to add a frame to. |
| frameWeight | Weight for the frame being added. |
| deltaVertices | Delta vertices for the frame being added. |
| deltaNormals | Delta normals for the frame being added. |
| deltaTangents | Delta tangents for the frame being added. |





### Description



Adds a new blend shape frame.





If blend shape name does not exist, then a new blend shape is created. Blend shape frames can only be added to a new blend shape, or the last blend shape. Usually there will be a single frame for a blend shape, but the range of blending [0-100%] may be split into multiple frames. Weight is assumed to be 100% when a shape only has one frame. Frame must be added in an increasing weight order for blend shapes having multiple frames. `deltaVertices`, `deltaNormals` and `deltaTangents` arrays must be of size = [Mesh.vertexCount](Mesh-vertexCount.html). Subtract Mesh vertices, normals or tangents to convert from frame full vectors to get deltas. `deltaNormals` or `deltaTangents` may be set to null if there are no normals or tangents for a frame.


            
