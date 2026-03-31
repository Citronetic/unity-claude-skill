This version of Unity is unsupported.



# [AudioSource](AudioSource.html).pitch




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




                [Switch to Manual](../Manual/class-AudioSource.html)







                    public float pitch;






### Description



The pitch of the audio source.





Pitch makes a melody go higher or lower. For example, if you play an audio clip with pitch set to one, increasing the pitch as the clip plays will make the clip sound higher. Similarly, decreasing the pitch to less than one makes the clip sound lower. When [resource](AudioSource-resource.html) is an [AudioClip](AudioClip.html), the pitch property is clamped to the range [-3..3]. When [resource](AudioSource-resource.html) is an AudioRandomContainer, the pitch property is ignored, and if it is not in the range [0.0001..3.0], a warning appears in the console. This is due to AudioRandomContainer not supporting reverse/pause playback from the pitch. Any values outside this range are clamped when changing from an [AudioClip](AudioClip.html) to an AudioRandomContainer.


              


```
//Attach this script to a GameObject.
//Attach an AudioSource to your GameObject (Click Add Component and go to Audio>Audio Source). Choose an audio clip in the AudioClip field.
//This script sets the pitch of the audio at the start, and then gradually turns it down to 0 as time passes.using UnityEngine;//Make sure there is an Audio Source component on the GameObject
[RequireComponent(typeof(AudioSource))]public class ExampleScript : MonoBehaviour
{
    public int startingPitch = 4;
    public int timeToDecrease = 5;
    AudioSource audioSource;    void Start()
    {
        //Fetch the AudioSource from the GameObject
        audioSource = GetComponent<AudioSource>();        //Initialize the pitch
        audioSource.pitch = startingPitch;
    }    void Update()
    {
        //While the pitch is over 0, decrease it as time passes.
        if (audioSource.pitch > 0)
        {
            audioSource.pitch -= Time.deltaTime * startingPitch / timeToDecrease;
        }
    }
}
```





Another example:


              


```
using UnityEngine;// A script that plays your chosen song.  The pitch starts at 1.0.
// You can increase and decrease the pitch and hear the change
// that is made.public class AudioExample : MonoBehaviour
{
    public float pitchValue = 1.0f;
    public AudioClip mySong;    private AudioSource audioSource;
    private float low = 0.75f;
    private float high = 1.25f;    void Awake()
    {
        audioSource = GetComponent<AudioSource>();
        audioSource.clip = mySong;
        audioSource.loop = true;
    }    void OnGUI()
    {
        pitchValue = GUI.HorizontalSlider(new Rect(25, 75, 100, 30), pitchValue, low, high);
        audioSource.pitch = pitchValue;
    }
}
```


            
