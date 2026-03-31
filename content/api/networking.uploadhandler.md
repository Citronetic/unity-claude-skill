This version of Unity is unsupported.



# UploadHandler





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



Helper object for [UnityWebRequest](Networking.UnityWebRequest.html)s. Manages the buffering and transmission of body data during HTTP requests.





When attached to a [UnityWebRequest](Networking.UnityWebRequest.html), an UploadHandler object handles all information regarding the buffering and transmission of body data during an HTTP request. By placing data in an UploadHandler and attaching it to a [UnityWebRequest](Networking.UnityWebRequest.html), the [UnityWebRequest](Networking.UnityWebRequest.html) is implicitly instructed to transmit the UploadHandler's data to the remote server. The data will always be delivered as HTTP request body data.

UploadHandler is a base class and cannot be directly instantiated. Currently, two types of UploadHandlers are available: [UploadHandlerRaw](Networking.UploadHandlerRaw.html) and [UploadHandlerFile](Networking.UploadHandlerFile.html).

Additional resources: [UnityWebRequest](Networking.UnityWebRequest.html), [UploadHandlerRaw](Networking.UploadHandlerRaw.html), [UploadHandlerFile](Networking.UploadHandlerFile.html).





### Properties



| Property | Description |
| --- | --- |
| contentType | Determines the default Content-Type header which will be transmitted with the outbound HTTP request. |
| data | The raw data which will be transmitted to the remote server as body data. (Read Only) |
| progress | Returns the proportion of data uploaded to the remote server compared to the total amount of data to upload. (Read Only) |





### Public Methods



| Method | Description |
| --- | --- |
| Dispose | Signals that this UploadHandler is no longer being used, and should clean up any resources it is using. |


            
