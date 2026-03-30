This version of Unity is unsupported.



# [AudioMixer](Audio.AudioMixer.html).SetFloat




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

public bool SetFloat(string name,
float value);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The name of an exposed Audio Mixer group parameter. To expose a parameter, go to the Audio Mixer group's Inspector window, right click the parameter you want to expose, and choose Expose [parameter name] to script. |
| value | Use to set the exposed Audio Mixer group parameter to a new value. |





### Returns



**bool**
        Returns false if the exposed parameter was not found or snapshots are currently being edited.





### Description



[AudioMixer.SetFloat](Audio.AudioMixer.SetFloat.html) sets the value of the exposed parameter specified. Once you call this function, mixer snapshots will no longer control the exposed parameter, and you can only modify the parameter using [AudioMixer.SetFloat](Audio.AudioMixer.SetFloat.html).





**Note:** Don’t call [AudioMixer.SetFloat](Audio.AudioMixer.SetFloat.html) in the following event functions as it can result in unexpected behavior:



          - [MonoBehaviour.Awake](MonoBehaviour.Awake.html)

          - [MonoBehaviour.OnEnable](MonoBehaviour.OnEnable.html)

          - [RuntimeInitializeLoadType.AfterSceneLoad](RuntimeInitializeLoadType.AfterSceneLoad.html)





Instead, call [AudioMixer.SetFloat](Audio.AudioMixer.SetFloat.html) in [MonoBehaviour.Start](MonoBehaviour.Start.html) or any event function Unity calls afterwards in [Order of execution for event functions](../Manual/execution-order.html).

To see your exposed parameters,



          1. Double click on your audio mixer. This opens the **Audio Mixer** window.

          2. At the top right of the Audio Mixer tab, click on the **Exposed Parameters** button to show the list of exposed parameters.





To rename or remove a parameter, right click the item in the list.

If the parameter you want to expose isn't in the list, you need to expose the parameter. To expose a parameter, right click the parameter you want to expose in the Audio Mixer Inspector window, and choose **Expose [parameter name] to script**.


              


```
using System;
using UnityEngine;
using UnityEngine.Audio;public class MixerVolumeController : MonoBehaviour
{
    // The range of the volume slider on a mixer group
    const float minVolume = -80f;
    const float maxVolume = 20f;    public AudioMixer mixer;    [Range(minVolume, maxVolume)]
    public float volume;    float previousVolume;    void Update()
    {        // Sets the exposed parameter "volume" in the audio mixer,
        // In this example the parameter is assumed to be the volume of a mixer group.
        // It could be any other exposable mixer parameter.
        if (!Mathf.Approximately(volume, previousVolume))
        {
            mixer.SetFloat("volume", volume);
        }        previousVolume = volume;
    }    void OnGUI()
    {
        GUILayout.BeginHorizontal();
        GUILayout.Label("Mixer volume");
        var newVolume = GUILayout.HorizontalSlider(volume, minVolume, maxVolume, GUILayout.Width(300));        if (!Mathf.Approximately(newVolume, previousVolume))
        {
            volume = newVolume;
            mixer.SetFloat("volume", volume);
        }        GUILayout.EndHorizontal();
    }
}
```


            
