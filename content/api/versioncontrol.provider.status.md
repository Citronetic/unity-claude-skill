This version of Unity is unsupported.



# [Provider](VersionControl.Provider.html).Status




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

public static [VersionControl.Task](VersionControl.Task.html) Status([VersionControl.AssetList](VersionControl.AssetList.html) assets);






## Declaration

public static [VersionControl.Task](VersionControl.Task.html) Status([VersionControl.Asset](VersionControl.Asset.html) asset);






## Declaration

public static [VersionControl.Task](VersionControl.Task.html) Status([VersionControl.AssetList](VersionControl.AssetList.html) assets,
bool recursively);






## Declaration

public static [VersionControl.Task](VersionControl.Task.html) Status([VersionControl.Asset](VersionControl.Asset.html) asset,
bool recursively);






## Declaration

public static [VersionControl.Task](VersionControl.Task.html) Status(string[] assets);






## Declaration

public static [VersionControl.Task](VersionControl.Task.html) Status(string[] assets,
bool recursively);






## Declaration

public static [VersionControl.Task](VersionControl.Task.html) Status(string asset);






## Declaration

public static [VersionControl.Task](VersionControl.Task.html) Status(string asset,
bool recursively);






### Parameters



| Parameter | Description |
| --- | --- |
| assets | The asset list to fetch state information for. |
| asset | The asset to fetch state information for. |
| recursively | If any assets specified are folders this flag will get status for all descendants of the folder as well. |





### Description



Starts a task that will fetch the most recent status about the asset or assets from the revision control system.





The updated assets can be access through the task's assetList property once it has completed.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;public class EditorScript : MonoBehaviour
{
    [MenuItem("Version Control/Status")]
    public static void ExampleStatus()
    {
        AssetList assets = new AssetList();
        assets.Add(Provider.GetAssetByPath("Assets/ExampleAsset.cs"));
        Task t = Provider.Status(assets);
        t.Wait();
        t.assetList.ForEach(asset => Debug.Log(asset.name + " " + asset.state.ToString()));
    }
}
```





The example code above will check the status of the given example asset and its .meta file and output that information into the console.


            
