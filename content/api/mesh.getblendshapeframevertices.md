This version of Unity is unsupported.



# [Mesh](Mesh.html).GetBlendShapeFrameVertices




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

public void GetBlendShapeFrameVertices(int shapeIndex,
int frameIndex,
Vector3[] deltaVertices,
Vector3[] deltaNormals,
Vector3[] deltaTangents);






### Parameters



| Parameter | Description |
| --- | --- |
| shapeIndex | The shape index of the frame. |
| frameIndex | The frame index to get the weight from. |
| deltaVertices | Delta vertices output array for the frame being retreived. |
| deltaNormals | Delta normals output array for the frame being retreived. |
| deltaTangents | Delta tangents output array for the frame being retreived. |





### Description



Retreives `deltaVertices`, `deltaNormals` and `deltaTangents` of a blend shape frame.





`deltaVetrices`, `deltaNormals` and `deltaTangents` arrays must be of size = [Mesh.vertexCount](Mesh-vertexCount.html). Add Mesh vertices, normals or tangents to convert from frame deltas to full vectors. `deltaNormals` or `deltaTangents` may be set to null if there is no normals or tangents to be retreived for a frame.


            
