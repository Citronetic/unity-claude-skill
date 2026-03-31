This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).LoadAllAssetRepresentationsAtPath




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

public static Object[] LoadAllAssetRepresentationsAtPath(string assetPath);






### Description



Returns all sub Assets at `assetPath`.





This function only returns sub Assets that are visible in the Project view.

All paths are relative to the project folder, for example: "Assets/MyTextures/hello.png"

**Note**: Sub Assets can be added explicitly via [AssetDatabase.AddObjectToAsset](AssetDatabase.AddObjectToAsset.html)

Additional resources: [AssetDatabase.LoadMainAssetAtPath](AssetDatabase.LoadMainAssetAtPath.html), [AssetDatabase.LoadAllAssetsAtPath](AssetDatabase.LoadAllAssetsAtPath.html), [HideFlags.HideInHierarchy](HideFlags.HideInHierarchy.html).


              


```
using UnityEngine;
using UnityEditor;public class Example : MonoBehaviour
{
    [MenuItem("AssetDatabase/LoadAllAssetRepresentationsAtPath")]
    private static void PrintSubAssets()
    {
        Object[] data = AssetDatabase.LoadAllAssetRepresentationsAtPath("Assets/MySpriteTexture.png");        Debug.Log(data.Length + " Sub Assets");        foreach (Object o in data)
        {
            Debug.Log(o);
        }        // outputs:
        //  4 Sub Assets
        //  MyTexture_0 (UnityEngine.Sprite)
        //  MyTexture_1 (UnityEngine.Sprite)
        //  MyTexture_2 (UnityEngine.Sprite)
        //  MyTexture_3 (UnityEngine.Sprite)
    }
}
```


            
