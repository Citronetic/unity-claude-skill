This version of Unity is unsupported.



# [AudioSource](AudioSource.html).clip




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







                    public [AudioClip](AudioClip.html) clip;






### Description



The default [AudioClip](AudioClip.html) to play.





AudioSource [clip](AudioSource-clip.html) determines the audio clip that should play next.

When you assign a new audio clip to [clip](AudioSource-clip.html), the old clip it replaces (if any) stops and is replaced by the new one. However, the new clip doesn't automatically play so you need to use [AudioSource.Play](AudioSource.Play.html) (or similar) to play it.


              


```
// This script outputs a GUI play button. The script plays an audio clip on launch, but if you press the play button it switches to another clip and then plays that one instead.
// For this script to work, assign it to a GameObject. Then, assign an audio clip in the Inspector, and another clip to the Audio Source.  using UnityEngine;
using System.Collections;[RequireComponent(typeof(AudioSource))]
public class AudioSourceClipExample : MonoBehaviour
{
    public AudioClip otherClip;
    AudioSource audio;     void Start()
    {
        audio = GetComponent<AudioSource>();
        audio.Play();
    }    private void OnGUI()
    {
        if (GUI.Button(new Rect(10, 70, 30, 30), "Switch clip"))
        {
            audio.clip = otherClip;
            audio.Play();
        }
    }
}
```


            
