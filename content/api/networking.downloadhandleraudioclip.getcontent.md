This version of Unity is unsupported.



# [DownloadHandlerAudioClip](Networking.DownloadHandlerAudioClip.html).GetContent




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

public static [AudioClip](AudioClip.html) GetContent([Networking.UnityWebRequest](Networking.UnityWebRequest.html) www);






### Parameters



| Parameter | Description |
| --- | --- |
| www | A finished UnityWebRequest object with DownloadHandlerAudioClip attached. |





### Returns



**AudioClip**
        The same as [DownloadHandlerAudioClip.audioClip](Networking.DownloadHandlerAudioClip-audioClip.html)





### Description



Returns the downloaded [AudioClip](AudioClip.html), or `null`.





A static function provided for convenience; equivalent to ((DownloadHandlerAudioClip)www.downloadHandler).audioClip.


            
