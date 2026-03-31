This version of Unity is unsupported.



# [BillboardAsset](BillboardAsset.html).GetVertices




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

public Vector2[] GetVertices();






## Declaration

public void GetVertices(List<Vector2> vertices);






### Parameters



| Parameter | Description |
| --- | --- |
| vertices | The list that receives the array. |





### Description



Get the vertices of the billboard mesh.





Each vertex is a [Vector2](Vector2.html) in UV space. The second overload guarantees no memory allocation happening if the list capacity is big enough to hold the data.

Additional resources: [BillboardAsset](BillboardAsset.html), [SetVertices](BillboardAsset.SetVertices.html).


            
