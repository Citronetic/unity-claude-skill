This version of Unity is unsupported.



# [RenderPickingResult](RenderPickingResult.html).renderedPickingIndexCount




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












                    public int renderedPickingIndexCount;






### Description



The number of consecutive picking indices used during the current [RenderPickingCallback](HandleUtility.RenderPickingCallback.html).





If you return a [RenderPickingResult](RenderPickingResult.html) struct with 0 count, the rendering is considered a [RenderPickingResult.NoOperation](RenderPickingResult.NoOperation.html) and the resolve callback is not called, even if you did render something.


            
