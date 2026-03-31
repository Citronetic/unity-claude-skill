This version of Unity is unsupported.



# [Provider](VersionControl.Provider.html).GetAssetByPath




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

public static [VersionControl.Asset](VersionControl.Asset.html) GetAssetByPath(string unityPath);






### Parameters



| Parameter | Description |
| --- | --- |
| unityPath | Path to asset. |





### Description



Returns the version control information about an asset. Can be used with "[AssetList](VersionControl.AssetList.html).Add" to add assets to a list for further version control actions.





Will return null if the path is not known by the Unity Editor or if the asset is local only and hasn't been added to version control yet.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;public class EditorScript : MonoBehaviour
{
    [MenuItem("Version Control/GetAssetByPath")]
    public static void ExampleGetAssetByPath()
    {
        AssetList assets = new AssetList();
        assets.Add(Provider.GetAssetByPath("Assets/ExampleAsset.cs"));
        Debug.Log("Found an asset:  " + assets[0].name.ToString());
    }
}
```


            
