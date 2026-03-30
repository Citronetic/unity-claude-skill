This version of Unity is unsupported.



# [AudioChorusFilter](AudioChorusFilter.html).rate




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




                [Switch to Manual](../Manual/class-AudioChorusFilter.html)







                    public float rate;






### Description



Chorus modulation rate in hz. 0.0 to 20.0. Default = 0.8 hz.


              


```
using UnityEngine;[RequireComponent(typeof(AudioSource))]
[RequireComponent(typeof(AudioChorusFilter))]
public class Example : MonoBehaviour
{
    // Set the rate on the chorus filter to 15hz.
    void Start()
    {
        GetComponent<AudioChorusFilter>().rate = 15;
    }
}
```


            
