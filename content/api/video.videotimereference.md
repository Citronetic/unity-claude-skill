This version of Unity is unsupported.



# VideoTimeReference





enumeration


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



















### Description



The clock that the [VideoPlayer](Video.VideoPlayer.html) observes to detect and correct drift.





Use these settings to control how the playback time of the video is synchronized with time sources.


              


```
// This script changes the video playback speed based on a custom timer.
// Attach this script and a VideoPlayer component to a GameObject in your Scene.
// Assign a video clip to the VideoPlayer. using UnityEngine;
using UnityEngine.Video;public class VideoTimeReferenceExample : MonoBehaviour
{
    VideoPlayer videoPlayer;
    float customExternalTime = 0.0f;
    float timeSlider = 1.0f;    private void OnGUI()
    {
        // Create a slider you can use to change the playback speed.
        GUI.Label(new Rect(0, 0, 300, 300),$"Time scale : {timeSlider}");
        timeSlider = GUI.HorizontalSlider(new Rect(0, 30, 300, 300), timeSlider, 1.0f, 3.0f);
    }    void Start()
    {
        videoPlayer = GetComponent<VideoPlayer>();
        if (!videoPlayer)
        {
            Debug.LogError("VideoPlayer not assigned!");
            return;
        }        // Set default time reference to External time.
        videoPlayer.timeReference = VideoTimeReference.ExternalTime;
        videoPlayer.Play();
    }    void Update()
    {
        // Increment custom time manually.
        customExternalTime += timeSlider * Time.deltaTime;
        videoPlayer.externalReferenceTime = customExternalTime;
    }}
```





### Properties



| Property | Description |
| --- | --- |
| Freerun | The video plays without influence from external time sources. |
| InternalTime | The internal reference clock the VideoPlayer observes to detect and correct drift. |
| ExternalTime | The external reference clock the VideoPlayer observes to detect and correct drift. |


            
