This version of Unity is unsupported.



# [PrefabUtility](PrefabUtility.html).LoadPrefabContentsIntoPreviewScene




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

public static void LoadPrefabContentsIntoPreviewScene(string prefabPath,
[SceneManagement.Scene](SceneManagement.Scene.html) scene);






## Declaration

public static void LoadPrefabContentsIntoPreviewScene(string prefabPath,
[SceneManagement.Scene](SceneManagement.Scene.html) scene,
out [GameObject](GameObject.html) rootGameObject);






### Parameters



| Parameter | Description |
| --- | --- |
| scene | The Scene to load the contents into. |
| prefabPath | The path of the Prefab Asset to load the contents of. |
| rootGameObject | The root GameObject of the loaded Prefab Asset or null if the Prefab couldn't be loaded. |





### Description



Loads a Prefab Asset at a given path into a given preview scene.





You can use this to get the content of the Prefab and modify it directly instead of going through an instance of the Prefab. This is useful for batch operations.

Once you have modified the Prefab you have to write it back using [SaveAsPrefabAsset](PrefabUtility.SaveAsPrefabAsset.html). After that you can either reuse your preview scene for other purposes, or close the preview scene with [EditorSceneManager.CloseScene](SceneManagement.EditorSceneManager.CloseScene.html).


            
