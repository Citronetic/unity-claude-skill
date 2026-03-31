This version of Unity is unsupported.



# [Caching](Caching.html).ClearCachedVersion




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

public static bool ClearCachedVersion(string assetBundleName,
[Hash128](Hash128.html) hash);






### Parameters



| Parameter | Description |
| --- | --- |
| assetBundleName | The AssetBundle name. |
| hash | Version needs to be cleaned. |





### Returns



**bool**
        Returns true when cache clearing succeeded.  Can return false if any cached bundle is in use.





### Description



Removes the given version of the AssetBundle.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void ClearAssetBundleBundleFromCache(AssetBundle bundleToClear, string manifestBundlePath)
    {
        AssetBundle manifestBundle = AssetBundle.LoadFromFile(manifestBundlePath);
        AssetBundleManifest manifest = manifestBundle.LoadAsset<AssetBundleManifest>("AssetBundleManifest");        //This will clear the cached version from all caches, not just the currentCacheForWriting
        Caching.ClearCachedVersion(bundleToClear.name, manifest.GetAssetBundleHash(bundleToClear.name));        //Unload the AssetBundle
        manifestBundle.Unload(true);
    }
}
```


            
