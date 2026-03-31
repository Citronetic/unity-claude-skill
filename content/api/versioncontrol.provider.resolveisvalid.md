This version of Unity is unsupported.



# [Provider](VersionControl.Provider.html).ResolveIsValid




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

public static bool ResolveIsValid([VersionControl.AssetList](VersionControl.AssetList.html) assets);






### Parameters



| Parameter | Description |
| --- | --- |
| assets | The list of asset to be resolved. |





### Description



Tests if any of the assets in the list have the conflicted state and can be resolved.





Returns true if one or more assets in the list are resolvable.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;public class EditorScript : MonoBehaviour
{
    [MenuItem("Version Control/ResolveIsValid")]
    public static void ExampleResolveIsValid()
    {
        AssetList assets = new AssetList();
        assets.Add(Provider.GetAssetByPath("Assets/ExampleAsset.cs"));
        bool valid = Provider.ResolveIsValid(assets);
        Debug.Log("Can the file be resolved?" + valid);
    }
}
```


            
