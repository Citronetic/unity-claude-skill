This version of Unity is unsupported.



# [VideoPlayer](Video.VideoPlayer.html).isPrepared




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












                    public bool isPrepared;






### Description



Returns whether the [VideoPlayer](Video.VideoPlayer.html) has successfully prepared the content to be played.





A prepared VideoPlayer can play back the content instantly because preliminary parsing and buffering has been done.

A VideoPlayer starts out as not prepared (`false`). To prepare the VideoPlayer, you need to use [VideoPlayer.Prepare](Video.VideoPlayer.Prepare.html). When preparation is done, the VideoPlayer emits the [VideoPlayer.prepareCompleted](Video.VideoPlayer-prepareCompleted.html) event, which sets `isPrepared` to `true`.

The property goes back to `false` when you or the VideoPlayer calls [VideoPlayer.Stop](Video.VideoPlayer.Stop.html).

If there are preparation failures, this property might never be set to `true`. In this case, Unity sends an error description through the [VideoPlayer.errorReceived](Video.VideoPlayer-errorReceived.html) event.

Additional resources: [VideoPlayer.Prepare](Video.VideoPlayer.Prepare.html).


              


```
using UnityEngine;
using UnityEngine.Video;
using System.Collections;// In the Inspector of your GameObject, attach this script and a VideoPlayer component.
// Also, assign a VideoClip to your VideoPlayer component.
// Use this script to prepare a video.  public class IsPreparedExample : MonoBehaviour
{
    public IEnumerator Start()
    {
        VideoPlayer videoPlayer = GetComponent<VideoPlayer>();
        videoPlayer.Prepare();
        // Loops until the video is ready.
        // Then outputs the message to the console when the preparation is done.
        while (!videoPlayer.isPrepared)
        {
            yield return null;
        }
        Debug.Log("Preparation completed!");
    }
}
```


            
