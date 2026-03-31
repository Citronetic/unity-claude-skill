This version of Unity is unsupported.



# [Caching](Caching.html).ClearOtherCachedVersions




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

public static bool ClearOtherCachedVersions(string assetBundleName,
[Hash128](Hash128.html) hash);






### Parameters



| Parameter | Description |
| --- | --- |
| assetBundleName | The AssetBundle name. |
| hash | Version needs to be kept. |





### Returns



**bool**
        Returns true when cache clearing succeeded.





### Description



Removes all the cached versions of the AssetBundle from the cache, except for the specified version.





Returns false if any cached bundle is in use.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void ClearOtherCachedVersionsExample(AssetBundle bundleToSave, string manifestBundlePath)
    {
        AssetBundle manifestBundle = AssetBundle.LoadFromFile(manifestBundlePath);
        AssetBundleManifest manifest = manifestBundle.LoadAsset<AssetBundleManifest>("AssetBundleManifest");        //This will clear all the cached version of this asset bundle except for this specific cached version
        bool success = Caching.ClearOtherCachedVersions(bundleToSave.name, manifest.GetAssetBundleHash(bundleToSave.name));        if (!success)
        {
            Debug.Log("Unable to clear the caches");
        }        //Unload the AssetBundle
        manifestBundle.Unload(true);
    }
}
```


            
