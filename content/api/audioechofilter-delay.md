This version of Unity is unsupported.



# [AudioEchoFilter](AudioEchoFilter.html).delay




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







                    public float delay;






### Description



Echo delay in ms. 10 to 5000. Default = 500.


              


```
using UnityEngine;[RequireComponent(typeof(AudioSource))]
[RequireComponent(typeof(AudioEchoFilter))]
public class Example : MonoBehaviour
{
    // Set the delay on the chorus filter to the max working value.    void Start()
    {
        GetComponent<AudioEchoFilter>().delay = 5000f;
    }
}
```


            
