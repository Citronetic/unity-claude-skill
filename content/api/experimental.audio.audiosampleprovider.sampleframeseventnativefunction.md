This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [AudioSampleProvider](Experimental.Audio.AudioSampleProvider.html).SampleFramesEventNativeFunction




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

public delegate void SampleFramesEventNativeFunction(IntPtr userData,
uint providerId,
uint sampleFrameCount);






### Parameters



| Parameter | Description |
| --- | --- |
| userData | User data specified when the handler was set. The actual C type is void*. |
| providerId | Id of the provider. See AudioSampleProvider.id. |
| sampleFrameCount | Number of sample frames available or overflowed, depending on event type. |





### Description



Type that represents the native function pointer for handling sample frame events.





Sample frames events are [AudioSampleProvider.sampleFramesAvailable](Experimental.Audio.AudioSampleProvider-sampleFramesAvailable.html) and [AudioSampleProvider.sampleFramesOverflow](Experimental.Audio.AudioSampleProvider-sampleFramesOverflow.html).

Importing such a function from a native plug-in would be done this way:


              


```
[DllImport(pluginName, ExactSpelling = true, CallingConvention = CallingConvention.Cdecl)]
private static extern void SampleFramesAvailable(IntPtr userData, uint id, uint sampleFrameCount);
```


            
