This version of Unity is unsupported.



# [VideoPlayer](Video.VideoPlayer.html).time




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












                    public double time;






### Description



The presentation time of the currently available frame in [VideoPlayer.texture](Video.VideoPlayer-texture.html) in seconds.





Use `VideoPlayer.time` to achieve the following actions:



          - Start the video at a certain time.

          - Search through a video.

          - Synchronize a part of your clip with another element- for example, with sounds, visual effects or events.





When you set `VideoPlayer.time`, it initiates a seek operation. For example, if you set `VideoPlayer.time = 10`, the VideoPlayer:



          1. Starts to move the video towards the 10 second mark.

          2. Fires the [VideoPlayer.seekCompleted](Video.VideoPlayer-seekCompleted.html) event when it reaches 10 seconds.

          3. Prepares the frame at this time for display.

          4. Triggers [VideoPlayer.frameReady](Video.VideoPlayer-frameReady.html) when the frame is prepared and displays the frame.





The `time` value only properly settles when the VideoPlayer displays the frame.

If you set `time` to another value during this operation, the VideoPlayer creates a new seek operation and adds it to a queue. The new operation will start when the previous one completes.

Additional resources: [VideoPlayer.Play](Video.VideoPlayer.Play.html), [VideoPlayer.texture](Video.VideoPlayer-texture.html).


              


```
using UnityEngine;
using UnityEngine.Video; public class TimeExample : MonoBehaviour
{
    VideoPlayer videoPlayer;    private void Start()
    {
        // Get the VideoPlayer component from the GameObject that contains this script.
        videoPlayer = GetComponent<VideoPlayer>();
        // Skip to 10 seconds into the video.
        videoPlayer.time = 10.0f;
        // Play the video.
        videoPlayer.Play();
    }
}
```


            
