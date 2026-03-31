This version of Unity is unsupported.



# [AudioSource](AudioSource.html).PlayClipAtPoint




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

public static void PlayClipAtPoint([AudioClip](AudioClip.html) clip,
[Vector3](Vector3.html) position,
float volume = 1.0F);






### Parameters



| Parameter | Description |
| --- | --- |
| clip | Audio data to play. |
| position | Position in world space from which sound originates. |
| volume | Playback volume (range from 0.0 - 1.0). |





### Description



Plays an AudioClip at a given position in world space.





This function creates an audio source but automatically disposes of it once the clip has finished playing.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    public AudioClip clip; //make sure you assign an actual clip here in the inspector    void Start()
    {
        AudioSource.PlayClipAtPoint(clip, new Vector3(5, 1, 2));
    }
}
```


            
