This version of Unity is unsupported.



# [VideoPlayer](Video.VideoPlayer.html).isPlaying




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












                    public bool isPlaying;






### Description



Returns whether the VideoPlayer is currently playing the content.





This variable returns `false` if the video is paused. If you call [VideoPlayer.Play](Video.VideoPlayer.Play.html), it might not always set `isPlaying` to `true`. The [VideoPlayer](Video.VideoPlayer.html) must successfully prepare the content before it starts to play. To prepare the content before you use [VideoPlayer.Play](Video.VideoPlayer.Play.html), use [VideoPlayer.Prepare](Video.VideoPlayer.Prepare.html).

Additional resources: [VideoPlayer.Play](Video.VideoPlayer.Play.html), [VideoPlayer.isPaused](Video.VideoPlayer-isPaused.html), [VideoPlayer.Pause](Video.VideoPlayer.Pause.html).


              


```
// In the Inspector of a GameObject, attach this script and a VideoPlayer component. using UnityEngine;
using UnityEngine.Video;public class IsPlayingExample: MonoBehaviour
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
            if(videoPlayer.isPlaying)
            {
                videoPlayer.Pause();
            }
        }
    }
}
```


            
