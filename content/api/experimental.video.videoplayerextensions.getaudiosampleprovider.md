This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [VideoPlayerExtensions](Experimental.Video.VideoPlayerExtensions.html).GetAudioSampleProvider




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

public static [Experimental.Audio.AudioSampleProvider](Experimental.Audio.AudioSampleProvider.html) GetAudioSampleProvider([Video.VideoPlayer](Video.VideoPlayer.html) vp,
ushort trackIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| vp | The "this" pointer for the extension method. |
| trackIndex | The audio track index for which the sample provider is queried. |





### Returns



**AudioSampleProvider**
        The sample provider for the specified track.





### Description



Return the [AudioSampleProvider](Experimental.Audio.AudioSampleProvider.html) for the specified track, used to receive audio samples during playback.





The sample provider can only be obtained when [VideoPlayer.audioOutputMode](Video.VideoPlayer-audioOutputMode.html) is set to [VideoAudioOutputMode.APIOnly](Video.VideoAudioOutputMode.APIOnly.html).


            
