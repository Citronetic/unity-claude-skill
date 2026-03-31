This version of Unity is unsupported.



# [Mesh](Mesh.html).GetColors




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

public void GetColors(List<Color> colors);






## Declaration

public void GetColors(List<Color32> colors);






### Parameters



| Parameter | Description |
| --- | --- |
| colors | A list of vertex colors to populate. |





### Description



Gets the vertex colors of the Mesh.





The color at each index corresponds to the vertex with the same index.

Use this method instead of [colors](Mesh-colors.html) or [colors32](Mesh-colors32.html) if you control the life cycle of the list passed in and you want to avoid allocating a new array with every access.

Additional resources: [AcquireReadOnlyMeshData](Mesh.AcquireReadOnlyMeshData.html) function.


            
