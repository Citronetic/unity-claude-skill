This version of Unity is unsupported.



# [EditorSceneManager](SceneManagement.EditorSceneManager.html).OpenPreviewScene




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

public static [SceneManagement.Scene](SceneManagement.Scene.html) OpenPreviewScene(string scenePath);






### Parameters



| Parameter | Description |
| --- | --- |
| scenePath | Scene file to open. |





### Returns



**Scene**
        The created preview Scene.





### Description



Opens a Scene Asset in a preview Scene.





You can use this function for tooling that needs to access GameObjects but where the scene should not be displayed in the Hierarchy.
Make sure to call [ClosePreviewScene](SceneManagement.EditorSceneManager.ClosePreviewScene.html) to prevent leaking scenes.

Additional resources: [NewPreviewScene](SceneManagement.EditorSceneManager.NewPreviewScene.html), [ClosePreviewScene](SceneManagement.EditorSceneManager.ClosePreviewScene.html).


              


```
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;public static class TestOpenAsPreviewScene
{
    [MenuItem("Assets/Scene Root Names")]
    static void OpenContextClickedSceneInAPreviewScene()
    {
        SceneAsset sceneAsset = Selection.activeObject as SceneAsset;
        if (sceneAsset == null)
        {
            Debug.Log("Context click on a Scene Asset file");
            return;
        }        var assetPath = AssetDatabase.GetAssetPath(sceneAsset);
        var scene = EditorSceneManager.OpenPreviewScene(assetPath);
        try
        {
            var rootGameObjects = scene.GetRootGameObjects();            Debug.Log($"Root GameObject Names (count: {rootGameObjects.Length})");
            foreach (var gameObject in rootGameObjects)
                Debug.Log(gameObject.name);
        }
        finally
        {
            EditorSceneManager.ClosePreviewScene(scene);
        }
    }
}
```


            
