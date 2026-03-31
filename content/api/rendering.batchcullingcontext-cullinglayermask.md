This version of Unity is unsupported.



# [BatchCullingContext](Rendering.BatchCullingContext.html).cullingLayerMask




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












                    public uint cullingLayerMask;






### Description



The `cullingLayerMask` value of the object from which the culling is invoked. The draw command is discarded by the internal culling if the expression `(1 << layer) & cullingLayerMask` is false. Using this field is optional, use it for performance or other optimization purposes.


            
