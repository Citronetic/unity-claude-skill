This version of Unity is unsupported.



# [AudioSource](AudioSource.html).time




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







                    public float time;






### Description



Audio source playback position in seconds.





Use this property to read the current playback time or to seek to a new playback time.

If the audio source is **not playing**, [time](AudioSource-time.html) will always return 0, regardless of any previously set or expected playback position.

If you need to know the playback position when the audio source is not playing, use [timeSamples](AudioSource-timeSamples.html) instead.

Setting this property while the audio source is not playing will update the playback position, but it will only take effect once playback begins.

**Be aware that:** On a compressed audio track, the reported playback position does not necessarily reflect the exact time in the track.

Compressed audio is stored in packets, and the size of these packets depends on the compression settings. In many cases, a single packet can represent 2–3 seconds of audio.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
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
        Debug.Log(audioSource.time);
    }
}
```


            
