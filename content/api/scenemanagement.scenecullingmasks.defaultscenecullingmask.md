This version of Unity is unsupported.



# [SceneCullingMasks](SceneManagement.SceneCullingMasks.html).DefaultSceneCullingMask




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












                    public static ulong DefaultSceneCullingMask;






### Description



Specifies the default culling mask for a Scene.  Use the bits from this Scene culling mask for objects that you want to render in both in the Game view and the Scene view.





All normal Scenes start with this culling mask by default. The Scenes created through [EditorSceneManager.NewPreviewScene](SceneManagement.EditorSceneManager.NewPreviewScene.html) get their own unique Scene culling mask which is why the GameObjects in those Scenes do not show up in the Scene view and Game view by default.


            
