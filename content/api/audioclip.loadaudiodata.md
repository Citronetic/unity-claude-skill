This version of Unity is unsupported.



# [AudioClip](AudioClip.html).LoadAudioData




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




                [Switch to Manual](../Manual/class-AudioClip.html)










## Declaration

public bool LoadAudioData();






### Returns



**bool**
        Returns true if the clip is loaded into memory.





### Description



Loads the asset data of an [AudioClip](AudioClip.html) into memory, so it will immediately be ready to play.





Use this method when your application can afford an upfront performance overhead. The overhead happens because this method loads resources in ahead-of-time. It's recommended that you use `AudioClip.LoadAudioData` in methods like `Start()` of MonoBehaviour.

If you don't use this method and use [AudioSource.Play](AudioSource.Play.html) on an unloaded audio clip, the clip still loads in before playback, but it can cause delays due to the clip loading in dynamically. In contrast, `AudioClip.LoadAudioData` loads your audio clips in advance so they're ready to immediately play when necessary.

Key details about `AudioClip.LoadAudioData`:



          - If you call it on an audio clip that is already loaded, it does nothing and returns `true`.

          - It doesn't reload clips that have [AudioClip.preloadAudioData](AudioClip-preloadAudioData.html) set to `true`.

          - It loads the [AudioClip](AudioClip.html) synchronously, unless [AudioClip.loadInBackground](AudioClip-loadInBackground.html) is set to `true`.

          - If you play a clip that is loading in the background, the audio source will delay playback until the clip is ready to play.

          - You can use [AudioClip.loadState](AudioClip-loadState.html) to monitor the current load state of the audio data.




              


```
using UnityEngine;public class LoadClipAtStart : MonoBehaviour
{
    AudioClip m_Clip;
    void Start()
    {
        m_Clip.LoadAudioData();
        //Components that use AudioClip, for example AudioSource, are ready to immediately use the audio data, rather
        // than triggering a load themselves.    }
}
```


            
