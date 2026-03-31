This version of Unity is unsupported.



# [Animator](Animator.html).speed




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




                [Switch to Manual](../Manual/class-Animator.html)







                    public float speed;






### Description



The playback speed of the Animator. 1 is normal playback speed.





Use [Animator.speed](Animator-speed.html) to manipulate the playback speed of the Animator. Any animations currently being played by the Animator are slowed down or sped up depending on how the speed is altered. Set speed to 1 for normal playback. Negative playback speed is only supported when the recorder is enabled. For more details refer to [Animator.recorderMode](Animator-recorderMode.html).


              


```
using System.Collections;
using System.Collections.Generic;
using UnityEngine;public class Example : MonoBehaviour
{
    Animator m_Animator;
    //Value from the slider, and it converts to speed level
    float m_MySliderValue;    void Start()
    {
        //Get the animator, attached to the GameObject you are intending to animate.
        m_Animator = gameObject.GetComponent<Animator>();
    }    void OnGUI()
    {
        //Create a Label in Game view for the Slider
        GUI.Label(new Rect(0, 25, 40, 60), "Speed");
        //Create a horizontal Slider to control the speed of the Animator. Drag the slider to 1 for normal speed.        m_MySliderValue = GUI.HorizontalSlider(new Rect(45, 25, 200, 60), m_MySliderValue, 0.0F, 1.0F);
        //Make the speed of the Animator match the Slider value
        m_Animator.speed = m_MySliderValue;
    }
}
```


            
