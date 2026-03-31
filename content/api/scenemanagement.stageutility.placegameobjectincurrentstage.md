This version of Unity is unsupported.



# [StageUtility](SceneManagement.StageUtility.html).PlaceGameObjectInCurrentStage




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

public static void PlaceGameObjectInCurrentStage([GameObject](GameObject.html) gameObject);






### Parameters



| Parameter | Description |
| --- | --- |
| gameObject | The GameObject to be placed in the current stage. |





### Description



Place the given GameObject in the current stage being edited.





When creating new GameObjects, they are always placed in the main stage to begin with. This is because the GameObject constructor doesn’t know if it’s called by game logic which should always place objects in the main stage which is the game, or by editor logic which should normally place objects in the current stage being edited.

Call this method whenever you have created objects from editor tooling, and the objects should appear in the current stage being edited.


            
