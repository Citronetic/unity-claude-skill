This version of Unity is unsupported.



# DownloadHandlerBuffer





class in
          UnityEngine.Networking



/



Inherits from:[Networking.DownloadHandler](Networking.DownloadHandler.html)



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



A general-purpose [DownloadHandler](Networking.DownloadHandler.html) implementation which stores received data in a native byte buffer.





This is a general-purpose [DownloadHandler](Networking.DownloadHandler.html) subclass. It stores received data in native memory. It will preallocated a data buffer based on any received `Content-Length` header, but will expand its buffer should the actual download size exceed the value of `Content-Length` header (or if a `Content-Length` header is not received).

*Note:* When accessing [DownloadHandler.data](Networking.DownloadHandler-data.html) or [DownloadHandler.text](Networking.DownloadHandler-text.html) on this subclass, a new byte array or string will be allocated each time the property is accessed.





### Constructors



| Constructor | Description |
| --- | --- |
| DownloadHandlerBuffer | Default constructor. |





### Static Methods



| Method | Description |
| --- | --- |
| GetContent | Returns a copy of the native-memory buffer interpreted as a UTF8 string. |





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







            
