This version of Unity is unsupported.



# [AudioEchoFilter](AudioEchoFilter.html).wetMix




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




                [Switch to Manual](../Manual/class-AudioEchoFilter.html)







                    public float wetMix;






### Description



Volume of echo signal to pass to output. 0.0 to 1.0. Default = 1.0.


              


```
using UnityEngine;[RequireComponent(typeof(AudioSource))]
[RequireComponent(typeof(AudioEchoFilter))]
public class Example : MonoBehaviour
{
    // Mixes both Echo generated sound and the original audio source
    // if you set the wetMix to 0 you will not have Echo sounds.    void Start()
    {
        GetComponent<AudioEchoFilter>().wetMix = 1.0f;
        GetComponent<AudioEchoFilter>().dryMix = 1.0f;
    }
}
```


            
