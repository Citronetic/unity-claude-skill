This version of Unity is unsupported.



# [Provider](VersionControl.Provider.html).Resolve




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

public static [VersionControl.Task](VersionControl.Task.html) Resolve([VersionControl.AssetList](VersionControl.AssetList.html) assets,
[VersionControl.ResolveMethod](VersionControl.ResolveMethod.html) resolveMethod);






### Parameters



| Parameter | Description |
| --- | --- |
| assets | List of assets to resolve. |
| resolveMethod | How the assets should be resolved. |





### Description



Starts a task that will resolve the conflicting assets in version control.





When conflicts between the depot and the local version of the asset appear you can resolve them by keeping either your own copy or the incoming copy.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;public class EditorScript : MonoBehaviour
{
    [MenuItem("Version Control/ResolveUseTheirs")]
    public static void ExampleResolve()
    {
        AssetList assets = new AssetList();
        assets.Add(Provider.GetAssetByPath("Assets/ExampleAsset.cs"));
        Task t = Provider.Resolve(assets, ResolveMethod.UseTheirs);
        t.Wait();
    }
}
```





The code above will resolve the "ExampleAsset.cs" file's conflict by discarding local changes and only keeping the incoming ones.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.VersionControl;
using UnityEngine;public class EditorScript : MonoBehaviour
{
    [MenuItem("Version Control/ResolveUseMerged")]
    public static void ExampleResolve()
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





The code above shows a third way of resolving the conflict - merging the two versions together. The correct way to do this is to first, call the [Provider.Merge](VersionControl.Provider.Merge.html) task on the conflicting assets and then resolve them using the [Provider.Resolve](VersionControl.Provider.Resolve.html) task with the [ResolveMethod.UseMerged](VersionControl.ResolveMethod.UseMerged.html) method.


            
