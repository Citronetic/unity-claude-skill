This version of Unity is unsupported.



# BatchBufferTarget





enumeration


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



Expected target for the buffer passed to [BatchRendererGroup.AddBatch](Rendering.BatchRendererGroup.AddBatch.html).





.





### Properties



| Property | Description |
| --- | --- |
| Unknown | This is the default uninitialized value for this enum. It is here as a placeholder. Unity will never return this, and you will never use it. |
| UnsupportedByUnderlyingGraphicsApi | The Batch Renderer does not support the active graphics API because this API does not provide buffer targets for the BatchRendererGroup. |
| RawBuffer | If [Rendering.BatchBufferTarget] returns this value, the per batch buffer must be a raw buffer. |
| ConstantBuffer | If [Rendering.BatchBufferTarget] returns this value, the per batch buffer must be a constant buffer. |


            
