This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).IsMainAsset




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

public static bool IsMainAsset([Object](Object.html) obj);






## Declaration

public static bool IsMainAsset(int instanceID);






### Description



Is asset a main asset in the project window?





For example an imported model has a game object as its root and several Meshes and child game objects
in expanded state. The root game object is the main asset in this case.


              


```
using UnityEditor;
using UnityEngine;public class Scriptable : ScriptableObject
{
}public class AssetDatabaseExamples : MonoBehaviour
{
    [MenuItem("AssetDatabase/Is Main Asset Example")]
    static void IsMainAssetExample()
    {
        var materialAsset = new Material(Shader.Find("Standard"));        //materialAsset is still in memory, therefore this will be False
        Debug.Log(AssetDatabase.IsMainAsset(materialAsset));        //Create a Scriptable object
        var scriptableAssetPath = "Assets/ScriptableObjects/NewObject.asset";
        var mainAsset = ScriptableObject.CreateInstance<Scriptable>();
        AssetDatabase.CreateAsset(mainAsset, scriptableAssetPath);        //Add the Material Asset to the Scriptable object, so that the Material becomes a Sub Asset of the Scriptable object
        AssetDatabase.AddObjectToAsset(materialAsset, scriptableAssetPath);
        AssetDatabase.SaveAssets();        //This will be false because material asset has been added to the main Asset and is now a Sub Asset
        Debug.Log(AssetDatabase.IsMainAsset(materialAsset));        //Remove the subAsset from the Scriptable object and create it as an Asset
        AssetDatabase.RemoveObjectFromAsset(materialAsset);
        AssetDatabase.CreateAsset(materialAsset, "Assets/Materials/New Mat0.mat");        //This will be True because the material is now the main Asset
        Debug.Log(AssetDatabase.IsMainAsset(materialAsset));
    }
}
```


            
