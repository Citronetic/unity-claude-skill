This version of Unity is unsupported.



# [AudioChorusFilter](AudioChorusFilter.html).delay




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







                    public float delay;






### Description



Chorus delay in ms. 0.1 to 100.0. Default = 40.0 ms.


              


```
using UnityEngine;[RequireComponent(typeof(AudioSource))]
[RequireComponent(typeof(AudioChorusFilter))]
public class Example : MonoBehaviour
{
    // Dont use delay on the filter.
    void Start()
    {
        GetComponent<AudioChorusFilter>().delay = 0.1f;
    }
}
```


            
