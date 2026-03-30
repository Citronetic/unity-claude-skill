This version of Unity is unsupported.



# UploadHandlerRaw Constructor




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

public UploadHandlerRaw(byte[] data);






### Parameters



| Parameter | Description |
| --- | --- |
| data | Raw data to transmit to the remote server. |





### Description



General constructor. Contents of the `input` argument are copied into a native buffer.




---








## Declaration

public UploadHandlerRaw(NativeArray<byte> data,
bool transferOwnership);






### Parameters



| Parameter | Description |
| --- | --- |
| data | The raw data to transmit to the remote server. |
| transferOwnership | When true, the upload handler takes ownership of the passed NativeArray. This means the upload handler will dispose of the NativeArray when the upload handler itself is disposed of. When false, NativeArray is owned by the caller and you must ensure it remains valid until the upload is complete. |





### Description



Creates an upload handler using NativeArray.




---








## Declaration

public UploadHandlerRaw(ReadOnly<byte> data);






### Parameters



| Parameter | Description |
| --- | --- |
| data | The raw data to transmit to the remote server. |





### Description



Creates an upload handler using a read-only NativeArray. The passed array is owned by the caller and you must ensure it remains valid until the upload is complete.


            
