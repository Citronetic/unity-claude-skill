This version of Unity is unsupported.



# [BatchCullingContext](Rendering.BatchCullingContext.html).cullingSplits




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












                    public NativeArray<CullingSplit> cullingSplits;






### Description



The array of [CullingSplit](Rendering.CullingSplit.html) structs.





A Camera and a Spot Light have one culling split. A Point Light has six splits, one split per cubemap face. Directional Lights have 1-4 splits depending on their shadow cascade count.


            
