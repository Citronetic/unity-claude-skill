This version of Unity is unsupported.



# [ComputeBuffer](ComputeBuffer.html).SetCounterValue




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

public void SetCounterValue(uint counterValue);






### Parameters



| Parameter | Description |
| --- | --- |
| counterValue | Value of the append/consume counter. |





### Description



Sets counter value of append/consume buffer.





Append/consume and counter buffers (see [ComputeBufferType.Append](ComputeBufferType.Append.html), [ComputeBufferType.Counter](ComputeBufferType.Counter.html)) keep track of the number of elements in them with a special counter variable.
SetCounterValue explicitly sets the counter value.

This can be used to reset the counter or to set it to a specific value.

Note: SetCounterValue can not be called while the buffer is bound via [Graphics.SetRandomWriteTarget](Graphics.SetRandomWriteTarget.html).

Additional resources: [CopyCount](ComputeBuffer.CopyCount.html), [Graphics.SetRandomWriteTarget](Graphics.SetRandomWriteTarget.html).


            
