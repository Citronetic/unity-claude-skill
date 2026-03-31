This version of Unity is unsupported.



# DownloadHandler





class in
          UnityEngine.Networking



/



Implemented in:[UnityEngine.UnityWebRequestModule](UnityEngine.UnityWebRequestModule.html)


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



Manage and process HTTP response body data received from a remote server.





DownloadHandler objects are helper objects. When attached to a [UnityWebRequest](Networking.UnityWebRequest.html), they define how to handle HTTP response body data received from a remote server. Generally, they are used to buffer, stream and/or process response bodies.

DownloadHandler is a base class. Depending on usage scenario, different specialized classes are available. [DownloadHandlerBuffer](Networking.DownloadHandlerBuffer.html) provides basic buffering, while [DownloadHandlerTexture](Networking.DownloadHandlerTexture.html) and [DownloadHandlerAssetBundle](Networking.DownloadHandlerAssetBundle.html) provide more efficient solutions for [Texture](Texture.html) and [AssetBundle](AssetBundle.html) downloads.

For custom use cases, see [DownloadHandlerScript](Networking.DownloadHandlerScript.html).

Additional resources: [UnityWebRequest](Networking.UnityWebRequest.html), [DownloadHandlerBuffer](Networking.DownloadHandlerBuffer.html), [DownloadHandlerTexture](Networking.DownloadHandlerTexture.html), [DownloadHandlerAudioClip](Networking.DownloadHandlerAudioClip.html), [DownloadHandlerAssetBundle](Networking.DownloadHandlerAssetBundle.html), [DownloadHandlerScript](Networking.DownloadHandlerScript.html).





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
| GetData | Callback, invoked when the data property is accessed. |
| GetNativeData | Provides allocation-free access to the downloaded data as a NativeArray. |
| GetProgress | Callback, invoked when UnityWebRequest.downloadProgress is accessed. |
| GetText | Callback, invoked when the text property is accessed. |
| ReceiveContentLengthHeader | Callback, invoked with a Content-Length header is received. |
| ReceiveData | Callback, invoked as data is received from the remote server. |


            
