This version of Unity is unsupported.



# [EditorSettings](EditorSettings.html).forceAssetUnloadAndGCOnSceneLoad




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












                    public static bool forceAssetUnloadAndGCOnSceneLoad;






### Description



Forces a managed heap garbage collection and unloads unused assets after loading a scene in single mode in the Editor or exiting Prefab Mode. Disabling this can improve performance if you do not rely on managed class finalizers being called at that time.


            
