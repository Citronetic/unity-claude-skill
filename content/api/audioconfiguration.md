This version of Unity is unsupported.



# AudioConfiguration





struct in
          UnityEngine



/



Implemented in:[UnityEngine.AudioModule](UnityEngine.AudioModule.html)


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



Specifies the current properties or desired properties to be set for the audio system.





Use these properties to change how Unity outputs all audio in your project, including how many sounds can play at one time and what speaker mode to use.

For a longer example, refer to [AudioSettings.Reset](AudioSettings.Reset.html).

Additional resources: [AudioSpeakerMode](AudioSpeakerMode.html), [AudioSettings.GetConfiguration](AudioSettings.GetConfiguration.html).


              


```
// This script changes all the settings of the audio configuration programatically.
// Attach this script to a GameObject in your Scene. Also assign an AudioSource component in the Inspector and
// assign an audio clip to the AudioSource. using UnityEngine;public class AudioConfigurationExample : MonoBehaviour
{
    void Start()
    {
        AudioSource source = GetComponent<AudioSource>();        AudioConfiguration config = AudioSettings.GetConfiguration();        // Change each configuration to your preferred setting.
        config.speakerMode = AudioSpeakerMode.Stereo;
        config.dspBufferSize = 64;
        config.sampleRate = 48000;
        config.numRealVoices = 16;
        config.numVirtualVoices = 128;        AudioSettings.Reset(config);
        // Play the audio.
        source.Play();
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| dspBufferSize | The length of the DSP buffer in samples determining the latency of sounds by the audio output device. |
| numRealVoices | The current maximum number of simultaneously audible sounds in the game. |
| numVirtualVoices | The  maximum number of managed sounds in the game. Beyond this limit sounds will simply stop playing. |
| sampleRate | The current sample rate of the audio output device used. |
| speakerMode | The current speaker mode used by the audio output device. |


            
