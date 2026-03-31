This version of Unity is unsupported.



# DownloadHandlerAssetBundle





class in
          UnityEngine.Networking



/



Inherits from:[Networking.DownloadHandler](Networking.DownloadHandler.html)



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



A [DownloadHandler](Networking.DownloadHandler.html) subclass specialized for downloading [AssetBundle](AssetBundle.html)s.





This subclass streams downloaded data into Unity's AssetBundle decompression and decoding system on worker threads, providing efficient downloading and processing for [AssetBundle](AssetBundle.html) objects.

The advantage to this download handler is that it can stream data to Unity's AssetBundle system. After all the data has been received, the AssetBundle is available as an [AssetBundle](AssetBundle.html) object. Only one copy of the [AssetBundle](AssetBundle.html) object is created. This reduces runtime memory allocation and the memory impact of loading the AssetBundle. It also allows AssetBundles to be partially used while not fully downloaded, so you can stream assets.

All downloading and decompression occurs on worker threads, except on the Web platform.

Downloaded AssetBundle data is processed by a `DownloadHandlerAssetBundle` object, which has a special `assetBundle` property to retrieve the [AssetBundle](AssetBundle.html) object.

Due to the way the AssetBundle system works, all AssetBundles must have an address associated with them. Generally, this is the nominal URL at which they're located (meaning the URL before any redirects). In almost all cases, you should pass in the same URL as you passed to the UnityWebRequest. When using the High Level API (HLAPI), this is done for you.

Additional resources: [UnityWebRequestAssetBundle](Networking.UnityWebRequestAssetBundle.html)


              


```
using UnityEngine;
using UnityEngine.Networking;
using System.Collections;public class MyBehaviour : MonoBehaviour {
    void Start() {
        StartCoroutine(GetAssetBundle());
    }    IEnumerator GetAssetBundle() {
        UnityWebRequest www = new UnityWebRequest("https://www.my-server.com");
        DownloadHandlerAssetBundle handler = new DownloadHandlerAssetBundle(www.url, 0);
        www.downloadHandler = handler;
        yield return www.SendWebRequest();        if (www.result != UnityWebRequest.Result.Success) {
            Debug.Log(www.error);
        }
        else {
            // Extracts AssetBundle
            AssetBundle bundle = handler.assetBundle;
        }
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| assetBundle | Returns the downloaded AssetBundle, or null. (Read Only) |
| autoLoadAssetBundle | If true, the AssetBundle will be loaded as part of the UnityWebRequest process. If false, the AssetBundle will be loaded on demand when accessing the DownloadHandlerAssetBundle.assetBundle property. |
| isDownloadComplete | Returns true if the data downloading portion of the operation is complete. |





### Constructors



| Constructor | Description |
| --- | --- |
| DownloadHandlerAssetBundle | Standard constructor for non-cached asset bundles. |





### Protected Methods



| Method | Description |
| --- | --- |
| GetData | Not implemented. Throws NotSupportedException. |
| GetText | Not implemented. Throws NotSupportedException. |





### Static Methods



| Method | Description |
| --- | --- |
| GetContent | Returns the downloaded AssetBundle, or null. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| data | Returns the raw bytes downloaded from the remote server, or null. (Read Only) |
| error | Error message describing a failure that occurred inside the download handler. |
| isDone | Returns true if this DownloadHandler has been informed by its parent UnityWebRequest that all data has been received, and this DownloadHandler has completed any necessary post-download processing. (Read Only) |
| nativeData | Provides direct access to downloaded data. |
| text | Convenience property. Returns the bytes from data interpreted as a UTF8 string. (Read Only) |






### Public Methods

| Method | Description |
| --- | --- |
| Dispose | Signals that this DownloadHandler is no longer being used, and should clean up any resources it is using. |



### Protected Methods

| Method | Description |
| --- | --- |
| CompleteContent | Callback, invoked when all data has been received from the remote server. |
| GetNativeData | Provides allocation-free access to the downloaded data as a NativeArray. |
| GetProgress | Callback, invoked when UnityWebRequest.downloadProgress is accessed. |
| ReceiveContentLengthHeader | Callback, invoked with a Content-Length header is received. |
| ReceiveData | Callback, invoked as data is received from the remote server. |







            
