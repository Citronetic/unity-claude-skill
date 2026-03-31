This version of Unity is unsupported.



# [DownloadHandlerAssetBundle](Networking.DownloadHandlerAssetBundle.html).GetContent




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

public static [AssetBundle](AssetBundle.html) GetContent([Networking.UnityWebRequest](Networking.UnityWebRequest.html) www);






### Parameters



| Parameter | Description |
| --- | --- |
| www | A finished UnityWebRequest object with DownloadHandlerAssetBundle attached. |





### Returns



**AssetBundle**
        The same as [DownloadHandlerAssetBundle.assetBundle](Networking.DownloadHandlerAssetBundle-assetBundle.html)





### Description



Returns the downloaded [AssetBundle](AssetBundle.html), or `null`.





A static function provided for convenience; equivalent to ((DownloadHandlerAssetBundle)www.downloadHandler).assetBundle.


            
