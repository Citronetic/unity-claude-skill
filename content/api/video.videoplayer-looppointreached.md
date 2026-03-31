This version of Unity is unsupported.



# [VideoPlayer](Video.VideoPlayer.html).loopPointReached




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



















### Parameters



| Parameter | Description |
| --- | --- |
| value | The instance of the VideoPlayer that invokes the event. |





### Description



The VideoPlayer emits this event when the video reaches the end of its playback.





If you set the [VideoPlayer.isLooping](Video.VideoPlayer-isLooping.html) property to `true`, this event makes the video play again. Otherwise the [VideoPlayer](Video.VideoPlayer.html) stops. You can also set the **Loop** property in the Inspector window of the [VideoPlayer](Video.VideoPlayer.html) component.

Additional resources: [VideoPlayer.isLooping](Video.VideoPlayer-isLooping.html), [VideoPlayer.started](Video.VideoPlayer-started.html), [EventHandler](Video.VideoPlayer.EventHandler.html).


              


```
// This script plays a Particle System when the video finishes, and then loops the video.
// Attach this script and a VideoPlayer component to a GameObject. Also attach a ParticleSystem in the Inspector. using UnityEngine;
using UnityEngine.Video;public class LoopPointReachedExample : MonoBehaviour
{
    VideoPlayer videoPlayer;
    public ParticleSystem particles;     void Start()
    {
        videoPlayer = GetComponent<VideoPlayer>();
        particles.playOnAwake = false;         // When the video playback is done, restart the video.
        videoPlayer.isLooping = true;        // Each time the video reaches the end, call this function.
        videoPlayer.loopPointReached += OnLoopPointReached;        videoPlayer.Play();
    }    void OnLoopPointReached(VideoPlayer vp)
    {
        // Play the particle effect when the video reaches the end.
        Debug.Log("Loop finished, play particle effect.");
        particles.Play();
    }
}
```


            
