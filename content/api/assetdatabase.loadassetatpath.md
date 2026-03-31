This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).LoadAssetAtPath




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

public static Object LoadAssetAtPath(string assetPath,
Type type);






### Parameters



| Parameter | Description |
| --- | --- |
| assetPath | Path of the asset to load. |
| type | Data type of the asset. |





### Returns



**Object**
        The asset matching the parameters.





### Description



Returns the first asset object of type **type** at given path **assetPath**.





Some asset files may contain multiple objects. (such as a Maya file which may contain multiple Meshes and GameObjects).
All paths are relative to the project folder, for example: "Assets/MyTextures/hello.png".

**Note:**

The **assetPath** parameter is not case sensitive.

**ALL** asset names and paths in Unity use forward slashes, even on Windows.

This returns only an asset object that is visible in the Project view. If the asset is not found `LoadAssetAtPath` returns Null.


              


```
using UnityEngine;
using UnityEditor;public class MyPlayer : MonoBehaviour
{
    [MenuItem("AssetDatabase/LoadAssetExample")]
    static void ImportExample()
    {
        Texture2D t = (Texture2D)AssetDatabase.LoadAssetAtPath("Assets/Textures/texture.jpg", typeof(Texture2D));
    }
}
```





Additional resources: [AssetDatabase.LoadMainAssetAtPath](AssetDatabase.LoadMainAssetAtPath.html), [AssetDatabase.LoadAllAssetsAtPath](AssetDatabase.LoadAllAssetsAtPath.html).


            
