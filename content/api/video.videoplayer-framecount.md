This version of Unity is unsupported.



# [VideoPlayer](Video.VideoPlayer.html).frameCount




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












                    public ulong frameCount;






### Description



Number of frames in the current video content. (Read Only)





This value may be adjusted as the frameCount changes during playback. The value is most accurate after the video completes a full playthrough.

For URL sources, this will only be set once the source preparation is completed.  See [VideoPlayer.Prepare](Video.VideoPlayer.Prepare.html).

**Note:** On WebGL, because the frame rate is not known, the frame count assumes a rate of 24FPS. See [VideoPlayer.frameRate](Video.VideoPlayer-frameRate.html).


            
