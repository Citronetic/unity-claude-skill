This version of Unity is unsupported.



# [Provider](VersionControl.Provider.html).Lock




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

public static [VersionControl.Task](VersionControl.Task.html) Lock([VersionControl.AssetList](VersionControl.AssetList.html) assets,
bool locked);






## Declaration

public static [VersionControl.Task](VersionControl.Task.html) Lock([VersionControl.Asset](VersionControl.Asset.html) asset,
bool locked);






### Parameters



| Parameter | Description |
| --- | --- |
| asset | Asset to lock/unlock. |
| assets | List of assets to lock/unlock. |
| locked | True to lock assets, false to unlock assets. |





### Description



Attempt to lock an asset for exclusive editing.





Depending on version control system and server setup this might be an exclusive lock preventing other people from even modifing the asset (for example: Plastic SCM or Git) or it might simply prevent other people from submitting the asset to the version control server (Perforce).


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;public class EditorScript : MonoBehaviour
{
    [MenuItem("Version Control/Lock")]
    public static void ExampleLock()
    {
        AssetList assets = new AssetList();
        assets.Add(Provider.GetAssetByPath("Assets/ExampleAsset.cs"));
        Task t1 = Provider.Checkout(assets, CheckoutMode.Exact);
        t1.Wait();
        Task t2 = Provider.Lock(assets, locked: true);
        t2.Wait();
    }
}
```


            
