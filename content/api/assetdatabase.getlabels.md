This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).GetLabels




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

public static string[] GetLabels([Object](Object.html) obj);






### Description



Returns all labels attached to a given asset.


              


```
using System.Linq;
using UnityEngine;
using UnityEditor;public class AssetDatabaseExamples : MonoBehaviour
{
    [MenuItem("AssetDatabase/Check If Labels Are Correct")]
    static void CheckIfLabelsAreCorrect()
    {
        for (var i = 0; i < 10; i++)
        {
            var texturePath = $"Assets/Textures/Road/Road{i}.png";
            var asset = AssetDatabase.LoadMainAssetAtPath(texturePath);
            var labelList = AssetDatabase.GetLabels(asset);
            if(!labelList.Contains("Road"))
                Debug.LogWarning($"Road Texture \"{texturePath}\" does not contain Road label");
        }
    }
}
```


            
