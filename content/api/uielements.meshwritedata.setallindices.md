This version of Unity is unsupported.



# [MeshWriteData](UIElements.MeshWriteData.html).SetAllIndices




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

public void SetAllIndices(ushort[] indices);






### Parameters



| Parameter | Description |
| --- | --- |
| indices | The array of indices to copy from. The length of the array must match the allocated index count. |





### Description



Fills the values of the allocated indices with values copied directly from an array. Each 3 consecutive indices form a single triangle.





When this method is called, it is not possible to use SetNextIndex to fill the indices.




---








## Declaration

public void SetAllIndices(NativeSlice<ushort> indices);






### Parameters



| Parameter | Description |
| --- | --- |
| indices | The array of indices to copy from. The length of the array must match the allocated index count. |





### Description



Fills the values of the allocated indices with values copied directly from an array. Each 3 consecutive indices form a single triangle.





When this method is called, it is not possible to use SetNextIndex to fill the indices.


            
