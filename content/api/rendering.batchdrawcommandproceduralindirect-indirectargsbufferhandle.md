This version of Unity is unsupported.



# [BatchDrawCommandProceduralIndirect](Rendering.BatchDrawCommandProceduralIndirect.html).indirectArgsBufferHandle




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












                    public [GraphicsBufferHandle](GraphicsBufferHandle.html) indirectArgsBufferHandle;






### Description



[GraphicsBufferHandle](GraphicsBufferHandle.html) of the [GraphicsBuffer](GraphicsBuffer.html) from which the indirect draw command will be read.





If indexBufferHandle is default then the data at indirectArgsBufferOffset in the referenced buffer is interpreted as
                    an [IndirectDrawArgs](GraphicsBuffer.IndirectDrawArgs.html), and a non indexed indirect draw call will be issued.

                    If indexBufferHandle is not default the data will instead be interpreted as an [IndirectDrawIndexedArgs](GraphicsBuffer.IndirectDrawIndexedArgs.html)
                    and an indexed indirect draw call will be issued.


            
