This version of Unity is unsupported.



# [VideoPlayer](Video.VideoPlayer.html).EnableAudioTrack




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















## Declaration

public void EnableAudioTrack(ushort trackIndex,
bool enabled);






### Parameters



| Parameter | Description |
| --- | --- |
| trackIndex | Index of the audio track to enable/disable. |
| enabled | True for enabling the track. False for disabling the track. |





### Description



Enable/disable audio track decoding. Only effective when the [VideoPlayer](Video.VideoPlayer.html) is not currently playing.





Disabling audio tracks helps save processing resources by disabling audio decoding completely. This is different to muting a track during playback, which turns the audio track volume to 0 but still decodes the audio samples.


            
