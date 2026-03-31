This version of Unity is unsupported.



# [Provider](VersionControl.Provider.html).Checkout




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

public static [VersionControl.Task](VersionControl.Task.html) Checkout([VersionControl.Asset](VersionControl.Asset.html) asset,
[VersionControl.CheckoutMode](VersionControl.CheckoutMode.html) mode);






## Declaration

public static [VersionControl.Task](VersionControl.Task.html) Checkout([VersionControl.Asset](VersionControl.Asset.html) asset,
[VersionControl.CheckoutMode](VersionControl.CheckoutMode.html) mode,
[VersionControl.ChangeSet](VersionControl.ChangeSet.html) changeset);






## Declaration

public static [VersionControl.Task](VersionControl.Task.html) Checkout([VersionControl.AssetList](VersionControl.AssetList.html) assets,
[VersionControl.CheckoutMode](VersionControl.CheckoutMode.html) mode);






## Declaration

public static [VersionControl.Task](VersionControl.Task.html) Checkout([VersionControl.AssetList](VersionControl.AssetList.html) assets,
[VersionControl.CheckoutMode](VersionControl.CheckoutMode.html) mode,
[VersionControl.ChangeSet](VersionControl.ChangeSet.html) changeset);






## Declaration

public static [VersionControl.Task](VersionControl.Task.html) Checkout(string asset,
[VersionControl.CheckoutMode](VersionControl.CheckoutMode.html) mode);






## Declaration

public static [VersionControl.Task](VersionControl.Task.html) Checkout(string asset,
[VersionControl.CheckoutMode](VersionControl.CheckoutMode.html) mode,
[VersionControl.ChangeSet](VersionControl.ChangeSet.html) changeset);






## Declaration

public static [VersionControl.Task](VersionControl.Task.html) Checkout(string[] assets,
[VersionControl.CheckoutMode](VersionControl.CheckoutMode.html) mode);






## Declaration

public static [VersionControl.Task](VersionControl.Task.html) Checkout(string[] assets,
[VersionControl.CheckoutMode](VersionControl.CheckoutMode.html) mode,
[VersionControl.ChangeSet](VersionControl.ChangeSet.html) changeset);






## Declaration

public static [VersionControl.Task](VersionControl.Task.html) Checkout([Object](Object.html) asset,
[VersionControl.CheckoutMode](VersionControl.CheckoutMode.html) mode,
[VersionControl.ChangeSet](VersionControl.ChangeSet.html) changeset);






## Declaration

public static [VersionControl.Task](VersionControl.Task.html) Checkout([Object](Object.html) asset,
[VersionControl.CheckoutMode](VersionControl.CheckoutMode.html) mode);






## Declaration

public static [VersionControl.Task](VersionControl.Task.html) Checkout(Object[] assets,
[VersionControl.CheckoutMode](VersionControl.CheckoutMode.html) mode);






## Declaration

public static [VersionControl.Task](VersionControl.Task.html) Checkout(Object[] assets,
[VersionControl.CheckoutMode](VersionControl.CheckoutMode.html) mode,
[VersionControl.ChangeSet](VersionControl.ChangeSet.html) changeset);






### Parameters



| Parameter | Description |
| --- | --- |
| assets | List of assets to checkout. |
| asset | Asset to checkout. |
| mode | Tell the Provider to checkout just the asset file, the .meta file or both. |
| changeset | Tell the Provider to checkout the assets to a specific changeset. |





### Description



Checkout an asset or a list of assets from the version control system.





Some version control systems like Perforce or Plastic SCM require an asset to be checked out before it can be edited.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;public class EditorScript : MonoBehaviour
{
    [MenuItem("Version Control/Checkout")]
    public static void ExampleCheckout()
    {
        AssetList assets = new AssetList();
        assets.Add(Provider.GetAssetByPath("Assets/ExampleAsset.cs"));
        ChangeSet changeset = new ChangeSet("Description", "1111");
        Task t = Provider.Checkout(assets, CheckoutMode.Both, changeset);
        t.Wait();
    }
}
```





The code above will checkout the "ExampleAsset.cs" asset and move it to a changeset with an ID of "1111".


            
