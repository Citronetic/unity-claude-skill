This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).RemoveObjectFromAsset




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

public static void RemoveObjectFromAsset([Object](Object.html) objectToRemove);






### Description



Removes object from its asset (Additional resources: [AssetDatabase.AddObjectToAsset](AssetDatabase.AddObjectToAsset.html)).


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;public class Scriptable : ScriptableObject
{
}
public class AssetDatabaseExamples : MonoBehaviour
{
    [MenuItem("AssetDatabase/Remove Object From Asset Example")]
    public static void RemoveObjectFromAssetExample()
    {
        var scriptableObjectList = new List<Scriptable>();        //Create Scriptable Objects and store them in a List
        for (var i = 0; i < 10; i++)
        {
            scriptableObjectList.Add(ScriptableObject.CreateInstance<Scriptable>());
            AssetDatabase.CreateAsset(scriptableObjectList[i], $"Assets/ScriptableObjects/SO{i}.asset");
        }        //Add Materials as Sub Assets to the Scriptable Objects
        foreach (var so in scriptableObjectList)
        {
            AssetDatabase.AddObjectToAsset(new Material(Shader.Find("Standard")), so);
        }
        AssetDatabase.SaveAssets();        //Remove Materials from their Scriptable Objects
        foreach (var so in scriptableObjectList)
        {
            var material =
                AssetDatabase.LoadAssetAtPath(AssetDatabase.GetAssetPath(so), typeof(Material));
            AssetDatabase.RemoveObjectFromAsset(material);
        }
        AssetDatabase.SaveAssets();
    }
}
```


            
