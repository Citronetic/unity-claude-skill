This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).LoadAllAssetsAtPath




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

public static Object[] LoadAllAssetsAtPath(string assetPath);






### Parameters



| Parameter | Description |
| --- | --- |
| assetPath | Filesystem path to the asset. |





### Description



Returns an array of all Assets at `assetPath`.





Some Asset files may contain multiple sub Assets (such as a Maya file which may contain multiple Meshes and GameObjects).

All paths are relative to the project folder, for example: "Assets/MyTextures/hello.png".

This function returns the [main Asset](AssetDatabase.LoadMainAssetAtPath.html) and all [sub Assets](AssetDatabase.LoadAllAssetRepresentationsAtPath.html) at a given path, including those hidden in the Project view.

**Note**: The main asset is not guaranteed to be at index 0 in the array

Additional resources: [AssetDatabase.LoadMainAssetAtPath](AssetDatabase.LoadMainAssetAtPath.html), [AssetDatabase.LoadAllAssetRepresentationsAtPath](AssetDatabase.LoadAllAssetRepresentationsAtPath.html), [AssetDatabase.AddObjectToAsset](AssetDatabase.AddObjectToAsset.html), [HideFlags.HideInHierarchy](HideFlags.HideInHierarchy.html), [EditorUtility.UnloadUnusedAssetsImmediate](EditorUtility.UnloadUnusedAssetsImmediate.html).


              


```
using UnityEngine;
using UnityEditor;public class Example : MonoBehaviour
{
    [MenuItem("AssetDatabase/LoadAllAssetsAtPath")]
    private static void PrintAssets()
    {
        Object[] data = AssetDatabase.LoadAllAssetsAtPath("Assets/MySpriteTexture.png");        Debug.Log(data.Length + " Assets");        foreach (Object o in data)
        {
            Debug.Log(o);
        }        // outputs:
        //  5 Assets
        //  MySpriteTexture (UnityEngine.Texture2D)
        //  MyTexture_0 (UnityEngine.Sprite)
        //  MyTexture_1 (UnityEngine.Sprite)
        //  MyTexture_2 (UnityEngine.Sprite)
        //  MyTexture_3 (UnityEngine.Sprite)
    }
}
```





Additional resources: [AssetDatabase.LoadAssetAtPath](AssetDatabase.LoadAssetAtPath.html).


            
