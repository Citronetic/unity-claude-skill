This version of Unity is unsupported.



# [Provider](VersionControl.Provider.html).Revert




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

public static [VersionControl.Task](VersionControl.Task.html) Revert([VersionControl.AssetList](VersionControl.AssetList.html) assets,
[VersionControl.RevertMode](VersionControl.RevertMode.html) mode);






## Declaration

public static [VersionControl.Task](VersionControl.Task.html) Revert([VersionControl.Asset](VersionControl.Asset.html) asset,
[VersionControl.RevertMode](VersionControl.RevertMode.html) mode);






### Parameters



| Parameter | Description |
| --- | --- |
| assets | The list of assets to be reverted. |
| asset | The asset to be reverted. |
| mode | How to revert the assets. |





### Description



Reverts the specified assets by undoing any changes done since the last time you synced.





The last sync time is usually when [Provider.GetLatest](VersionControl.Provider.GetLatest.html) was last issued but may differ if an external version control client is used at the same time.

Note that after this operation is completed, Asset Database is not refreshed automatically. It can be updated by calling [AssetDatabase.Refresh](AssetDatabase.Refresh.html).


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;public class EditorScript : MonoBehaviour
{
    [MenuItem("Version Control/Revert")]
    public static void ExampleRevert()
    {
        AssetList assets = new AssetList();
        assets.Add(Provider.GetAssetByPath("Assets/ExampleAsset.cs"));
        Task t = Provider.Revert(assets, RevertMode.Normal);
        t.Wait();
    }
}
```





[Provider.Revert](VersionControl.Provider.Revert.html) can be used with two different revert modes - normal and unchanged. The normal revert mode reverts all of the local changes made while the unchanged mode only reverts files that haven't been modified yet.


            
