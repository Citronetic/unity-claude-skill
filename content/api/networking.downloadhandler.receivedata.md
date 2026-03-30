This version of Unity is unsupported.



# [DownloadHandler](Networking.DownloadHandler.html).ReceiveData




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

protected bool ReceiveData(byte[] data,
int dataLength);






### Parameters



| Parameter | Description |
| --- | --- |
| data | A buffer containing unprocessed data, received from the remote server. |
| dataLength | The number of bytes in data which are new. |





### Returns



**bool**
        True if the download should continue, false to abort.





### Description



Callback, invoked as data is received from the remote server.





This callback is invoked on the main thread.

Data arriving from the remote server for a [DownloadHandlerScript](Networking.DownloadHandlerScript.html) is kept in a temporary ringbuffer.

When there is unprocessed data in the buffer, this method will be called once per frame to hand chunks of that data to script. (If multiple datagrams arrive within one frame, they will be combined before being passed to this callback.) The data byte array contains the received data.

When operating in non-preallocated mode, the system will allocate a new byte array each time this callback is invoked. In this case, `data.Length` will be equal to `dataLength`, and you may safely ignore the `dataLength` argument.

When operating in preallocated mode, the data argument will be the byte array passed in at construction time, and the dataLength argument indicates which bytes in the byte array are new. (**Important:** The system does *not* zero-out the array between calls.)

See DownloadHandlerScript.ctor for more information on allocation modes.


            
