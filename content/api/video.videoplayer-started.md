This version of Unity is unsupported.



# [VideoPlayer](Video.VideoPlayer.html).started




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



The VideoPlayer emits this event when the video starts to play.





After the VideoPlayer prepares the video and plays it, it emits this event. This event is useful if you want to play sounds, visual effects, timers or similar effects when the video starts.

Additional resources: [VideoPlayer.loopPointReached](Video.VideoPlayer-loopPointReached.html), [EventHandler](Video.VideoPlayer.EventHandler.html).


              


```
// This script plays some audio when the video starts.
// Make sure to assign a VideoPlayer and AudioSource to your GameObject in the Inspector. using UnityEngine;
using UnityEngine.Video;public class VideoStartExample : MonoBehaviour
{
    VideoPlayer videoPlayer;
    public AudioSource audioSource;
    void Start()
    {
        videoPlayer = GetComponent<VideoPlayer>();        if (videoPlayer != null)
        {
            // Call these functions when the video is prepared and started.
            videoPlayer.prepareCompleted += OnPrepareCompleted;
            videoPlayer.started += OnVideoStarted;
            // Prepare the VideoPlayer.
            videoPlayer.Prepare();
        }
    }    void OnPrepareCompleted(VideoPlayer vp)
    {
        Debug.Log("Preparation done.");
        videoPlayer.Play();
    }    void OnVideoStarted(VideoPlayer vp)
    {
        // Play an audio clip when the video starts.
        Debug.Log("Video has started.");
        if (audioSource != null)
        {
            audioSource.Play();
        }
        else Debug.Log("OnVideoStarted tried to play an AudioSource that doesn't exist.");
    }
}
```


            
