This version of Unity is unsupported.



# [AudioLowPassFilter](AudioLowPassFilter.html).cutoffFrequency




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




                [Switch to Manual](../Manual/class-AudioLowPassFilter.html)







                    public float cutoffFrequency;






### Description



Lowpass cutoff frequency in hz. 10.0 to 22000.0. Default = 5000.0.





Note that setting this value will reset any custom cutoff curve set for this AudioLowPassFilter.


              


```
using UnityEngine;[RequireComponent(typeof(AudioSource))]
[RequireComponent(typeof(AudioLowPassFilter))]
public class Example : MonoBehaviour
{
    // Moves the cuttoutFrequency from 10 to 22000 following a Sinus function
    // Attach this to an audio source with a LowPassFilter to listen to it working.    void Update()
    {
        GetComponent<AudioLowPassFilter>().cutoffFrequency = (Mathf.Sin(Time.time) * 11010 + 11000);
    }
}
```


            
