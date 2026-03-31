This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).GetSubFolders




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

public static string[] GetSubFolders(string path);






### Description



Given a path to a directory in the Assets folder, relative to the project folder, this method will return an array of all its subdirectories.


              


```
using UnityEditor;
using UnityEngine;public class AssetDatabaseExamples : MonoBehaviour
{
    [MenuItem("AssetDatabase/Get Folder List")]
    static void SubFolderExample()
    {
        //This method prints out the entire folder list of a project into the console
        var folders = AssetDatabase.GetSubFolders("Assets");
        foreach (var folder in folders)
        {
            Recursive(folder);
        }
    }    static void Recursive(string folder)
    {
        Debug.Log(folder);
        var folders = AssetDatabase.GetSubFolders(folder);
        foreach (var fld in folders)
        {
            Recursive(fld);
        }
    }
}
```


            
