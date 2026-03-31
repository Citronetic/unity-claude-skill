This version of Unity is unsupported.



# [MeshTopology](MeshTopology.html).Quads




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



Connects indices in groups of four to form quadrilateral faces.





Use the `Quads` topology to construct meshes made of four-sided polygons, where each quad connects four vertices to create a rectangular shape.

Unity often emulates quad topology, which means it converts quad meshes to triangle topology during processing. For better performance and simplicity, use triangle topology directly. Use quads only when you need to, for example if you work with tessellation shaders that operate on quad patches.


            
