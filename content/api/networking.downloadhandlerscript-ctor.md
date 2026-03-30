This version of Unity is unsupported.



# DownloadHandlerScript Constructor




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

public DownloadHandlerScript();






### Description



Create a DownloadHandlerScript which allocates new buffers when passing data to callbacks.





This default constructor places this DownloadHanderScript into *non-preallocated mode*. This affects the operation of the ReceiveData callback.

When in non-preallocated mode, a new managed byte array will be allocated each time ReceiveData is called, and the length of the array passed to ReceiveData will always be equal to the number of new bytes available for consumption.

This is convenient, but may cause undesirable garbage collection. If your use case requires an implementation which avoids unnecessary garbage collection, use preallocated mode instead.




---








## Declaration

public DownloadHandlerScript(byte[] preallocatedBuffer);






### Parameters



| Parameter | Description |
| --- | --- |
| preallocatedBuffer | A byte buffer into which data will be copied, for use by DownloadHandler.ReceiveData. |





### Description



Create a DownloadHandlerScript which reuses a preallocated buffer to pass data to callbacks.





This constructor places this [DownloadHandlerScript](Networking.DownloadHandlerScript.html) into *preallocated mode*. This affects the operation of the [DownloadHandler.ReceiveData](Networking.DownloadHandler.ReceiveData.html) callback.

When in preallocated mode, the `preallocatedBuffer` byte array will be repeatedly reused to pass data to the [DownloadHandler.ReceiveData](Networking.DownloadHandler.ReceiveData.html) callback, instead of allocating new buffers each time. The system will not zero-out the array between uses, so the `dataLength` argument to [DownloadHandler.ReceiveData](Networking.DownloadHandler.ReceiveData.html) must be used to discover which bytes are new.

When in this mode, the [DownloadHandlerScript](Networking.DownloadHandlerScript.html) will not allocate any memory during the download or processing of HTTP response data. If your use case is sensitive to garbage collection, usage of preallocated mode is recommended.


            
