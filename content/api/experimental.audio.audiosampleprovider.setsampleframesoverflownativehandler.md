This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [AudioSampleProvider](Experimental.Audio.AudioSampleProvider.html).SetSampleFramesOverflowNativeHandler




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

public void SetSampleFramesOverflowNativeHandler([Experimental.Audio.AudioSampleProvider.SampleFramesEventNativeFunction](Experimental.Audio.AudioSampleProvider.SampleFramesEventNativeFunction.html) handler,
IntPtr userData);






### Parameters



| Parameter | Description |
| --- | --- |
| handler | Pointer to the function to invoke when the event is emitted. |
| userData | User data to be passed to the handler when invoked. The actual C type is void*. |





### Description



Set the native event handler for events emitted when the internal sample frame buffer overflows.


            
