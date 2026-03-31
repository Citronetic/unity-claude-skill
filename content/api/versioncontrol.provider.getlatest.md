This version of Unity is unsupported.



# [Provider](VersionControl.Provider.html).GetLatest




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

public static [VersionControl.Task](VersionControl.Task.html) GetLatest([VersionControl.AssetList](VersionControl.AssetList.html) assets);






## Declaration

public static [VersionControl.Task](VersionControl.Task.html) GetLatest([VersionControl.Asset](VersionControl.Asset.html) asset);






### Parameters



| Parameter | Description |
| --- | --- |
| assets | List of assets to update. |
| asset | Asset to update. |





### Description



Start a task for getting the latest version of an out of sync asset from the version control server.





Note that the [Provider.GetLatest](VersionControl.Provider.GetLatest.html) task does not solve file conflicts, in such cases consider using the [Provider.Resolve](VersionControl.Provider.Resolve.html) method as well.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;public class EditorScript : MonoBehaviour
{
    [MenuItem("Version Control/GetLatest")]
    public static void ExampleGetLatest()
    {
        AssetList assets = new AssetList();
        assets.Add(Provider.GetAssetByPath("Assets/ExampleAsset.cs"));
        Task t = Provider.GetLatest(assets);
        t.Wait();
    }
}
```


            
