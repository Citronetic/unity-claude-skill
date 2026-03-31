This version of Unity is unsupported.



# [AsyncReadManagerMetrics](Unity.IO.LowLevel.Unsafe.AsyncReadManagerMetrics.html).GetTotalSizeOfNonASRMReadsBytes




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

public static ulong GetTotalSizeOfNonASRMReadsBytes(bool emptyAfterRead);






### Parameters



| Parameter | Description |
| --- | --- |
| emptyAfterRead | Set to true to reset the underlying data counter to zero after calling this function. Set to false if you want each call to this function to return the running, cumulative total. |





### Returns



**ulong**
        Number of bytes of data read through systems other than the [AsyncReadManager](Unity.IO.LowLevel.Unsafe.AsyncReadManager.html) since you started metrics collection or you cleared this data counter by setting `emptyAfterRead` to `true`.





### Description



Returns the amount of data (in bytes) read through systems other than the [AsyncReadManager](Unity.IO.LowLevel.Unsafe.AsyncReadManager.html).


            
