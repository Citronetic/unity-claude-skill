This version of Unity is unsupported.



# [AudioLowPassFilter](AudioLowPassFilter.html).lowpassResonanceQ




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







                    public float lowpassResonanceQ;






### Description



Determines how much the filter's self-resonance is dampened.





Higher Lowpass Resonance Q indicates a lower rate of energy loss i.e. the oscillations die out more slowly.

Lowpass resonance Q value goes from 1.0 to 10.0. Default = 1.0.


              


```
using UnityEngine;[RequireComponent(typeof(AudioSource))]
[RequireComponent(typeof(AudioLowPassFilter))]
public class Example : MonoBehaviour
{
    // Moves the Lowpass Resonance Quality Factor from 0 to 10 following a Sinus function
    // Attach this to an audio source with a LowPassFilter to listen to it working.    void Update()
    {
        GetComponent<AudioLowPassFilter>().lowpassResonanceQ = (Mathf.Sin(Time.time) * 5 + 5);
    }
}
```


            
