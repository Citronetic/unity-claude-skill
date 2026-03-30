This version of Unity is unsupported.



# [AudioChorusFilter](AudioChorusFilter.html).wetMix3




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







                    public float wetMix3;






### Description



Volume of 3rd chorus tap. This tap is 90 degrees out of phase of the second tap. 0.0 to 1.0. Default = 0.5.


              


```
using UnityEngine;[RequireComponent(typeof(AudioSource))]
[RequireComponent(typeof(AudioChorusFilter))]
public class Example : MonoBehaviour
{
    // Produce random mixes with the Chorus filter.    AudioChorusFilter filter;    void Start()
    {
        filter = GetComponent<AudioChorusFilter>();
    }    void Update()
    {
        filter.wetMix1 = Mathf.Sin(Time.time) * 0.5f + 0.5f;
        filter.wetMix2 = Mathf.Cos(Time.time) * 0.5f + 0.5f;
        filter.wetMix3 = Random.Range(0.0f, 1.0f);
    }
}
```


            
