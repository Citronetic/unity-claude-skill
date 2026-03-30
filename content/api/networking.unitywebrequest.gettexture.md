This version of Unity is unsupported.


                  **Removed**





# [UnityWebRequest](Networking.UnityWebRequest.html).GetTexture




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













                        **Obsolete**
                        UnityWebRequest.GetTexture is obsolete. Use UnityWebRequestTexture.GetTexture instead.
**Upgrade to [GetTexture](Networking.UnityWebRequestTexture.GetTexture.html)**




## Declaration

public static [Networking.UnityWebRequest](Networking.UnityWebRequest.html) GetTexture(string uri);




                        **Obsolete**
                        UnityWebRequest.GetTexture is obsolete. Use UnityWebRequestTexture.GetTexture instead.
**Upgrade to [GetTexture](Networking.UnityWebRequestTexture.GetTexture.html)**




## Declaration

public static [Networking.UnityWebRequest](Networking.UnityWebRequest.html) GetTexture(string uri,
bool nonReadable);






### Parameters



| Parameter | Description |
| --- | --- |
| uri | The URI of the image to download. |
| nonReadable | If true, the texture's raw data will not be accessible to script. This can conserve memory. Default: false. |





### Returns



**UnityWebRequest**
        A [UnityWebRequest](Networking.UnityWebRequest.html) properly configured to download an image and convert it to a [Texture](Texture.html).





### Description



Creates a [UnityWebRequest](Networking.UnityWebRequest.html) intended to download an image via HTTP GET and create a [Texture](Texture.html) based on the retrieved data.





**Obsolete** - instead use [UnityWebRequestTexture.GetTexture](Networking.UnityWebRequestTexture.GetTexture.html).

This method creates a [UnityWebRequest](Networking.UnityWebRequest.html) and sets the target URL to the string `uri` argument. This method sets no other flags or custom headers.

This method attaches a [DownloadHandlerTexture](Networking.DownloadHandlerTexture.html) object to the [UnityWebRequest](Networking.UnityWebRequest.html). [DownloadHandlerTexture](Networking.DownloadHandlerTexture.html) is a specialized [DownloadHandler](Networking.DownloadHandler.html) which is optimized for storing images which are to be used as textures in the Unity Engine. Using this class significantly reduces memory reallocation compared to downloading raw bytes and creating a texture manually in script. In addition, texture conversion will be performed on a worker thread.

This method attaches no [UploadHandler](Networking.UploadHandler.html) to the [UnityWebRequest](Networking.UnityWebRequest.html).

UnityWebRequest.GetTexture is obsolete. Use UnityWebRequestTexture.GetTexture instead.


            
