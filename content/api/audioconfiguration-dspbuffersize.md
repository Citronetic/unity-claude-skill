This version of Unity is unsupported.



# [AudioConfiguration](AudioConfiguration.html).dspBufferSize




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












                    public int dspBufferSize;






### Description



The length of the DSP buffer in samples determining the latency of sounds by the audio output device.





This buffer size only accounts for the size of a single DSP buffer. It doesn't include additional latency caused by multiple DSP buffers or buffers from your platform's audio system.

You can use AudioSettings.GetConfiguration.dspBufferSize or [AudioSettings.GetDSPBufferSize](AudioSettings.GetDSPBufferSize.html) to get the DSP buffer size but it's recommended you use AudioSettings.GetConfiguration.dspBufferSize.
For a code example that shows each of the DSP buffer sizes, refer to [AudioSettings.Reset](AudioSettings.Reset.html).


              


```
// This script changes the settings of the audio configuration programatically.
// Attach this script to a GameObject in your Scene. Also assign an AudioSource component in the Inspector and
// assign an audio clip to the AudioSource. using UnityEngine;public class AudioConfigurationExample : MonoBehaviour
{
    void Start()
    {
        AudioSource source = GetComponent<AudioSource>();        AudioConfiguration config = AudioSettings.GetConfiguration();        // Change each configuration to your preferred setting.
        config.speakerMode = AudioSpeakerMode.Stereo;
        config.dspBufferSize = 64;        AudioSettings.Reset(config);
        // Play the audio.
        source.Play();
    }
}
```


            
