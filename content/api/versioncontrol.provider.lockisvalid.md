This version of Unity is unsupported.



# [Provider](VersionControl.Provider.html).LockIsValid




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

public static bool LockIsValid([VersionControl.AssetList](VersionControl.AssetList.html) assets);






### Parameters



| Parameter | Description |
| --- | --- |
| assets | List of assets to test. |





### Description



Returns true if the [Provider.Lock](VersionControl.Provider.Lock.html) task can be executed on one or more assets from the given asset list.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;public class EditorScript : MonoBehaviour
{
    [MenuItem("Version Control/LockIsValid")]
    public static void ExampleLockIsValid()
    {
        AssetList assets = new AssetList();
        assets.Add(Provider.GetAssetByPath("Assets/ExampleAsset.cs"));
        Debug.Log("LockIsvalid?  " + Provider.LockIsValid(assets));
    }
}
```


            
