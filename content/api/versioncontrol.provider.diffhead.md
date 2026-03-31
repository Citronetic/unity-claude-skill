This version of Unity is unsupported.



# [Provider](VersionControl.Provider.html).DiffHead




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

public static [VersionControl.Task](VersionControl.Task.html) DiffHead([VersionControl.AssetList](VersionControl.AssetList.html) assets,
bool includingMetaFiles);






### Parameters



| Parameter | Description |
| --- | --- |
| assets | List of assets to diff. |
| includingMetaFiles | Whether or not to include the .meta file. |





### Description



Starts a task for showing a diff of the given assest versus their head revision.





Do note that some asset types do not save their changes to disk right after making them so it is recommended to manually save the asset using [AssetDatabase.SaveAssets](AssetDatabase.SaveAssets.html) before calling the diff tool.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;public class EditorScript : MonoBehaviour
{
    [MenuItem("Version Control/Diff")]
    public static void ExampleDiff()
    {
        AssetList assets = new AssetList();
        assets.Add(Provider.GetAssetByPath("Assets/ExampleAsset.cs"));
        AssetDatabase.SaveAssets();
        Provider.DiffHead(assets, includingMetaFiles: false);
    }
}
```


            
