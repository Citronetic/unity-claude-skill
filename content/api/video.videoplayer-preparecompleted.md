This version of Unity is unsupported.



# [VideoPlayer](Video.VideoPlayer.html).prepareCompleted




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
| value | The instance of the VideoPlayer that invoked the event. |





### Description



The [VideoPlayer](Video.VideoPlayer.html) invokes this event when the video is ready for playback.





The [VideoPlayer](Video.VideoPlayer.html) uses [VideoPlayer.Prepare](Video.VideoPlayer.Prepare.html) to ready a video for playback. When the preparation finishes, the [VideoPlayer](Video.VideoPlayer.html) invokes this callback. If you start playback after this callback is invoked, frames become available instantly.
If you call [VideoPlayer.Play](Video.VideoPlayer.Play.html) without using [VideoPlayer.Prepare](Video.VideoPlayer.Prepare.html) first, the [VideoPlayer](Video.VideoPlayer.html) invokes `Prepare()` anyway. If preparation succeeds, the [VideoPlayer](Video.VideoPlayer.html) still invokes this event.

Additional resources: [VideoPlayer.Prepare](Video.VideoPlayer.Prepare.html), [EventHandler](Video.VideoPlayer.EventHandler.html).


              


```
// In this script, you can only interact with the button to play the video after the VideoPlayer
// finishes its preparation of the video. To start the preparation process, press Spacebar in Play mode. // Attach this script to the GameObject you want to play a video clip on.
// Attach a VideoPlayer component with a video clip and assign a Button in the Inspector.using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Video;public class PrepareExample: MonoBehaviour
{
    VideoPlayer videoPlayer;
    public Button playButton;    private void Awake()
    {
        // Get the VideoPlayer component from GameObject with this script attached.
        videoPlayer = GetComponent<VideoPlayer>();
        // Attach the event handler, which triggers when the VideoPlayer finishes its preparation.
        videoPlayer.prepareCompleted += OnPrepareCompleted;
        videoPlayer.playOnAwake = false;
        playButton.interactable = false;
    }    // Event handler for when VideoPlayer finishes the preparation process.
    void OnPrepareCompleted(VideoPlayer vp)
    {
        Debug.Log("Preparation complete. You can now play the video.");

        // Preparation is complete so allow interactions with the play button.
        playButton.interactable = true;
        playButton.onClick.AddListener(OnPlayButtonClicked);
    }    void OnPlayButtonClicked()
    {
        // If the play button is clicked and the preparation is done, play the video.
        if (videoPlayer.isPrepared)
        {
            videoPlayer.Play();
        }
    }    private void Update()
    {
        // Press Spacebar to prepare the video.
        if (Input.GetKeyDown("space"))
        {
            if (!videoPlayer.isPrepared)
            {
                videoPlayer.Prepare();
            }
        }
    }
}
```


            
