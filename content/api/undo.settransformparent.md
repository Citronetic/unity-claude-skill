This version of Unity is unsupported.



# [Undo](Undo.html).SetTransformParent




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

public static void SetTransformParent([Transform](Transform.html) transform,
[Transform](Transform.html) newParent,
string name);






### Parameters



| Parameter | Description |
| --- | --- |
| transform | The Transform component whose parent is to be changed. |
| newParent | The parent Transform to be assigned. |
| name | The name of this action, to be stored in the Undo history buffer. |





### Description



Sets the parent of transform to the new parent and records an undo operation.





This is equivalent to calling transform.parent = newParent, but it additionally records the undo operation.


            
