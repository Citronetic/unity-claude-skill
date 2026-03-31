This version of Unity is unsupported.



# UnityWebRequestAssetBundle





class in
          UnityEngine.Networking



/



Implemented in:[UnityEngine.UnityWebRequestAssetBundleModule](UnityEngine.UnityWebRequestAssetBundleModule.html)


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



















### Description



Helpers for downloading asset bundles using [UnityWebRequest](Networking.UnityWebRequest.html).


              


```
using UnityEngine;
using UnityEngine.Networking;
using System.Threading.Tasks;// This example demonstrates how to load an AssetBundle asynchronously.
public class AssetBundleLoader : MonoBehaviour
{
    // Load an AssetBundle from a URL asynchronously
    public async Task<AssetBundle> LoadAssetBundleAsync(string url)
    {
        using (UnityWebRequest request = UnityWebRequestAssetBundle.GetAssetBundle(url))
        {
            var operation = request.SendWebRequest();            while (!operation.isDone)
                await Task.Yield();            if (request.result != UnityWebRequest.Result.Success)
            {
                Debug.LogError($"Failed to load AssetBundle: {request.error}");
                return null;
            }            return DownloadHandlerAssetBundle.GetContent(request);
        }
    }    // Example usage
    public async void LoadBundle()
    {
        // Replace this with your own URL.
        // You can use python -m http.server to serve files locally.
        // Remember to first build the AssetBundle
        string bundleUrl = "http://example.com/mybundle.assetbundle";
        AssetBundle bundle = await LoadAssetBundleAsync(bundleUrl);        if (bundle != null)
        {
            // Load assets from bundle
            GameObject prefab = bundle.LoadAsset<GameObject>("MyPrefab");
            Instantiate(prefab);            // Remember to unload when done
            bundle.Unload(false);
        }
    }
}
```





Additional resources: [AssetBundle](AssetBundle.html), [DownloadHandlerAssetBundle](Networking.DownloadHandlerAssetBundle.html), [GetAssetBundle](Networking.UnityWebRequestAssetBundle.GetAssetBundle.html).





### Static Methods



| Method | Description |
| --- | --- |
| GetAssetBundle | Creates a UnityWebRequest optimized for downloading a Unity Asset Bundle via HTTP GET. |


            
