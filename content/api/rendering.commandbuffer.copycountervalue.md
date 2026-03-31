This version of Unity is unsupported.



# [CommandBuffer](Rendering.CommandBuffer.html).CopyCounterValue




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

public void CopyCounterValue([ComputeBuffer](ComputeBuffer.html) src,
[ComputeBuffer](ComputeBuffer.html) dst,
uint dstOffsetBytes);






## Declaration

public void CopyCounterValue([ComputeBuffer](ComputeBuffer.html) src,
[GraphicsBuffer](GraphicsBuffer.html) dst,
uint dstOffsetBytes);






## Declaration

public void CopyCounterValue([GraphicsBuffer](GraphicsBuffer.html) src,
[ComputeBuffer](ComputeBuffer.html) dst,
uint dstOffsetBytes);






## Declaration

public void CopyCounterValue([GraphicsBuffer](GraphicsBuffer.html) src,
[GraphicsBuffer](GraphicsBuffer.html) dst,
uint dstOffsetBytes);






### Parameters



| Parameter | Description |
| --- | --- |
| src | Append/consume buffer to copy the counter from. |
| dst | A buffer to copy the counter to. |
| dstOffsetBytes | Target byte offset in dst buffer. |





### Description



Adds a command to copy [ComputeBuffer](ComputeBuffer.html) or [GraphicsBuffer](GraphicsBuffer.html) counter value.





Note: this command can not be used on [LightEvent](Rendering.LightEvent.html) command buffers.

Additional resources: [ComputeBuffer.CopyCount](ComputeBuffer.CopyCount.html) and [GraphicsBuffer.CopyCount](GraphicsBuffer.CopyCount.html).


            
