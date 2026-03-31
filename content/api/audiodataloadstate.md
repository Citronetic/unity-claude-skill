This version of Unity is unsupported.



# AudioDataLoadState





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



Value describes the current load state of the audio data associated with an [AudioClip](AudioClip.html).





This enumeration is useful if you want to:



          - Only load audio data if the data isn’t already loaded.

          - Perform actions while the audio data loads.

          - Track progress and failures of the load.

          - Make sure certain actions don’t start until the audio starts to load or has finished loading.





Use  [AudioClip.LoadAudioData](AudioClip.LoadAudioData.html) and [AudioClip.UnloadAudioData](AudioClip.UnloadAudioData.html) to load and unload the audio data of the AudioClip.

Additional resources: [AudioClip.loadState](AudioClip-loadState.html), [AudioClip.UnloadAudioData](AudioClip.UnloadAudioData.html).


              


```
// If you click the button, it will load and play the sound you attach to this GameObject.
// If you click the button again, the sound will stop and the audio data will unload.
// Assign this script to a GameObject and assign a Button and an AudioClip in the Inspector. using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using TMPro;public class AudioDataLoadStateExample : MonoBehaviour
{
    public Button playButton;
    public AudioClip audioClip;
    TextMeshProUGUI buttonText;
    AudioSource audioSource;    void Awake()
    {
        // Create and attach an AudioSource to the GameObject to play the audio.
        audioSource = gameObject.AddComponent<AudioSource>();        if (audioClip != null)
        {
            audioSource.clip = audioClip;            if (playButton != null)
            {
                buttonText = playButton.GetComponentInChildren<TextMeshProUGUI>();
                buttonText.text = "Play";                playButton.onClick.AddListener(OnPlayStopButtonClicked);
            }
            else Debug.LogError("Button not assigned in Inspector.");
        }
        else Debug.LogError("AudioClip not assigned in Inspector.");
    }    void OnPlayStopButtonClicked()
    {
        // Load and play the audio if the audio isn't playing.
        if (audioSource.isPlaying == false)
        {
            if (!audioClip.preloadAudioData)
            {
                audioClip.LoadAudioData();
            }
            StartCoroutine(CheckLoadAudioClip());
        }
        // Button clicked in Stop state, so if the audio is playing, stop and unload.
        else
        {
            audioSource.Stop();
            audioClip.UnloadAudioData();
            // Don't want the audio to be playable again, so remove button.
            playButton.gameObject.SetActive(false);
        }
    }    private IEnumerator CheckLoadAudioClip()
    {
        // Check if the audio clip has finished loading.
        while (audioClip.loadState == AudioDataLoadState.Loading)
        {
            Debug.Log($"AudioClip {audioClip.name} is still loading...");
            yield return null;
        }        switch (audioClip.loadState)
        {
            case AudioDataLoadState.Unloaded:
            {
                Debug.Log($"AudioClip {audioClip.name} is still unloaded.");
                break;
            }
            case AudioDataLoadState.Failed:
            {
                Debug.Log($"AudioClip {audioClip.name} failed to load.");
                break;
            }
            case AudioDataLoadState.Loaded:
            {
                Debug.Log($"AudioClip {audioClip.name} is fully loaded.");
                audioSource.Play();
                buttonText.text = "Stop";
                break;
            }
        }
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| Unloaded | Value returned by AudioClip.loadState for an AudioClip that has no audio data loaded and where loading has not been initiated yet. |
| Loading | Value returned by AudioClip.loadState for an AudioClip that is currently loading audio data. |
| Loaded | Value returned by AudioClip.loadState for an AudioClip that has succeeded loading its audio data. |
| Failed | Value returned by AudioClip.loadState for an AudioClip that has failed loading its audio data. |


            
