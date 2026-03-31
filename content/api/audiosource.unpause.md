This version of Unity is unsupported.



# [AudioSource](AudioSource.html).UnPause




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

public void UnPause();






### Description



Unpause the paused playback of this AudioSource.





This function is similar to if you call Play() on a paused AudioSource, except that it will not create a new playback voice if it is not currently paused.

This is also useful if you have paused one-shots and want to resume playback without creating a new playback voice for the attached AudioClip.

If you use `UnPause` on an AudioSource that hasn't played before or has stopped, the audio will not play. This is because `UnPause` resumes the clip from when the clip was last paused. You need to play and then pause the clip before you can unpause it.


              


```
using UnityEngine;// The Audio Source component has an AudioClip option.  The audio
// played in this example comes from AudioClip and is called audioData.[RequireComponent(typeof(AudioSource))]
public class ExampleScript : MonoBehaviour
{
    AudioSource audioSource;    void Start()
    {
        audioSource = GetComponent<AudioSource>();
        audioSource.Play(0);
        Debug.Log("started");
    }    void OnGUI()
    {
        if (GUI.Button(new Rect(10, 70, 150, 30), "Pause"))
        {
            audioSource.Pause();
            Debug.Log("Pause: " + audioSource.time);
        }        if (GUI.Button(new Rect(10, 170, 150, 30), "Continue"))
        {
            audioSource.UnPause();
        }
    }
}
```


            
