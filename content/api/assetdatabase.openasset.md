This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).OpenAsset




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

public static bool OpenAsset(int instanceID,
int lineNumber = -1);






## Declaration

public static bool OpenAsset(int instanceID,
int lineNumber,
int columnNumber);






## Declaration

public static bool OpenAsset([Object](Object.html) target,
int lineNumber = -1);






## Declaration

public static bool OpenAsset([Object](Object.html) target,
int lineNumber,
int columnNumber);






### Description



Opens the asset with associated application.





Opens asset in an external editor, texture application or modelling tool depending on what type of asset it is.
If it is a text file, `lineNumber` and `columnNumber` instructs the text editor to go to that line and column.
Returns true if asset opened successfully.


              


```
using UnityEditor;
using UnityEngine;public class AssetDatabaseExamples : MonoBehaviour
{
    [MenuItem("AssetDatabase/Manually Check Textures")]
    static void OpenAssetExample()
    {
        for (var i = 0; i < 10; i++)
        {
            var texturePath = AssetDatabase.LoadMainAssetAtPath($"Assets/Textures/GroundTexture{i}.jpg");
            if(!EditorUtility.DisplayDialog($"Open next texture", $"Open GroundTexture{i}.jpg texture?", "Yes", "Cancel"))
                break;
            AssetDatabase.OpenAsset(texturePath);
        }
    }
}
```




---








## Declaration

public static bool OpenAsset(Object[] objects);






### Description



Opens the asset(s) with associated application(s).





Opens asset in an external editor, texture application or modelling tool depending on what type of asset it is.
Returns true if all assets opened successfully.


            
