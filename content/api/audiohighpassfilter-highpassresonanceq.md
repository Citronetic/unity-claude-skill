This version of Unity is unsupported.



# [AudioHighPassFilter](AudioHighPassFilter.html).highpassResonanceQ




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




                [Switch to Manual](../Manual/class-AudioHighPassFilter.html)







                    public float highpassResonanceQ;






### Description



Determines how much the filter's self-resonance isdampened.





Higher Highpass resonance Q indicates a lower rate of
energy loss i.e. the oscillations die out more slowly.

Highpass resonance Q value goes from 1.0 to 10.0. Default = 1.0.


              


```
using UnityEngine;[RequireComponent(typeof(AudioSource))]
[RequireComponent(typeof(AudioHighPassFilter))]
public class Example : MonoBehaviour
{
    // Moves the Highpass Resonance Quality Factor from 0 to 10 following a Sinus function
    // Attach this to an audio source with a HighPassFilter to listen it working.    void Update()
    {
        GetComponent<AudioHighPassFilter>().highpassResonanceQ = (Mathf.Sin(Time.time) * 5 + 5);
    }
}
```


            
