This version of Unity is unsupported.



# [AudioSource](AudioSource.html).isPlaying




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







                    public bool isPlaying;






### Description



Returns whether the AudioSource is currently playing an [AudioResource](Audio.AudioResource.html)(Read Only).





AudioSource.isPlaying returns true if the [AudioSource](AudioSource.html) is playing any [AudioResource](Audio.AudioResource.html), such as [AudioClip](AudioClip.html) or AudioRandomContainer. This includes if you use PlayOneShot() or if you play a video or timeline track through the AudioSource.

**Note:** [AudioSource.isPlaying](AudioSource-isPlaying.html) returns *false* when `AudioSource.Pause()` is called. If you use
`AudioSource.Play()` back again, it returns true.

**Note:** If you use [AudioSource.PlayDelayed](AudioSource.PlayDelayed.html) to play your clip, AudioSource.isPlaying returns true during the delay.


              


```
// When the audio component has stopped playing, play otherClip.
// Remember to assign an AudioClip in the Inspector.using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public AudioClip otherClip;
    AudioSource audioSource;    void Start()
    {
        audioSource = GetComponent<AudioSource>();
    }    void Update()
    {
        if (!audioSource.isPlaying)
        {
            audioSource.clip = otherClip;
            audioSource.Play();
        }
    }
}
```


            
