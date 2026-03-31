This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).SetMainObject




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

public static void SetMainObject([Object](Object.html) mainObject,
string assetPath);






### Parameters



| Parameter | Description |
| --- | --- |
| mainObject | The object to become the main object. |
| assetPath | Path to the asset file. |





### Description



Specifies which object in the asset file should become the main object after the next import.





All other objects in the asset become children of the main object.
NOTE: This function modifies the importer object, not the asset itself. The next import reflects the change in the imported asset.


              


```
using UnityEditor;
using UnityEngine;public class Scriptable : ScriptableObject
{
}
public class AssetDatabaseExamples : MonoBehaviour
{
    [MenuItem("AssetDatabase/Set Main Object Example")]
    public static void SetMainObjectExample()
    {
        //Create a Scriptable Object and a Material
        var materialAsset = new Material(Shader.Find("Standard"));
        var scriptableAssetPath = "Assets/ScriptableObjects/NewObject.asset";
        var mainAsset = ScriptableObject.CreateInstance<Scriptable>();
        AssetDatabase.CreateAsset(mainAsset, scriptableAssetPath);        //Add the Material to the Scriptable Object
        AssetDatabase.AddObjectToAsset(materialAsset, scriptableAssetPath);
        AssetDatabase.SaveAssets();        //Set the Material to be the main Object and import it
        AssetDatabase.SetMainObject(materialAsset, scriptableAssetPath);
        AssetDatabase.ImportAsset(scriptableAssetPath);
    }
}
```


            
