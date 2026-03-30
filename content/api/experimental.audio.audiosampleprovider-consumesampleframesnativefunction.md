This version of Unity is unsupported.


                  **Experimental**: this API is experimental and might be changed or removed in the future.


# [AudioSampleProvider](Experimental.Audio.AudioSampleProvider.html).consumeSampleFramesNativeFunction




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












                    public static [Experimental.Audio.AudioSampleProvider.ConsumeSampleFramesNativeFunction](Experimental.Audio.AudioSampleProvider.ConsumeSampleFramesNativeFunction.html) consumeSampleFramesNativeFunction;






### Description



Pointer to the native function that provides access to audio sample frames.





This function pointer can be passed to native plug-ins that need to consume sample frames while avoiding any overhead related to going from native to C# or garbage collection interference.

Importing a native function that uses this type, for passing the native function pointer to the native plugin, would look like this:


              


```
SetConsumeSampleFramesFunction(
    AudioSampleProvider.consumeSampleFramesNativeFunction, signalProvider.id,
    signalProvider.channelCount, signalProvider.sampleRate);
```





See [ConsumeSampleFramesNativeFunction](Experimental.Audio.AudioSampleProvider.ConsumeSampleFramesNativeFunction.html) for how to import a native function that uses this signature.


            
