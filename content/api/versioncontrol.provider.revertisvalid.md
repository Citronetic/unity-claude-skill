This version of Unity is unsupported.



# [Provider](VersionControl.Provider.html).RevertIsValid




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

public static bool RevertIsValid([VersionControl.AssetList](VersionControl.AssetList.html) assets,
[VersionControl.RevertMode](VersionControl.RevertMode.html) mode);






## Declaration

public static bool RevertIsValid([VersionControl.Asset](VersionControl.Asset.html) asset,
[VersionControl.RevertMode](VersionControl.RevertMode.html) mode);






### Parameters



| Parameter | Description |
| --- | --- |
| assets | List of assets to test. |
| asset | Asset to test. |
| mode | Revert mode to test for. |





### Description



Returns true if [Provider.Revert](VersionControl.Provider.Revert.html) is a valid task to perform on at least one of the given assets in the list.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;public class EditorScript : MonoBehaviour
{
    [MenuItem("Version Control/RevertIsValid")]
    public static void ExampleRevertIsValid()
    {
        AssetList assets = new AssetList();
        assets.Add(Provider.GetAssetByPath("Assets/ExampleAsset.cs"));
        Debug.Log(Provider.RevertIsValid(assets, RevertMode.Normal));
    }
}
```





Do note that, [RevertMode.Unchanged](VersionControl.RevertMode.Unchanged.html) will only test locally checked out and locked files. While the [RevertMode.Normal](VersionControl.RevertMode.Normal.html) will test locally checked out, locked, added and deleted files.


            
