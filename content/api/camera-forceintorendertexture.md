This version of Unity is unsupported.



# [Camera](Camera.html).forceIntoRenderTexture




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




                [Switch to Manual](../Manual/class-Camera.html)







                    public bool forceIntoRenderTexture;






### Description



Should camera rendering be forced into a RenderTexture.





If set to true camera rendering will always happen into a RenderTexture instead of direct into the backbuffer. This can be useful if you have no image effects but want to use command buffers to act on the current rendering target.


            
