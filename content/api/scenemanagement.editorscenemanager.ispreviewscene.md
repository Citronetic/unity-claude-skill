This version of Unity is unsupported.



# [EditorSceneManager](SceneManagement.EditorSceneManager.html).IsPreviewScene




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

public static bool IsPreviewScene([SceneManagement.Scene](SceneManagement.Scene.html) scene);






### Parameters



| Parameter | Description |
| --- | --- |
| scene | The scene to check. |





### Returns



**bool**
        Returns true if the scene is a preview scene.





### Description



Checks whether a scene is a preview scene.





A preview scene is an Editor-only scene that isn't displayed in the Hierarchy window. You can use preview scenes for tooling that needs to access GameObjects but where the scene shouldn't be displayed in the Hierarchy. Examples of preview scenes are the preview area in the bottom of the Inspector, and the scene used when editing a prefab in Prefab Mode.


            
