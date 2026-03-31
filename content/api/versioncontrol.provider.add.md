This version of Unity is unsupported.



# [Provider](VersionControl.Provider.html).Add




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

public static [VersionControl.Task](VersionControl.Task.html) Add([VersionControl.AssetList](VersionControl.AssetList.html) assets,
bool recursive);






## Declaration

public static [VersionControl.Task](VersionControl.Task.html) Add([VersionControl.Asset](VersionControl.Asset.html) asset,
bool recursive);






### Parameters



| Parameter | Description |
| --- | --- |
| assets | List of assets to add to version control system. |
| asset | Single asset to add to version control system. |
| recursive | Set this to true if adding should be done recursively into subfolders. |





### Description



Allows you to add files to [version control](../Manual/Versioncontrolintegration.html) via script.





If you have selected a [version control integration](../Manual/Versioncontrolintegration.html) in Unity's project settings panel, the default setting is for new files to be automatically added to [version control](../Manual/Versioncontrolintegration.html). However, you can disable the "Automatic add" option to prevent this. This method is intended to be used to allow you to add files to [version control](../Manual/Versioncontrolintegration.html) manually via script, if you have disabled "Automatic add".


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;public class EditorScript : MonoBehaviour
{
    [MenuItem("Version Control/Add")]
    static void ExampleAdd()
    {
        AssetList assets = new AssetList();
        assets.Add(Provider.GetAssetByPath("Assets/ExampleAsset.cs"));
        Task t = Provider.Add(assets, recursive: false);
        t.Wait();
    }
}
```


            
