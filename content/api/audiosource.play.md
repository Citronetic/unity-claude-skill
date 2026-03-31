This version of Unity is unsupported.



# [AudioSource](AudioSource.html).Play




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

public void Play(ulong delay = 0);






### Parameters



| Parameter | Description |
| --- | --- |
| delay | Deprecated. Delay in number of samples, assuming a 44100Hz sample rate (meaning that Play(44100) will delay the playing by exactly 1 sec). |





### Description



Plays the [clip](AudioSource-clip.html).





The delay parameter is deprecated, please use the newer [AudioSource.PlayDelayed](AudioSource.PlayDelayed.html) function instead which specifies the delay in seconds.

                    If [AudioSource.clip](AudioSource-clip.html) is set to the same clip that is playing then
                    the clip will sound like it is re-started.  [AudioSource](AudioSource.html) will assume
                    any [Play](AudioSource.Play.html) call will have a new audio clip to play.

**Note:** The [AudioSource.PlayScheduled](AudioSource.PlayScheduled.html) API will give you more accurate control over when the audio clip is played.

For a list of audio file types Unity supports, refer to [Audio Clip](../Manual/class-AudioClip.html).


              


```
using UnityEngine;// The Audio Source component has an AudioClip option.  The audio
// played in this example comes from AudioClip and is called audioData.[RequireComponent(typeof(AudioSource))]
public class ExampleScript : MonoBehaviour
{
    AudioSource audioData;    void Start()
    {
        audioData = GetComponent<AudioSource>();
        audioData.Play(0);
        Debug.Log("started");
    }    void OnGUI()
    {
        if (GUI.Button(new Rect(10, 70, 150, 30), "Pause"))
        {
            audioData.Pause();
            Debug.Log("Pause: " + audioData.time);
        }        if (GUI.Button(new Rect(10, 170, 150, 30), "Continue"))
        {
            audioData.UnPause();
        }
    }
}
```





Additional resources: [Stop](AudioSource.Stop.html), [Pause](AudioSource.Pause.html), [clip](AudioSource-clip.html) and [PlayScheduled](AudioSource.PlayScheduled.html) functions.


            
