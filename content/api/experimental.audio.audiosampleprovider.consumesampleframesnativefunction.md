This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [AudioSampleProvider](Experimental.Audio.AudioSampleProvider.html).ConsumeSampleFramesNativeFunction




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

public delegate uint ConsumeSampleFramesNativeFunction(uint providerId,
IntPtr interleavedSampleFrames,
uint sampleFrameCount);






### Parameters



| Parameter | Description |
| --- | --- |
| providerId | Id of the provider. See AudioSampleProvider.id. |
| interleavedSampleFrames | Pointer to the sample frames buffer to fill. The actual C type is float*. |
| sampleFrameCount | Number of sample frames that can be written into interleavedSampleFrames. |





### Description



Type that represents the native function pointer for consuming sample frames.





Importing a hypothetical native setup function would be done this way:


              


```
[DllImport(pluginName, ExactSpelling = true, CallingConvention = CallingConvention.Cdecl)]
private static extern void SetConsumeSampleFramesFunction(
    AudioSampleProvider.ConsumeSampleFramesNativeFunction cb, uint id, ushort channelCount, uint sampleRate);
```





See [AudioSampleProvider.consumeSampleFramesNativeFunction](Experimental.Audio.AudioSampleProvider-consumeSampleFramesNativeFunction.html) for how to invoke this native plug-in function.


            
