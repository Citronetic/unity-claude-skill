This version of Unity is unsupported.



# [Caching](Caching.html).ClearAllCachedVersions




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

public static bool ClearAllCachedVersions(string assetBundleName);






### Parameters



| Parameter | Description |
| --- | --- |
| assetBundleName | The AssetBundle name. |





### Returns



**bool**
        Returns true when cache clearing succeeded.





### Description



Removes all the cached versions of the given AssetBundle from the cache.





Returns false if any cached bundle is in use.


              


```
using System.Collections;
using UnityEngine.Networking;
using UnityEngine;public class Example : MonoBehaviour
{
    IEnumerator ClearAllCachedVersionsExample(string uri)
    {
        //Download the bundle
        UnityWebRequest request = UnityWebRequestAssetBundle.GetAssetBundle(uri);
        yield return request.SendWebRequest();
        AssetBundle bundle = DownloadHandlerAssetBundle.GetContent(request);        //Given the name of an asset bundle, this will clear every cached version across all caches
        Caching.ClearAllCachedVersions(bundle.name);        //Unload the AssetBundle
        bundle.Unload(true);
    }
}
```


            
