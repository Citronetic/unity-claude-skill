This version of Unity is unsupported.



# [Vertex](UIElements.Vertex.html).position




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












                    public [Vector3](Vector3.html) position;






### Description



Describes the vertex's position.





Note this value is a [Vector3](Vector3.html). If the vertex represents flat UI geometry, set the z component of this position field to [Vertex.nearZ](UIElements.Vertex-nearZ.html). The position value is relative to the [VisualElement](UIElements.VisualElement.html)'s local rectangle top-left corner. The coordinate system is X+ to the right, and Y+ goes down. The unit of position is [VisualElement](UIElements.VisualElement.html) points. When the vertices are indexed, the triangles described must follow clock-wise winding order given that Y+ goes down.


            
