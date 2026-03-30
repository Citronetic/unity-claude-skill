This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [AudioSampleProvider](Experimental.Audio.AudioSampleProvider.html).enableSilencePadding




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












                    public bool enableSilencePadding;






### Description



If true, buffers produced by ConsumeSampleFrames will get padded when silence if there are less available than asked for. Otherwise, the extra sample frames in the buffer will be left unchanged.





Without silence padding, [AudioSampleProvider.ConsumeSampleFrames](Experimental.Audio.AudioSampleProvider.ConsumeSampleFrames.html) will return how many sample frames of the buffer passed were acutally written to, using the available sample frames, and the rest of the buffer will be left intact.

With silence padding enabled, the method will completely fill the buffer passed in and provide silence if needed, in case there were not enough available sample frames.


            
