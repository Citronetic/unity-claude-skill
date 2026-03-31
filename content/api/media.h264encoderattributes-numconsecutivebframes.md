This version of Unity is unsupported.



# [H264EncoderAttributes](Media.H264EncoderAttributes.html).numConsecutiveBFrames




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












                    public uint numConsecutiveBFrames;






### Description



The maximum number of consecutive B frames between I and P frames.





Set a value of 0 to disable B frames. Set a value of 1 or greater to enable B frames. If you use the Baseline profile, the number of consecutive B frames is always zero. The encoder overrides nonzero values.

                _Windows:_ The maximum number of B frames allowed is 2.

                _macOS:_ Set a nonzero value to enable B frames. When B frames are enabled, you cannot control the maximum number of B frames.


            
