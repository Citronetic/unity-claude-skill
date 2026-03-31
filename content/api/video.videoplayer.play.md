This version of Unity is unsupported.



# [VideoPlayer](Video.VideoPlayer.html).Play




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

public void Play();






### Description



Starts or resumes the playback of a video.





If the video isn't prepared, this method will prepare the video before it starts playback, but playback won't be instant. To make playback instant, use [VideoPlayer.Prepare](Video.VideoPlayer.Prepare.html) and wait for preparation to finish (when [VideoPlayer.prepareCompleted](Video.VideoPlayer-prepareCompleted.html) fires), before you use this method.

If you use [VideoPlayer.Prepare](Video.VideoPlayer.Prepare.html) and then play the video before preparation finishes, the VideoPlayer will finish preparation and then play the video.

Additional resources: [VideoPlayer.isPlaying](Video.VideoPlayer-isPlaying.html), [VideoPlayer.Pause](Video.VideoPlayer.Pause.html), [VideoPlayer.started](Video.VideoPlayer-started.html).


              


```
using UnityEngine;
using UnityEngine.Video;public class PlayExample : MonoBehaviour
{
    void Start()
    {
        // Get the VideoPlayer attached to this GameObject.
        // You need to attach a VideoPlayer component in the Inspector for this script to work.
        var videoPlayer = GetComponent<VideoPlayer>();        videoPlayer.Play();    }
}
```


            
