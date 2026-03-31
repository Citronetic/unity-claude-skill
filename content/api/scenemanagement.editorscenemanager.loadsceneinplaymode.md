This version of Unity is unsupported.



# [EditorSceneManager](SceneManagement.EditorSceneManager.html).LoadSceneInPlayMode




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

public static [SceneManagement.Scene](SceneManagement.Scene.html) LoadSceneInPlayMode(string path,
[SceneManagement.LoadSceneParameters](SceneManagement.LoadSceneParameters.html) parameters);






### Parameters



| Parameter | Description |
| --- | --- |
| path | Path to Scene to load. |
| parameters | Parameters used to load the Scene LoadSceneParameters. |





### Returns



**Scene**
        Scene that is loading.





### Description



This method allows you to load a Scene during playmode in the editor, without requiring the Scene to be included in the [Build Settings](../Manual/BuildSettings.html) Scene list.





The use case for this is to emulate Asset bundles while loading scenes in play mode in the editor. When including a scene in an asset bundle, you don't add the scene to build settings. This means you can't load the scene during play mode using the normal [LoadScene](SceneManagement.SceneManager.LoadSceneAsync.html) method. Using this method instead of [LoadScene](SceneManagement.SceneManager.LoadSceneAsync.html) allows you to load the scene during play mode without requiring it to be in the Build Settings scene list. This means your code needs to detect whether the game is [running in the editor](Application-isEditor.html) or not, and use this method (LoadSceneInPlayMode) when in the editor, and [LoadScene](SceneManagement.SceneManager.LoadScene.html) when in the built version.

Note that this function behaves the same as [SceneManager.LoadScene](SceneManagement.SceneManager.LoadScene.html) meaning that the load does not happen immedately but is guarantee to complete in the next frame. This behavior also means that the Scene that is returned has its state set to Loading.


            
