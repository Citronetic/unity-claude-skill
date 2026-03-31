This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).GenerateUniqueAssetPath




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

public static string GenerateUniqueAssetPath(string path);






### Description



Creates a new unique path for an asset.





When you call this method, Unity checks to see whether an asset already exists with the matching path and filename you supply. If it doesn't exist, Unity returns the same string you supplied. If an existing asset has the same path and filename, Unity appends the number 1 to the filename and checks again. It continues incrementing this number and checking again until it finds a filename that doesn't exists, and returns the path with that new unique filename.

All paths generated are relative to the project folder, for example: `Assets/Textures/hello.png`.

By default, Unity uses a space to separate the filename from the number it appends. For example, if you supply the path `Assets/Textures/hello.png` and that file already exists, Unity returns `Assets/Textures/hello 1.png`. To change this behavior, disable the Space Before Number in Asset Names setting in the Editor, or set [EditorSettings.assetNamingUsesSpace](EditorSettings-assetNamingUsesSpace.html) to false.


              


```
using UnityEditor;
using UnityEngine;public class GenerateUniqueAssetPathExample : MonoBehaviour
{
    [MenuItem("APIExamples/GenerateUniqueAssetPath")]
    static void GenerateUniqueAssetPathForFilesWithSameName()
    {
        for (int i = 0; i < 5; ++i)
        {
            //The file names that this should create are:
            // Assets/Artifacts/material.mat
            // Assets/Artifacts/material 1.mat
            // Assets/Artifacts/material 2.mat
            // Assets/Artifacts/material 3.mat
            // Assets/Artifacts/material 4.mat
            var uniqueFileName = AssetDatabase.GenerateUniqueAssetPath("Assets/Artifacts/material.mat");            Material material = new Material(Shader.Find("Specular"));
            AssetDatabase.CreateAsset(material, uniqueFileName);
        }
    }
}
```


            
