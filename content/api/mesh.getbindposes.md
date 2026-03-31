This version of Unity is unsupported.



# [Mesh](Mesh.html).GetBindposes




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

public NativeArray<Matrix4x4> GetBindposes();






### Returns



**NativeArray<Matrix4x4>**
        The array of bind poses belonging to the Mesh.





### Description



Gets the bind poses of the Mesh.





The bind pose at each index corresponds to the bone with the same index. Additional resources: [SkinnedMeshRenderer.bones](SkinnedMeshRenderer-bones.html).




---








## Declaration

public void GetBindposes(List<Matrix4x4> bindposes);






### Parameters



| Parameter | Description |
| --- | --- |
| bindposes | A list of bind poses to populate. |





### Description



Gets the bind poses of the Mesh.





The bind pose at each index corresponds to the bone with the same index. Additional resources: [SkinnedMeshRenderer.bones](SkinnedMeshRenderer-bones.html).

Use this method instead of [bindposes](Mesh-bindposes.html) if you control the life cycle of the list passed in and you want to avoid allocating a new array with every access.


            
