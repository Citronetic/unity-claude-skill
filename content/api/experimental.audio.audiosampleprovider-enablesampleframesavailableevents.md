This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [AudioSampleProvider](Experimental.Audio.AudioSampleProvider.html).enableSampleFramesAvailableEvents




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












                    public bool enableSampleFramesAvailableEvents;






### Description



Enables the [AudioSampleProvider.sampleFramesAvailable](Experimental.Audio.AudioSampleProvider-sampleFramesAvailable.html) events.





Depending on how often audio sample frames are drained, the sampleFramesAvailable events may be produced at a high rate. Producing these events may cause a unwanted overhead even if they are not monitored, so they can be disabled.

When sample frames are consumed from a native plug-in, consider using the associated native event handler set via Experimental.Audio.AudioSampleProvider.SetSampleFramesAvailableNativeEventHandler.


            
