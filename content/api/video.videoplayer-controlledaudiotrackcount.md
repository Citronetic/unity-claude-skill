This version of Unity is unsupported.



# [VideoPlayer](Video.VideoPlayer.html).controlledAudioTrackCount




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












                    public ushort controlledAudioTrackCount;






### Description



Number of audio tracks that this [VideoPlayer](Video.VideoPlayer.html) will take control of.





The other audio tracks will be silent. The maximum allowed number of tracks is defined by [VideoPlayer.controlledAudioTrackMaxCount](Video.VideoPlayer-controlledAudioTrackMaxCount.html).

The actual number of audio tracks cannot be known in advance when playing URLs, which is why this value is independent of the [VideoPlayer.audioTrackCount](Video.VideoPlayer-audioTrackCount.html) property.


            
