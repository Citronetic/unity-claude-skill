This version of Unity is unsupported.



# [GameObject](GameObject.html).activeSelf




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




                [Switch to Manual](../Manual/class-GameObject.html)







                    public bool activeSelf;






### Description



The local active state of the GameObject. True if active, false if inactive. (Read Only)





The local active state of this GameObject, which is set using [GameObject.SetActive](GameObject.SetActive.html). A locally active GameObject may still be inactive in the scene hierarchy because a parent is not active. Use
[GameObject.activeInHierarchy](GameObject-activeInHierarchy.html) if you want to check if the GameObject is actually treated as
active in the Scene.

Additional resources: [GameObject.SetActive](GameObject.SetActive.html), [GameObject.activeInHierarchy](GameObject-activeInHierarchy.html).


            
