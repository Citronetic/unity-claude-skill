This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).ImportPackage




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

public static void ImportPackage(string packagePath,
bool interactive);






### Description



Imports package at **packagePath** into the current project.





If **interactive** is true, an import package dialog will be opened, else all assets in the package will be imported into the current project.


              


```
using UnityEditor;
using UnityEngine;public class AssetDatabaseExamples : MonoBehaviour
{
    [MenuItem("AssetDatabase/Import Package Example")]
    static void ImportPackageExample()
    {
        var texturePackageNames = new[] {"groundTextures2k.unitypackage", "groundTextures4k.unitypackage"};
        foreach (var package in texturePackageNames)
        {
            AssetDatabase.ImportPackage(package, false);
        }
    }
}
```


            
