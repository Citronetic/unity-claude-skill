This version of Unity is unsupported.



# [VideoPlayer](Video.VideoPlayer.html).controlledAudioTrackMaxCount




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












                    public static ushort controlledAudioTrackMaxCount;






### Description



Maximum number of audio tracks that can be controlled. (Read Only)





When playing audio from a URL, the number of audio tracks is not known in advance.  It is up to the user to specify the number of controlled audio tracks through [VideoPlayer.controlledAudioTrackCount](Video.VideoPlayer-controlledAudioTrackCount.html).  Other tracks will be ignored and silenced.  In this scenario, [VideoPlayer.audioTrackCount](Video.VideoPlayer-audioTrackCount.html) will be set to the actual number of tracks during playback, after preparation is complete.

Additional resources: [VideoPlayer.Prepare](Video.VideoPlayer.Prepare.html).


            
