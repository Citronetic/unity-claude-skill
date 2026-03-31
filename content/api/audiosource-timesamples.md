This version of Unity is unsupported.



# [AudioSource](AudioSource.html).timeSamples




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







                    public int timeSamples;






### Description



The current playback position of the AudioSource in PCM samples.





Use this to read current playback time or to seek to a new playback time in samples,
if you want more precise timing than what [time](AudioSource-time.html) variable allows.


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(AudioSource))]
public class ExampleClass : MonoBehaviour
{
    AudioSource audioSource;    void Start()
    {
        audioSource = GetComponent<AudioSource>();
    }    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Return))
        {
            audioSource.Stop();
            audioSource.Play();
        }
        Debug.Log(audioSource.timeSamples);
    }
}
```


            
