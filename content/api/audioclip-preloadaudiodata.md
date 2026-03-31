This version of Unity is unsupported.



# [AudioClip](AudioClip.html).preloadAudioData




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




                [Switch to Manual](../Manual/class-AudioClip.html)







                    public bool preloadAudioData;






### Description



Enable this property in the Inspector to preload audio data from the audio clip when loading the clip Asset (Read Only).





This can help prevent delays when you play an audio clip because the data is already loaded. If you disable this property, you need to call [AudioClip.LoadAudioData](AudioClip.LoadAudioData.html) to load the data before you play the clip. Properties like length, channels, and format are available before Unity loads the audio data.
You can’t change this property during runtime. To change this setting before you enter Play mode, set **Preload Audio Data** in the Inspector of the audio clip or use [AudioImporterSampleSettings.preloadAudioData](AudioImporterSampleSettings-preloadAudioData.html).


            
