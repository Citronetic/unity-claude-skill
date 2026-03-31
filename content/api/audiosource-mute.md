This version of Unity is unsupported.



# [AudioSource](AudioSource.html).mute




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




                [Switch to Manual](../Manual/class-AudioSource.html)







                    public bool mute;






### Description



Un- / Mutes the AudioSource. Mute sets the volume=0, Un-Mute restore the original volume.


              


```
// Mutes-Unmutes the sound from this object each time the user presses space.
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    AudioSource audioSource;    void Start()
    {
        audioSource = GetComponent<AudioSource>();
    }    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
            audioSource.mute = !audioSource.mute;
    }
}
```


            
