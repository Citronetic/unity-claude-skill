This version of Unity is unsupported.



# [DownloadHandlerBuffer](Networking.DownloadHandlerBuffer.html).GetContent




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

public static string GetContent([Networking.UnityWebRequest](Networking.UnityWebRequest.html) www);






### Parameters



| Parameter | Description |
| --- | --- |
| www | A finished UnityWebRequest object with DownloadHandlerBuffer attached. |





### Returns



**string**
        The same as DownloadHandlerBuffer.text





### Description



Returns a copy of the native-memory buffer interpreted as a UTF8 string.





A static function provided for convenience; equivalent to ((DownloadHandlerBuffer)www.downloadHandler).text.


            
