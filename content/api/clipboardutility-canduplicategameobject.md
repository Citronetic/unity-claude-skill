This version of Unity is unsupported.



# [ClipboardUtility](ClipboardUtility.html).canDuplicateGameObject




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












                    public static Func<GameObject,bool> canDuplicateGameObject;






### Description



Optional filtering functions invoked to determine if a GameObject can be duplicated before any action is taken.





All registered delegates of canDuplicateGameObject will be evaluated and must return true for a GameObject to be duplicated. [Selection.gameObjects](Selection-gameObjects.html) will be updated with the GameObjects that successfully passed the filtering functions.

Subscribe to the [rejectedGameObjects](ClipboardUtility-rejectedGameObjects.html) event to receive a callback, providing an array of GameObjects that failed one or more of the filtering functions.


            
