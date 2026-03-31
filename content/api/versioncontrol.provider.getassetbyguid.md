This version of Unity is unsupported.



# [Provider](VersionControl.Provider.html).GetAssetByGUID




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

public static [VersionControl.Asset](VersionControl.Asset.html) GetAssetByGUID(string guid);






### Parameters



| Parameter | Description |
| --- | --- |
| guid | GUID of asset. |





### Description



Returns version control information about an asset from a given GUID.





Returns null if the GUID is not known by the Unity Editor.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;public class EditorScript : MonoBehaviour
{
    [MenuItem("Version Control/GetAssetByGUID")]
    static void ExampleGetAssetByGUID()
    {
        string guid = AssetDatabase.AssetPathToGUID("Assets/ExampleAsset.mat");
        AssetList assets = new AssetList();
        assets.Add(Provider.GetAssetByGUID(guid));
        Debug.Log("Found an asset:  " + assets[0].name.ToString());
    }
}
```


            
