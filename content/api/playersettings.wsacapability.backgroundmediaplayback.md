This version of Unity is unsupported.



# [PlayerSettings.WSACapability](PlayerSettings.WSACapability.html).BackgroundMediaPlayback




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




                [Switch to Manual](../Manual/class-PlayerSettings.html)














### Description



Allows your application to continue media playback while the application is in the background.





Enabling this option changes the behavior of media-specific APIs like the [MediaPlayer](https://docs.microsoft.com/en-us/uwp/api/Windows.Media.Playback.MediaPlayer?redirectedfrom=MSDN&view=winrt-19041) and [AudioGraph](https://docs.microsoft.com/en-us/uwp/api/Windows.Media.Audio.AudioGraph?redirectedfrom=MSDN&view=winrt-19041) classes to enable media playback while your application is in the background. If the application moves to the background, all active audio streams from the application continue to be audible. Additionally, the application lifetime extends while the audio plays.


            
