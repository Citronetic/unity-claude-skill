This version of Unity is unsupported.



# [Provider](VersionControl.Provider.html).Merge




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

public static [VersionControl.Task](VersionControl.Task.html) Merge([VersionControl.AssetList](VersionControl.AssetList.html) assets);






### Parameters



| Parameter | Description |
| --- | --- |
| assets | The list of conflicting assets to be merged. |





### Description



Initiates a merge task to handle the merging of conflicting Assets. This invokes a merge tool, which you can set in the External Tools section of the Preferences window, on the conflicting Assets. When the merge task finishes, the [AssetList](VersionControl.AssetList.html) only contains the Assets that the tool could merge.





To correctly resolve the resulting [AssetList](VersionControl.AssetList.html) states (and replace the files with the correct, merged version), you must call a subsequent [Provider.Resolve](VersionControl.Provider.Resolve.html) task with a [ResolveMethod.UseMerged](VersionControl.ResolveMethod.UseMerged.html) ResolveMethod.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;public class EditorScript : MonoBehaviour
{
    [MenuItem("Version Control/Merge")]
    public static void ExampleMerge()
    {
        AssetList assets = new AssetList();
        assets.Add(Provider.GetAssetByPath("Assets/ExampleAsset.cs"));
        Task t1 = Provider.Merge(assets);
        t1.Wait();
        Task t2 = Provider.Resolve(assets, ResolveMethod.UseMerged);
        t2.Wait();
    }
}
```


            
