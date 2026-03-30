This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [AudioSampleProvider](Experimental.Audio.AudioSampleProvider.html).ConsumeSampleFrames




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

public uint ConsumeSampleFrames(NativeArray<float> sampleFrames);






### Parameters



| Parameter | Description |
| --- | --- |
| sampleFrames | Buffer where the consumed samples will be transferred. |





### Returns



**uint**
        How many sample frames were written into the buffer passed in.





### Description



Consume sample frames from the internal buffer.





If Experimental.Audio.AudioSampleProvider.enableSilenacePadding is true, then the buffer passed in will be completely filled and padded with silence if there are less sample frames available than what the buffer can accommodate. Otherwise, the extra sample frames in the buffer will be left intact.


            
