This version of Unity is unsupported.



# [AudioSource](AudioSource.html).resource




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







                    public [Audio.AudioResource](Audio.AudioResource.html) resource;






### Description



The default [AudioResource](Audio.AudioResource.html) to play.





You can also use this property to set the [AudioResource](Audio.AudioResource.html) that plays next.

**Note**: Audio resources don’t provide direct access to properties like `length`. However, if your audio resource is an [AudioClip](AudioClip.html), you can access these properties through [AudioSource.clip](AudioSource-clip.html). Other types of resources might not provide direct access to these properties because the resources are dynamic or the values might change every time you play the audio.


              


```
using UnityEngine;[RequireComponent(typeof(AudioSource))]
public class ExampleClass : MonoBehaviour
{
    public AudioResource m_Resource;    public void PlayAudioResource()
    {
        AudioSource audioSource = GetComponent<AudioSource>();
        audioSource.resource = m_Resource;
        audioSource.Play();
    }
}
```


            
