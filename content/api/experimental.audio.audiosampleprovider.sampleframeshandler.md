This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [AudioSampleProvider](Experimental.Audio.AudioSampleProvider.html).SampleFramesHandler




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

public delegate void SampleFramesHandler([Experimental.Audio.AudioSampleProvider](Experimental.Audio.AudioSampleProvider.html) provider,
uint sampleFrameCount);






### Parameters



| Parameter | Description |
| --- | --- |
| provider | Provider emitting the event. |
| sampleFrameCount | How many sample frames are available, or were dropped, depending on the event. |





### Description



Delegate for sample frame events.


            
