This version of Unity is unsupported.



# [VideoAudioOutputMode](Video.VideoAudioOutputMode.html).APIOnly




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



















### Description



Send the embedded audio to the associated [AudioSampleProvider](Experimental.Audio.AudioSampleProvider.html).





Use this setting if you want to use Unity scripting to alter the video’s raw audio data. This is useful if you want direct, low-level control over the audio, or to analyse the data.
Since the audio data goes through scripts instead of to the system's speakers or an Audio Mixer, the audio won't automatically play or be heard by the user. Therefore, if you want audio playback, you need to implement a way to process and output the data to suit your needs (via third-party plugins or custom implementations.


            
