This version of Unity is unsupported.



# [VideoPlayer](Video.VideoPlayer.html).audioOutputMode




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












                    public [Video.VideoAudioOutputMode](Video.VideoAudioOutputMode.html) audioOutputMode;






### Description



Destination for the audio embedded in the video.





**Note:** WebGL only fully supports [VideoAudioOutputMode.None](Video.VideoAudioOutputMode.None.html) and [VideoAudioOutputMode.Direct](Video.VideoAudioOutputMode.Direct.html). If you set the output mode to [VideoAudioOutputMode.AudioSource](Video.VideoAudioOutputMode.AudioSource.html), Unity ignores all AudioSource fields except mute. This is because 3D spatialization of video playback is not available on the web.


            
