This version of Unity is unsupported.



# [VideoPlayer](Video.VideoPlayer.html).Prepare




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

public void Prepare();






### Description



Prepares the playback engine so that it's ready for playback.





To prepare, the playback engine reserves the resources vital for playback, and preloads some of the content to be played.  If the preparation succeeds, this method emits the [VideoPlayer.prepareCompleted](Video.VideoPlayer-prepareCompleted.html) event and sets [VideoPlayer.isPrepared](Video.VideoPlayer-isPrepared.html) to `true`. The VideoPlayer is then ready to display the frames immediately and you can access all properties related to the source.

If you don't prepare the VideoPlayer before you play a video, the [VideoPlayer.Play](Video.VideoPlayer.Play.html) method will do the preparation but the video won't play instantly.

If you use [VideoPlayer.Stop](Video.VideoPlayer.Stop.html), the VideoPlayer becomes unprepared again because it frees its resources for performance reasons. To halt a video but keep its preparation, use [VideoPlayer.Pause](Video.VideoPlayer.Pause.html) instead.

Additional resources: [VideoPlayer.isPrepared](Video.VideoPlayer-isPrepared.html).


              


```
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.Video;

// The button to play the video in the script only becomes interactable after the preparation is finished.
// To start the preparation process, press the Space key in Play mode. // Attach this script to the GameObject you want to play a video clip on.
// Attach a VideoPlayer component with a video clip and assign a UI Button in the Inspector.public class PrepareExample: MonoBehaviour
{
    VideoPlayer videoPlayer;
    public Button playButton;    private void Awake()
    {
        // Get the VideoPlayer component attached to GameObject with this script attached.
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
        if(videoPlayer.isPrepared)
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


            
