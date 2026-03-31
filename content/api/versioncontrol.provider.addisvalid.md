This version of Unity is unsupported.



# [Provider](VersionControl.Provider.html).AddIsValid




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

public static bool AddIsValid([VersionControl.AssetList](VersionControl.AssetList.html) assets);






### Parameters



| Parameter | Description |
| --- | --- |
| assets | List of assets to test. |





### Description



Given a list of assets this function returns true if [Provider.Add](VersionControl.Provider.Add.html) is a valid task to perform on at least one of the assets in the list.





An Asset is considered to be valid for adding if it has not already been added to the version control provider. If it has already been added, it is invalid for adding.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;public class EditorScript : MonoBehaviour
{
    [MenuItem("Version Control/AddIsValid")]
    static void ExampleAddIsValid()
    {
        AssetList assets = new AssetList();
        assets.Add(Provider.GetAssetByPath("Assets/ExampleAsset.mat"));
        Debug.Log(Provider.AddIsValid(assets));
    }
}
```


            
