This version of Unity is unsupported.



# UnityWebRequest Constructor




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

public UnityWebRequest();






## Declaration

public UnityWebRequest(string url);






## Declaration

public UnityWebRequest(Uri uri);






## Declaration

public UnityWebRequest(string url,
string method);






## Declaration

public UnityWebRequest(Uri uri,
string method);






## Declaration

public UnityWebRequest(string url,
string method,
[Networking.DownloadHandler](Networking.DownloadHandler.html) downloadHandler,
[Networking.UploadHandler](Networking.UploadHandler.html) uploadHandler);






## Declaration

public UnityWebRequest(Uri uri,
string method,
[Networking.DownloadHandler](Networking.DownloadHandler.html) downloadHandler,
[Networking.UploadHandler](Networking.UploadHandler.html) uploadHandler);






### Parameters



| Parameter | Description |
| --- | --- |
| url | The target URL with which this UnityWebRequest will communicate. Also accessible via the url property. |
| uri | The target URI to which form data will be transmitted. |
| method | HTTP GET, POST, etc. methods. |
| downloadHandler | Replies from the server. |
| uploadHandler | Upload data to the server. |





### Description



Creates a UnityWebRequest with the default options and no attached [DownloadHandler](Networking.DownloadHandler.html) or [UploadHandler](Networking.UploadHandler.html). Default method is `GET`.





The raw constructor is useful for use cases which require detailed custom configuration of a [UnityWebRequest](Networking.UnityWebRequest.html). Most use cases will require the attachment of a [DownloadHandler](Networking.DownloadHandler.html), an [UploadHandler](Networking.UploadHandler.html) or both in order to function propertly.

Additional resources: [Get](Networking.UnityWebRequest.Get.html), [GetTexture](Networking.UnityWebRequest.GetTexture.html), [GetAudioClip](Networking.UnityWebRequest.GetAudioClip.html), [GetAssetBundle](Networking.UnityWebRequest.GetAssetBundle.html), [Head](Networking.UnityWebRequest.Head.html), [Post](Networking.UnityWebRequest.Post.html), [Put](Networking.UnityWebRequest.Put.html), [Delete](Networking.UnityWebRequest.Delete.html).


            
