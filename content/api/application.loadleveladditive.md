This version of Unity is unsupported.


                  **Method group is Obsolete**





# [Application](Application.html).LoadLevelAdditive




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













                        **Obsolete**
                        Use SceneManager.LoadScene.




## Declaration

public static void LoadLevelAdditive(int index);




                        **Obsolete**
                        Use SceneManager.LoadScene.




## Declaration

public static void LoadLevelAdditive(string name);






### Description



Loads a level additively.





Unlike [LoadLevel](Application.LoadLevel.html), LoadLevelAdditive does not destroy objects in the current level. Objects from the new
level are added to the current Scene. This is useful for creating continuous virtual worlds, where more
content is loaded in as you walk through the environment.

LoadLevelAdditive adds new objects in the beginning of the next frame at the Inititialization stage prior to the first [MonoBehaviour.FixedUpdate](MonoBehaviour.FixedUpdate.html) call (refer to [Order of execution for event functions](../Manual/execution-order.html)).

Additional resources: [AsyncOperation](AsyncOperation.html), [Application.backgroundLoadingPriority](Application-backgroundLoadingPriority.html), Application.LoadLevelAdditiveAsync, Application.LoadLevel, Application.LoadLevelAsync.


            
