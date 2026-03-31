This version of Unity is unsupported.



# [Provider](VersionControl.Provider.html).DiffIsValid




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

public static bool DiffIsValid([VersionControl.AssetList](VersionControl.AssetList.html) assets);






### Parameters



| Parameter | Description |
| --- | --- |
| assets | List of assets. |





### Description



Returns true if starting a Diff task is a valid operation for at least one asset in the given [AssetList](VersionControl.AssetList.html).





When all of the assets in the list are not added to version control the task will return false, otherwise the result will always be true.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;public class EditorScript : MonoBehaviour
{
    [MenuItem("Version Control/DiffIsValid")]
    public static void ExampleDiffIsValid()
    {
        AssetList assets = new AssetList();
        assets.Add(Provider.GetAssetByPath("Assets/ExampleAsset.cs"));
        Debug.Log(Provider.DiffIsValid(assets));
    }
}
```


            
