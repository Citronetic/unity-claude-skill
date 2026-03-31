This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).Refresh




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

public static void Refresh([ImportAssetOptions](ImportAssetOptions.html) options = ImportAssetOptions.Default);






### Description



Import any changed assets.





This will import any assets that have changed their content modification data or have been added-removed to the project folder.

This method implicitly triggers an asset garbage collection (see [Resources.UnloadUnusedAssets](Resources.UnloadUnusedAssets.html)).

Additional resources: [ImportAssetOptions](ImportAssetOptions.html).


              


```
using System.Collections.Generic;
using System.IO;
using UnityEditor;
using UnityEngine;public class AssetDatabaseExamples : MonoBehaviour
{
    [MenuItem("AssetDatabase/Refresh Example")]
    public static void RefreshExample()
    {
        var folderList = new List<string>{"Textures", "Models", "Sounds"};
        foreach (var folder in folderList)
        {
            Directory.CreateDirectory($"Assets/{folder}");
        }        foreach (var folder in folderList)
        {
            //Output will be false
            Debug.Log(AssetDatabase.IsValidFolder($"Assets/{folder}"));
        }        AssetDatabase.Refresh();
        foreach (var folder in folderList)
        {
            //Output will be true
            Debug.Log(AssetDatabase.IsValidFolder($"Assets/{folder}"));
        }
    }
}
```


            
