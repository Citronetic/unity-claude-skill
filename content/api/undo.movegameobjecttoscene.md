This version of Unity is unsupported.



# [Undo](Undo.html).MoveGameObjectToScene




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

public static void MoveGameObjectToScene([GameObject](GameObject.html) go,
[SceneManagement.Scene](SceneManagement.Scene.html) scene,
string name);






### Parameters



| Parameter | Description |
| --- | --- |
| go | GameObject to move. |
| scene | Scene to move the GameObject into. |
| name | Name of the undo action. |





### Description



Move a GameObject from its current Scene to a new Scene.
It is required that the GameObject is at the root of its current Scene.


            
