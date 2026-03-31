This version of Unity is unsupported.



# [VideoClip](Video.VideoClip.html).audioTrackCount




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












                    public ushort audioTrackCount;






### Description



Gets the number of audio tracks that are embedded in the video clip. (Read Only).





A video clip can contain multiple audio tracks. It can have separate audio tracks for different languages, commentary, accessibility, or to separate music, sound effects and voices. This is useful because you can:



          - Monitor the different audio tracks.

          - Play certain tracks depending on the context or user’s choice.

          - Change the volume on certain tracks.

          - Mute certain tracks.





To enable or deactivate a certain audio track from the clip, use [VideoPlayer.EnableAudioTrack](Video.VideoPlayer.EnableAudioTrack.html).

Additional resources: [VideoClip.GetAudioLanguage](Video.VideoClip.GetAudioLanguage.html), [VideoPlayer.EnableAudioTrack](Video.VideoPlayer.EnableAudioTrack.html), [VideoPlayer.SetDirectAudioMute](Video.VideoPlayer.SetDirectAudioMute.html), [VideoPlayer.SetDirectAudioVolume](Video.VideoPlayer.SetDirectAudioVolume.html).


              


```
using UnityEngine;
using UnityEngine.Video;public class AudioTrackCountExample : MonoBehaviour
{
    VideoPlayer videoPlayer;    int currentTrack;    void Start()
    {
        videoPlayer = GetComponent<VideoPlayer>();
        VideoClip videoClip = videoPlayer.clip;        // Loop through all tracks and deactivate all except the first.
        for (ushort i = 1; i < videoClip.audioTrackCount; i++)
        {
            videoPlayer.EnableAudioTrack(i, false);
        }
        videoPlayer.Play();
    }    void Update()
    {
        // Press the Spacebar to change audio track.
        if (Input.GetKeyDown(KeyCode.Space))
        {
            ChangeAudioTrack();
        }
    }    public void ChangeAudioTrack()
    {
        // VideoPlayer needs to stop before it can change track.
        videoPlayer.Stop();        videoPlayer.EnableAudioTrack((ushort)currentTrack, false);
        currentTrack = (currentTrack + 1) % videoPlayer.audioTrackCount;
        videoPlayer.EnableAudioTrack((ushort)currentTrack, true);        videoPlayer.Play();
    }
}
```


            
