This version of Unity is unsupported.



# [DownloadHandlerTexture](Networking.DownloadHandlerTexture.html).GetContent




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

public static [Texture2D](Texture2D.html) GetContent([Networking.UnityWebRequest](Networking.UnityWebRequest.html) www);






### Parameters



| Parameter | Description |
| --- | --- |
| www | A finished UnityWebRequest object with DownloadHandlerTexture attached. |





### Returns



**Texture2D**
        The same as [DownloadHandlerTexture.texture](Networking.DownloadHandlerTexture-texture.html)





### Description



Returns the downloaded [Texture](Texture.html), or `null`.





A static function provided for convenience; equivalent to ((DownloadHandlerTexture)www.downloadHandler).texture.


            
