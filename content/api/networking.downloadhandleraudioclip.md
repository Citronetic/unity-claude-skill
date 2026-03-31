This version of Unity is unsupported.



# DownloadHandlerAudioClip





class in
          UnityEngine.Networking



/



Inherits from:[Networking.DownloadHandler](Networking.DownloadHandler.html)



/



Implemented in:[UnityEngine.UnityWebRequestAudioModule](UnityEngine.UnityWebRequestAudioModule.html)


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



A [DownloadHandler](Networking.DownloadHandler.html) subclass specialized for downloading audio data for use as [AudioClip](AudioClip.html) objects.





DownloadHandlerAudioClip stores received data in a pre-allocated Unity [AudioClip](AudioClip.html) object. It is optimized for downloading audio data from Web servers, and may perform audio data decompression and decoding on a worker thread.

For use cases where you wish to download an audio clip via HTTP and use it as an [AudioClip](AudioClip.html) within Unity, usage of this class is strongly recommended.


              


```
using System.Collections;
using UnityEngine;
using UnityEngine.Networking;public class AudioDownloader : MonoBehaviour {    void Start () {
        StartCoroutine(GetAudioClip());
    }    IEnumerator GetAudioClip() {
        using (var uwr = UnityWebRequestMultimedia.GetAudioClip("https://myserver.com/mysound.ogg", AudioType.OGGVORBIS)) {
            yield return uwr.SendWebRequest();
            if (uwr.result != UnityWebRequest.Result.Success) {
                Debug.LogError(uwr.error);
                yield break;
            }            AudioClip clip = DownloadHandlerAudioClip.GetContent(uwr);
            // use audio clip
        }
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| audioClip | Returns the downloaded AudioClip, or null. (Read Only) |
| compressed | Create AudioClip that is compressed in memory.Note: When streamAudio is true, it supersedes compression, and the download handler creates an AudioClip similar to an imported clip with the loadType AudioClipLoadType.Streaming. |
| streamAudio | Create streaming AudioClip. |





### Constructors



| Constructor | Description |
| --- | --- |
| DownloadHandlerAudioClip | Constructor, specifies what kind of audio data is going to be downloaded. |





### Static Methods



| Method | Description |
| --- | --- |
| GetContent | Returns the downloaded AudioClip, or null. |





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
| GetData | Callback, invoked when the data property is accessed. |
| GetNativeData | Provides allocation-free access to the downloaded data as a NativeArray. |
| GetProgress | Callback, invoked when UnityWebRequest.downloadProgress is accessed. |
| GetText | Callback, invoked when the text property is accessed. |
| ReceiveContentLengthHeader | Callback, invoked with a Content-Length header is received. |
| ReceiveData | Callback, invoked as data is received from the remote server. |







            
