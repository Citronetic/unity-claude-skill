This version of Unity is unsupported.



# [VideoClip](Video.VideoClip.html).length




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












                    public double length;






### Description



The length of the video clip in seconds. (Read Only).





You can use this property to ensure any events, sounds, visual effects, logic etc. you want to trigger during the video happen within the time limits of the video.

**Note**: The VideoClip can return an inaccurate length because the external encoder can be imprecise. Use [VideoPlayer.frameCount](Video.VideoPlayer-frameCount.html) and [VideoPlayer.frameRate](Video.VideoPlayer-frameRate.html) to get more accurate results.


              


```
// This script outputs the length of the video clip given by the VideoClip component
// and the length given by calculating the VideoPlayer frame rate and frame count. These can
// sometimes give different results, but the VideoPlayer is more accurate, especially after the video
// plays through once. using UnityEngine;
using UnityEngine.Video;public class VideoClipExample : MonoBehaviour
{
    VideoPlayer videoPlayer;     void Start()
    {
        if(videoPlayer != null)
        {
            videoPlayer = GetComponent<VideoPlayer>();
            videoPlayer.isLooping = true;
            VideoClip videoClip = videoPlayer.clip;             if (videoClip != null)
            {
                CalculateVideoLength(videoClip);
                videoPlayer.loopPointReached += OnLoop;
                videoPlayer.Play();
            }
            else
            {
                Debug.LogWarning("VideoClip is not assigned.");
            }
        }
        else
        {
            Debug.LogWarning("VideoPlayer is not assigned.");
        }
    }    void CalculateVideoLength(VideoClip clip)
    {
        // Get frame count and frame rate from the VideoPlayer.
        ulong frameCount = videoPlayer.frameCount;
        double frameRate = videoPlayer.frameRate;        // Calculate the length in seconds.
        double lengthInSeconds = frameCount / frameRate;        // Output the length from the VideoClip and the calculated length.
        Debug.Log($"Initial clip length: {clip.length} seconds.");
        Debug.Log($"Calculated Length: {lengthInSeconds} seconds.");
    }    void OnLoop(VideoPlayer vp)
    {
        // Recalculate the video length with each loop.
        CalculateVideoLength(vp.clip);
    }
}
```


            
