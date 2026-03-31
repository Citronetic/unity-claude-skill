This version of Unity is unsupported.



# [AudioSource](AudioSource.html).volume




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







                    public float volume;






### Description



The volume of the audio source (0.0 to 1.0).





The AudioSource’s volume property controls the level of sound coming from an AudioClip. The highest volume level is 1 and the lowest is 0 where no sound is heard.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    AudioSource m_MyAudioSource;
    //Value from the slider, and it converts to volume level
    float m_MySliderValue;    void Start()
    {
        //Initiate the Slider value to half way
        m_MySliderValue = 0.5f;
        //Fetch the AudioSource from the GameObject
        m_MyAudioSource = GetComponent<AudioSource>();
        //Play the AudioClip attached to the AudioSource on startup
        m_MyAudioSource.Play();
    }    void OnGUI()
    {
        //Create a horizontal Slider that controls volume levels. Its highest value is 1 and lowest is 0
        m_MySliderValue = GUI.HorizontalSlider(new Rect(25, 25, 200, 60), m_MySliderValue, 0.0F, 1.0F);
        //Makes the volume of the Audio match the Slider value
        m_MyAudioSource.volume = m_MySliderValue;
    }
}
```


            
