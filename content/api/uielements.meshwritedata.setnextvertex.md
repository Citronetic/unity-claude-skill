This version of Unity is unsupported.



# [MeshWriteData](UIElements.MeshWriteData.html).SetNextVertex




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

public void SetNextVertex([UIElements.Vertex](UIElements.Vertex.html) vertex);






### Parameters



| Parameter | Description |
| --- | --- |
| vertex | The value of the next vertex. |





### Description



Assigns the value of the next vertex of the allocated vertices list.





Used to iteratively fill the values of the allocated vertices via repeated calls to this function until all values have been provided. This way of filling vertex data is mutually exclusive with the use of SetAllVertices.
 After each invocation to this function, the internal counter for the next vertex is automatically incremented.
 When this method is called, it is not possible to use SetAllVertices to fill the vertices.

 Note that calling SetNextVertex fewer times than the allocated number of vertices will leave the remaining vertices with random values as [MeshGenerationContext.Allocate](UIElements.MeshGenerationContext.Allocate.html) does not initialize the returned data to 0 to avoid redundant work.


            
