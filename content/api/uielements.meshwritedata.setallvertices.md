This version of Unity is unsupported.



# [MeshWriteData](UIElements.MeshWriteData.html).SetAllVertices




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

public void SetAllVertices(Vertex[] vertices);






### Parameters



| Parameter | Description |
| --- | --- |
| vertices | The array of vertices to copy from. The length of the array must match the allocated vertex count. |





### Description



Fills the values of the allocated vertices with values copied directly from an array.
 When this method is called, it is not possible to use SetNextVertex to fill the allocated vertices array.





When this method is called, it is not possible to use SetNextVertex to fill the vertices.




---








## Declaration

public void SetAllVertices(NativeSlice<Vertex> vertices);






### Parameters



| Parameter | Description |
| --- | --- |
| vertices | The array of vertices to copy from. The length of the array must match the allocated vertex count. |





### Description



Fills the values of the allocated vertices with values copied directly from an array.
 When this method is called, it is not possible to use SetNextVertex to fill the allocated vertices array.





When this method is called, it is not possible to use SetNextVertex to fill the vertices.


            
