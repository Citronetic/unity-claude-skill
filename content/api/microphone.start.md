This version of Unity is unsupported.



# [Microphone](Microphone.html).Start




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




                [Switch to Manual](../Manual/class-Microphone.html)










## Declaration

public static [AudioClip](AudioClip.html) Start(string deviceName,
bool loop,
int lengthSec,
int frequency);






### Parameters



| Parameter | Description |
| --- | --- |
| deviceName | The name of the device. |
| loop | Indicates whether the recording should continue recording if lengthSec is reached, and wrap around and record from the beginning of the AudioClip. |
| lengthSec | Is the length of the AudioClip produced by the recording. |
| frequency | The sample rate of the AudioClip produced by the recording. |





### Returns



**AudioClip**
        The function returns null if the recording fails to start.





### Description



Start Recording with device.





If you pass a null or empty string for the device name then the default microphone is used. You can get a list of available microphone devices from the [devices](Microphone-devices.html) property and the range of sample rates supported by a microphone from the [GetDeviceCaps](Microphone.GetDeviceCaps.html) property.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Start recording with built-in Microphone and play the recorded audio right away
    void Start()
    {
        AudioSource audioSource = GetComponent<AudioSource>();
        audioSource.clip = Microphone.Start("Built-in Microphone", true, 10, 44100);
        audioSource.Play();
    }
}
```


            
