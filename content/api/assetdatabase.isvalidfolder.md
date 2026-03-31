This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).IsValidFolder




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

public static bool IsValidFolder(string path);






### Parameters



| Parameter | Description |
| --- | --- |
| path | Project relative path to the folder. |





### Returns



**bool**
        Returns true if the folder exists.





### Description



Given a path to a folder, returns true if it exists, false otherwise.





The given path is relative to the project folder.

The Assets folder and all its subfolders are considered valid. While the Packages folder itself is not a valid folder, its subfolders are.


              


```
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;public class AssetDatabaseExamples : MonoBehaviour
{
    [MenuItem("AssetDatabase/Create Folder Structure")]
    static void CreateFolderStructure()
    {
        var folderList = new List<string> { "Animations", "Textures", "Materials", "Prefabs", "Resources", "Scripts" };        //Check if folder exists with IsValidFolder if it doesn't create it
        foreach (var folder in folderList)
        {
            if (AssetDatabase.IsValidFolder($"Assets/{folder}")) continue;
            AssetDatabase.CreateFolder("Assets", folder);
        }
    }
}
```


            
