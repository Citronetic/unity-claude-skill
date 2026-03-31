This version of Unity is unsupported.



# [Provider](VersionControl.Provider.html).GetLatestIsValid




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

public static bool GetLatestIsValid([VersionControl.AssetList](VersionControl.AssetList.html) assets);






### Parameters



| Parameter | Description |
| --- | --- |
| assets | List of assets to test. |





### Description



The task tests the given asset list and returns true if [Provider.GetLatest](VersionControl.Provider.GetLatest.html) is valid operation for one or more assets.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;public class EditorScript : MonoBehaviour
{
    [MenuItem("Version Control/GetLatestIsValid")]
    public static void ExampleGetLatestIsValid()
    {
        AssetList assets = new AssetList();
        assets.Add(Provider.GetAssetByPath("Assets/ExampleAsset.cs"));
        assets.Add(Provider.GetAssetByPath("Assets/ExampleAsset.cs.meta"));
        Task t = Provider.GetLatest(assets);
        t.Wait();
    }
}
```


            
