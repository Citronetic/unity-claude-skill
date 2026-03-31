This version of Unity is unsupported.



# SpriteDataAccessExtensions





class in
          UnityEngine.U2D



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



A list of methods designed for reading and writing to the rich internal data of a Sprite.





It is now possible to read and write to all the channels of the VertexAttribute, BoneWeight, BindPose and the SpriteBones of a Sprite.





### Static Methods



| Method | Description |
| --- | --- |
| GetBindPoses | Returns an array of BindPoses. |
| GetBones | Returns a list of SpriteBone in this Sprite. |
| GetIndices | Returns a list of indices. This is the same as Sprite.triangle. |
| GetVertexAttribute | Retrieves a strided accessor to the internal vertex attributes. |
| GetVertexCount | Returns the number of vertices in this Sprite. |
| HasVertexAttribute | Checks if a specific channel exists for this Sprite. |
| SetBindPoses | Sets the bind poses for this Sprite. |
| SetBones | Sets the SpriteBones for this Sprite. |
| SetIndices | Set the indices for this Sprite. This is the same as Sprite.triangle. |
| SetVertexAttribute | Sets a specific channel of the VertexAttribute. |
| SetVertexCount | Sets the vertex count. This resizes the internal buffer. It also preserves any configurations of VertexAttributes. |


            
