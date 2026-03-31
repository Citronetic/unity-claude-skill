This version of Unity is unsupported.



# [MonoImporter](MonoImporter.html).SetDefaultReferences




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

public void SetDefaultReferences(string[] name,
Object[] target);






### Parameters



| Parameter | Description |
| --- | --- |
| name | An array of names of public fields in the imported MonoScript. The type of each field must be derived from UnityEngine.Object. |
| target | An array of objects to use as default values. The size of the array must match the size of the names array. The array can include null values. |





### Description



Sets default references for this [MonoScript](MonoScript.html).





When the Unity Editor instantiates this [MonoScript](MonoScript.html), it uses the default values to populate the named fields.
Additional resources: [MonoImporter.GetDefaultReference](MonoImporter.GetDefaultReference.html).


              


```
using UnityEngine;
using UnityEditor;class Example
{
    [MenuItem("Examples/Set Default References")]
    public static void SetDefaultReferences()
    {
        var assetPath = "Assets/MyMonoBehaviour.cs";
        var monoImporter = AssetImporter.GetAtPath(assetPath) as MonoImporter;        var gameObject = AssetDatabase.LoadAssetAtPath<GameObject>(AssetDatabase.GUIDToAssetPath(AssetDatabase.FindAssets("Cube")[0]));
        var material = AssetDatabase.LoadAssetAtPath<Material>(AssetDatabase.GUIDToAssetPath(AssetDatabase.FindAssets("defaultMat")[0]));        var names = new string[] {"MyGameObject", "MyMaterial"};
        var values = new Object[] {gameObject, material};
        monoImporter.SetDefaultReferences(names, values);
        monoImporter.SaveAndReimport();
    }
}
```


            
