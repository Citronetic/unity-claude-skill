This version of Unity is unsupported.



# [EditorSceneManager](SceneManagement.EditorSceneManager.html).NewPreviewScene




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

public static [SceneManagement.Scene](SceneManagement.Scene.html) NewPreviewScene();






### Returns



**Scene**
        The new preview scene.





### Description



Creates a new preview scene.





A preview scene is an Editor-only scene that isn't displayed in the Hierarchy window. You can use this method for tooling that needs to access GameObjects but where the scene shouldn't be displayed in the Hierarchy. Examples of preview scenes are the preview area in the bottom of the Inspector, and the scene used when editing a prefab in Prefab Mode.

Any object added to a preview scene is only rendered in that scene. You must destroy the preview scene using [ClosePreviewScene](SceneManagement.EditorSceneManager.ClosePreviewScene.html) to prevent leaking scenes.

Additional resources: [ClosePreviewScene](SceneManagement.EditorSceneManager.ClosePreviewScene.html), [OpenPreviewScene](SceneManagement.EditorSceneManager.OpenPreviewScene.html).


            
