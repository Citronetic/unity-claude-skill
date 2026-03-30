This version of Unity is unsupported.


                  **Method group is Obsolete**





# [Application](Application.html).UnloadLevel




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
                        Use SceneManager.UnloadScene.




## Declaration

public static bool UnloadLevel(int index);




                        **Obsolete**
                        Use SceneManager.UnloadScene.




## Declaration

public static bool UnloadLevel(string scenePath);






### Parameters



| Parameter | Description |
| --- | --- |
| index | Index of the Scene in the PlayerSettings to unload. |
| scenePath | Name of the Scene to Unload. |





### Returns



**bool**
        Returns true, if the Scene is unloaded.





### Description



Unloads all GameObject associated with the given Scene. Assets are currently not unloaded to free up asset memory call `Resources.UnloadAllUnusedAssets`.


            
