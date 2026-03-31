This version of Unity is unsupported.



# [Caching](Caching.html).GetCachedVersions




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

public static void GetCachedVersions(string assetBundleName,
List<Hash128> outCachedVersions);






### Parameters



| Parameter | Description |
| --- | --- |
| assetBundleName | The AssetBundle name. |
| outCachedVersions | List of all the cached version. |





### Description



Returns all cached versions of the given AssetBundle.


              


```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;public class Example : MonoBehaviour
{
    IEnumerator GetCachedVersionExample(string uri)
    {
        //Download the bundle
        UnityWebRequest request = UnityWebRequestAssetBundle.GetAssetBundle(uri);
        yield return request.SendWebRequest();
        AssetBundle bundle = DownloadHandlerAssetBundle.GetContent(request);        //Get all the cached versions
        List<Hash128> listOfCachedVersions = new List<Hash128>();
        Caching.GetCachedVersions(bundle.name, listOfCachedVersions);        //use listOfCachedVersions hashes to perform actions on Caches...        //Unload the AssetBundle
        bundle.Unload(true);
    }
}
```


            
