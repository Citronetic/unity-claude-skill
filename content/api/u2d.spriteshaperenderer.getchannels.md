This version of Unity is unsupported.



# [SpriteShapeRenderer](U2D.SpriteShapeRenderer.html).GetChannels




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















## Declaration

public void GetChannels(int dataSize,
out NativeArray<ushort> indices,
out NativeSlice<Vector3> vertices,
out NativeSlice<Vector2> texcoords);






## Declaration

public void GetChannels(int dataSize,
out NativeArray<ushort> indices,
out NativeSlice<Vector3> vertices,
out NativeSlice<Vector2> texcoords,
out NativeSlice<Vector4> tangents);






## Declaration

public void GetChannels(int dataSize,
out NativeArray<ushort> indices,
out NativeSlice<Vector3> vertices,
out NativeSlice<Vector2> texcoords,
out NativeSlice<Vector4> tangents,
out NativeSlice<Vector3> normals);






### Parameters



| Parameter | Description |
| --- | --- |
| dataSize | Size to be reserved for the NativeArray. |
| indices | NativeArray of indices. |
| vertices | NativeSlice of vertices. |
| texcoords | NativeSlice of texture coordinate for channel 0. |
| tangents | NativeSlice of tangents. |
| normals | NativeSlice of normals. |





### Description



Get/Set an array of mesh data of SpriteShapeRenderer.


            
