This version of Unity is unsupported.



# [VideoPlayer](Video.VideoPlayer.html).EventHandler




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

public delegate void EventHandler([Video.VideoPlayer](Video.VideoPlayer.html) source);






### Parameters



| Parameter | Description |
| --- | --- |
| source | The VideoPlayer that emits the event. |





### Description



Delegate type for all events without parameters emitted by [VideoPlayer](Video.VideoPlayer.html)s.





Use this EventHandler to define what you want to happen when the [VideoPlayer](Video.VideoPlayer.html) emits certain events. This EventHandler accepts the following VideoPlayer events:



          - [VideoPlayer.loopPointReached](Video.VideoPlayer-loopPointReached.html)

          - [VideoPlayer.started](Video.VideoPlayer-started.html)

          - [VideoPlayer.prepareCompleted](Video.VideoPlayer-prepareCompleted.html)

          - [VideoPlayer.seekCompleted](Video.VideoPlayer-seekCompleted.html)





This EventHandler doesn't accept events that have parameters.

Additional resources: For EventHandlers that can accept parameters, refer to VideoPlayer.ErrorEventHandler which handles [VideoPlayer.errorReceived](Video.VideoPlayer-errorReceived.html), VideoPlayer.FrameReadyEventHandler which handles [VideoPlayer.frameReady](Video.VideoPlayer-frameReady.html), and VideoPlayer.TimeEventHandler.


              


```
// This script sets up a generic EventHandler to process a few different parameter-less events from the VideoPlayer. using UnityEngine;
using UnityEngine.Video;public class EventHandlerExample : MonoBehaviour
{
    public VideoPlayer videoPlayer;
    void Start()
    {
        videoPlayer = GetComponent<VideoPlayer>();        // Define a generic EventHandler for events that have the same signature.
        VideoPlayer.EventHandler eventHandler = OnVideoPlayerEvent;        // Assign the generic EventHandler to manage multiple VideoPlayer events.
        videoPlayer.prepareCompleted += eventHandler;
        videoPlayer.started += eventHandler;
        videoPlayer.loopPointReached += eventHandler;
        videoPlayer.seekCompleted += eventHandler;        videoPlayer.Prepare();
    }    // All those events will invoke this same function and be handled the same way.
    private void OnVideoPlayerEvent(VideoPlayer vp)
    {
        Debug.Log("An event occurred on VideoPlayer.");
    }
}
```


            
