This version of Unity is unsupported.



# [AudioSource](AudioSource.html).PlayOneShot




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










## Declaration

public void PlayOneShot([AudioClip](AudioClip.html) clip,
float volumeScale = 1.0F);






### Parameters



| Parameter | Description |
| --- | --- |
| clip | The clip being played. |
| volumeScale | The scale of the volume. Unity automatically clamps negative scales to zero. Note: Scales larger than one might cause clipping. |





### Description



Plays an [AudioClip](AudioClip.html), and scales the [AudioSource](AudioSource.html) volume by volumeScale.





[AudioSource.PlayOneShot](AudioSource.PlayOneShot.html) does not cancel clips that are already being played by [AudioSource.PlayOneShot](AudioSource.PlayOneShot.html) and [AudioSource.Play](AudioSource.Play.html). For more information on how this method differs from [AudioSource.Play](AudioSource.Play.html), see [AudioSource](AudioSource.html).


              


```
using UnityEngine;
using System.Collections;[RequireComponent(typeof(AudioSource))]
public class ExampleClass : MonoBehaviour
{
    public AudioClip impact;
    AudioSource audioSource;    void Start()
    {
        audioSource = GetComponent<AudioSource>();
    }    void OnCollisionEnter()
    {
        audioSource.PlayOneShot(impact, 0.7F);
    }
}
```





Additional resources: [AudioSource.Play](AudioSource.Play.html).


            
