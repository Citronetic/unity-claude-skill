This version of Unity is unsupported.



# [BillboardAsset](BillboardAsset.html).GetIndices




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




                [Switch to Manual](../Manual/class-BillboardAsset.html)










## Declaration

public ushort[] GetIndices();






## Declaration

public void GetIndices(List<ushort> indices);






### Parameters



| Parameter | Description |
| --- | --- |
| indices | The list that receives the array. |





### Description



Get the indices of the billboard mesh.





Billboard meshes are always made of triangles. Specify the index of each vertex (in the vertices array) for each triangle. The second overload guarantees no memory allocation happening if the list capacity is big enough to hold the data.

Additional resources: [BillboardAsset](BillboardAsset.html), [SetIndices](BillboardAsset.SetIndices.html).


            
