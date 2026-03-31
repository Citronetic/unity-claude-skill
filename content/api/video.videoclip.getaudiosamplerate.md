This version of Unity is unsupported.



# [VideoClip](Video.VideoClip.html).GetAudioSampleRate




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

public uint GetAudioSampleRate(ushort audioTrackIdx);






### Parameters



| Parameter | Description |
| --- | --- |
| audioTrackIdx | Index of the audio queried audio track. |





### Returns



**uint**
        The sampling rate in hertz.





### Description



Get the audio track sampling rate in hertz (Hz).





The audio sampling rate is the number of times per second a sample of audio is captured. Higher sample rates usually result in more realistic sounds and better sound quality, but files are larger.
This is useful to know so that you can cater your audio to different devices. A VideoClip could have multiple audio tracks for different quality levels, which you can change depending on the device.

Additional resources: [VideoPlayer.EnableAudioTrack](Video.VideoPlayer.EnableAudioTrack.html).


              


```
using UnityEngine;
using UnityEngine.Video;public class AudioSampleRateExample : MonoBehaviour
{
    VideoPlayer videoPlayer;    void Start()
    {
        videoPlayer = GetComponent<VideoPlayer>();
        // Get the VideoClip from the VideoPlayer
        VideoClip clip = videoPlayer.clip;        if (clip != null)
        {
            // Get the number of audio tracks in the VideoClip
            int audioTrackCount = clip.audioTrackCount;            // Loop through each audio track and output their audio sample rate.
            for (ushort i = 0; i < audioTrackCount; i++)
            {
                Debug.Log("Audio track " + i + " has the following audio sampling rate: " + clip.GetAudioSampleRate(i));
            }
        }
        else
        {
            Debug.LogError("No VideoClip assigned to the VideoPlayer.");
        }
    }
}
```


            
