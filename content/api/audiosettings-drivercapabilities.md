This version of Unity is unsupported.



# [AudioSettings](AudioSettings.html).driverCapabilities




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




                [Switch to Manual](../Manual/class-AudioSettings.html)







                    public static [AudioSpeakerMode](AudioSpeakerMode.html) driverCapabilities;






### Description



Returns the speaker mode capability of the current audio driver. (Read Only)


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Set the speaker mode to that of the system settings.    void Start()
    {
        AudioSettings.speakerMode = AudioSettings.driverCapabilities;
    }
}
```


            
