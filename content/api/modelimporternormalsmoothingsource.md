This version of Unity is unsupported.



# ModelImporterNormalSmoothingSource





enumeration


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



Source of smoothing information for calculation of normals in [ModelImporter](ModelImporter.html).





Describes how Unity calculates whether edges have hard or smooth normals (from smoothing groups or the angle between faces). By default, Unity uses smoothing groups if they are present. If not, it uses angles.

                Additional resources: [ModelImporter.normalSmoothingSource](ModelImporter-normalSmoothingSource.html), [Mesh.normals](Mesh-normals.html).





### Properties



| Property | Description |
| --- | --- |
| PreferSmoothingGroups | Use smoothing groups if they are present in the Model file, otherwise use angle (default). |
| FromSmoothingGroups | Use smoothing groups to determine which edges are smooth and which are hard. |
| FromAngle | Use the angle between adjacent faces to determine if an edge is smooth or hard. |
| None | Do not create hard edges. |


            
