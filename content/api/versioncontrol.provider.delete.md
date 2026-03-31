This version of Unity is unsupported.



# [Provider](VersionControl.Provider.html).Delete




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

public static [VersionControl.Task](VersionControl.Task.html) Delete(string assetProjectPath);






## Declaration

public static [VersionControl.Task](VersionControl.Task.html) Delete([VersionControl.AssetList](VersionControl.AssetList.html) assets);






## Declaration

public static [VersionControl.Task](VersionControl.Task.html) Delete([VersionControl.Asset](VersionControl.Asset.html) asset);






### Parameters



| Parameter | Description |
| --- | --- |
| assetProjectPath | The path to the asset that is to be deleted. |
| assets | List of assets to delete. |
| asset | Asset to delete. |





### Description



Starts a task to delete an Asset or a list of Assets from the disk and from the version control system.





Once the task has completed the resultCode of the task will tell if the assets were successfully deleted.

Note that after this operation is completed, Asset Database is not refreshed automatically. It can be updated by calling [AssetDatabase.Refresh](AssetDatabase.Refresh.html).


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;public class EditorScript : MonoBehaviour
{
    [MenuItem("Version Control/Delete")]
    public static void ExampleDelete()
    {
        AssetList assets = new AssetList();
        assets.Add(Provider.GetAssetByPath("Assets/ExampleAsset.cs"));
        assets.Add(Provider.GetAssetByPath("Assets/ExampleAsset.cs.meta"));
        Task t = Provider.Delete(assets);
        t.Wait();
    }
}
```


            
