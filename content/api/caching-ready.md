This version of Unity is unsupported.



# [Caching](Caching.html).ready




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












                    public static bool ready;






### Description



Returns true if Caching system is ready for use.


              


```
using System.Collections;
using UnityEngine;
using UnityEngine.Networking;public class Example : MonoBehaviour
{
    IEnumerator IsCachingReadyExample(string uri)
    {
        //Using this conditional says we want to wait for our Caching system to be ready before trying to download bundles
        while (!Caching.ready)
        {
            yield return null;
        }
        //Download the bundle
        UnityWebRequest request = UnityWebRequestAssetBundle.GetAssetBundle(uri);
        yield return request.SendWebRequest();
        AssetBundle bundle = DownloadHandlerAssetBundle.GetContent(request);        //Do something with the AssetBundle...        //Unload the AssetBundle
        bundle.Unload(true);
    }
}
```


            
