This version of Unity is unsupported.



# [BlendTree](Animations.BlendTree.html).AddChild




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

public void AddChild([Motion](Motion.html) motion);






## Declaration

public void AddChild([Motion](Motion.html) motion,
[Vector2](Vector2.html) position);






## Declaration

public void AddChild([Motion](Motion.html) motion,
float threshold);






### Parameters



| Parameter | Description |
| --- | --- |
| motion | The motion to add as child. |
| position | The position of the child. When using 2D blend trees. |
| threshold | The threshold of the child. When using 1D blend trees. |





### Description



Utility function to add a child motion to a blend trees.





This function pushes an Undo operation.


            
