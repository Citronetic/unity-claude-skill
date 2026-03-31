This version of Unity is unsupported.



# [VideoPlayer](Video.VideoPlayer.html).Pause




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















## Declaration

public void Pause();






### Description



Pauses the playback and leaves the current time intact.





Use this method to pause the playback of a video. This method sets [VideoPlayer.isPlaying](Video.VideoPlayer-isPlaying.html) to `false`. To play again, use [VideoPlayer.Play](Video.VideoPlayer.Play.html).

If you pause the video when the VideoPlayer isn't prepared, this method triggers preparation and shows the first frame of the video.

If you seek through to a different point in the video and then call `Pause()` before the VideoPlayer finishes preparation, it triggers preparation and shows the frame that was the seek target. For example, if you set [VideoPlayer.time](Video.VideoPlayer-time.html) to `10.0f` and then call `Pause()`, it shows the frame at 10 seconds.

Additional resources: [VideoPlayer.Play](Video.VideoPlayer.Play.html).


              


```
// In the Inspector of a GameObject, attach this script and a VideoPlayer component. using UnityEngine;
using UnityEngine.Video;public class PauseExample: MonoBehaviour
{
    VideoPlayer videoPlayer;     void Start()
    {
        // Get the VideoPlayer component from the GameObject with this script attached.
        videoPlayer = GetComponent<VideoPlayer>();
    }    private void Update()
    {
        // Press the Spacebar to pause the video if it's playing.
        if (Input.GetKeyDown("space"))
        {
            // If the VideoPlayer is currently playing a video, pause the video.
            if (videoPlayer.isPlaying)
            {
                videoPlayer.Pause();
            }
        }
    }
}
```


            
