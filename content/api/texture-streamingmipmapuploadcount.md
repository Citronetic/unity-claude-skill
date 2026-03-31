This version of Unity is unsupported.



# [Texture](Texture.html).streamingMipmapUploadCount




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












                    public static ulong streamingMipmapUploadCount;






### Description



How many times has a Texture been uploaded due to Texture mipmap streaming.





Each time the streaming system decides that a different mipmap level should be loaded for a Texture, a new read and upload is scheduled. This counts how many uploads has happened since the game started running.


            
