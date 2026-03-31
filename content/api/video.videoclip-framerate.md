This version of Unity is unsupported.



# [VideoClip](Video.VideoClip.html).frameRate




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












                    public double frameRate;






### Description



The frame rate of the clip in frames per second. (Read Only).





The frame rate is the number of frames that are displayed in one second of the video clip. This is useful if you want to synchronize with other effects in your project, and monitor performance. However, [VideoPlayer.frameRate](Video.VideoPlayer-frameRate.html) usually gives a more accurate result.

Additional resources: [VideoPlayer.frameRate](Video.VideoPlayer-frameRate.html), [VideoPlayer.frameCount](Video.VideoPlayer-frameCount.html).


              


```
// This script uses both the VideoPlayer and VideoClip components' frame count and frame rate
// to calculate the length of the video in seconds. Sometimes this can return different results,
// but the VideoPlayer is more accurate, especially after a full playthrough.
// The script recalculates the counts on each loop. using UnityEngine;
using UnityEngine.Video;public class VideoClipLengthCalculator : MonoBehaviour
{
    VideoPlayer videoPlayer;    void Start()
    {
        if (videoPlayer != null)
        {
            videoPlayer = GetComponent<VideoPlayer>();
            videoPlayer.isLooping = true;
            VideoClip videoClip = videoPlayer.clip;            if (videoClip != null)
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
        // Get frame count and frame rate from the VideoClip.
        ulong videoClipFrameCount = clip.frameCount;
        double videoClipFrameRate = clip.frameRate;        // Calculate the length in seconds (VideoClip) and output to console.
        double videoClipLengthInSeconds = videoClipFrameCount / videoClipFrameRate;
        Debug.Log($"Calculated VideoClip length: {videoClipLengthInSeconds} seconds.");        // Get frame count and frame rate from the VideoPlayer.
        ulong videoPlayerFrameCount = videoPlayer.frameCount;
        double videoPlayerFrameRate = videoPlayer.frameRate;        // Calculate the length in seconds (VideoPlayer) and output to console.
        double videoPlayerLengthInSeconds = videoPlayerFrameCount / videoPlayerFrameRate;
        Debug.Log($"Calculated VideoPlayer Length: {videoPlayerLengthInSeconds} seconds.");    }    void OnLoop(VideoPlayer vp)
    {
        // Recalculate the video length after loop happens.
        CalculateVideoLength(vp.clip);
    }
}
```


            
