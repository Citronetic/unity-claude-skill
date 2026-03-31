This version of Unity is unsupported.



# [Provider](VersionControl.Provider.html).CheckoutIsValid




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

public static bool CheckoutIsValid([VersionControl.AssetList](VersionControl.AssetList.html) assets);






## Declaration

public static bool CheckoutIsValid([VersionControl.Asset](VersionControl.Asset.html) asset);






## Declaration

public static bool CheckoutIsValid([VersionControl.AssetList](VersionControl.AssetList.html) assets,
[VersionControl.CheckoutMode](VersionControl.CheckoutMode.html) mode);






## Declaration

public static bool CheckoutIsValid([VersionControl.Asset](VersionControl.Asset.html) asset,
[VersionControl.CheckoutMode](VersionControl.CheckoutMode.html) mode);






### Parameters



| Parameter | Description |
| --- | --- |
| assets | List of assets. |
| asset | Single asset. |
| mode | Specify to check only asset files, meta files or both. |





### Description



Given an asset or a  list of assets this function returns true if [Provider.Checkout](VersionControl.Provider.Checkout.html) is a valid task to perform on at least one of the given assets.





The [CheckoutMode](VersionControl.CheckoutMode.html) option can be used to narrow down the asset list to a specific type. For example: to only check whether meta files can be checked out and to ignore their asset file states, the [CheckoutMode.Meta](VersionControl.CheckoutMode.Meta.html) must be used.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;public class EditorScript : MonoBehaviour
{
    [MenuItem("Version Control/CheckoutIsValid")]
    public static void ExampleCheckoutIsValid()
    {
        AssetList assets = new AssetList();
        assets.Add(Provider.GetAssetByPath("Assets/ExampleAsset.cs.meta"));
        Debug.Log(Provider.CheckoutIsValid(assets, CheckoutMode.Meta));
    }
}
```





The code above will check the "ExampleAsset.cs" meta file and return true to the console if It can be checked out.


            
