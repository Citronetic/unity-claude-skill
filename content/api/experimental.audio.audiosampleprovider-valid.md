This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [AudioSampleProvider](Experimental.Audio.AudioSampleProvider.html).valid




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












                    public bool valid;






### Description



True if the object is valid.





The object becomes invalid when its owner (see [AudioSampleProvider.owner](Experimental.Audio.AudioSampleProvider-owner.html) releases it. However, the provider cannot be destroyed while a call is ongoing so there will be no race condition during destruction.

A [VideoPlayer](Video.VideoPlayer.html) releases all its providers when playback is stopped.


            
