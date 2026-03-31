This version of Unity is unsupported.



# [VideoPlayer](Video.VideoPlayer.html).errorReceived




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
| value | The error message (string) the VideoPlayer reports. |





### Description



The VideoPlayer uses this callback to report various types of errors.





The types of errors the VideoPlayer reports include:



          - HTTP connection problems.

          - Issues finding the file.

          - Unsupported file types.

          - Permission issues.

          - Runtime issues.





This is useful if you want to log errors and debug so that it’s easier to diagnose issues. You can also use it to implement fallback solutions, for example, you can display an error message or try to play an alternative video.

Additional resources: [ErrorEventHandler](Video.VideoPlayer.ErrorEventHandler.html).


              


```
using UnityEngine;
using UnityEngine.Video;public class ErrorReceivedExample : MonoBehaviour
{
    public VideoPlayer videoPlayer;
    void Start()
    {
        videoPlayer = GetComponent<VideoPlayer>();
        if (videoPlayer != null)
        {
            // When the VideoPlayer detects an error, call this OnErrorReceived function.
            videoPlayer.errorReceived += OnErrorReceived;
            videoPlayer.Play();
        }
    }    void OnErrorReceived(VideoPlayer vp, string message)
    {
        Debug.LogError("Error received: " + message);
    }
}
```


            
