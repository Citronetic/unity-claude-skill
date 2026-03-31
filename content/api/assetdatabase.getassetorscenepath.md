This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).GetAssetOrScenePath




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

public static string GetAssetOrScenePath([Object](Object.html) assetObject);






### Description



Returns the path name relative to the project folder where the asset is stored.





All paths are relative to the project folder, for example: "Assets/MyTextures/hello.png"
When a game object is part of a Scene, the Scene path is returned.


              


```
using UnityEditor;
using UnityEditor.SceneManagement;
using UnityEngine;
using UnityEngine.SceneManagement;public class AssetDatabaseExamples : MonoBehaviour
{
    [MenuItem("AssetDatabase/Get Asset Or Scene Path Example")]
    static void GetAssetOrScenePathExample()
    {
        var asset = AssetDatabase.LoadAssetAtPath("Assets/Prefabs/Cube123.prefab", typeof(GameObject));
        //This will output Assets/Prefabs/Cube123.prefab
        Debug.Log(AssetDatabase.GetAssetOrScenePath(asset));
        var clone = Instantiate(asset);
        EditorSceneManager.SaveScene(SceneManager.GetActiveScene());
        //This will output Assets/Scenes/SampleScene.unity
        Debug.Log(AssetDatabase.GetAssetOrScenePath(clone));
    }
}
```


            
