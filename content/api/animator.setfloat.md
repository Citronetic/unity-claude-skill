This version of Unity is unsupported.



# [Animator](Animator.html).SetFloat




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










## Declaration

public void SetFloat(string name,
float value);






## Declaration

public void SetFloat(string name,
float value,
float dampTime,
float deltaTime);






## Declaration

public void SetFloat(int id,
float value);






## Declaration

public void SetFloat(int id,
float value,
float dampTime,
float deltaTime);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The parameter name. |
| id | The parameter ID. |
| value | The new parameter value. |
| dampTime | The damper total time. |
| deltaTime | The delta time to give to the damper. |





### Description



Send float values to the Animator to affect transitions.





Use SetFloat in a script to send float values to the Animator in order to activate transitions. In the Animator, define what values affect how certain animations transition. This is useful in various situations, especially in animation cycles such as movement animations where you might require the character to walk or run depending on the button pressure applied.


              


```
//The code below shows how to send the horizontal value of the controller or keys to the Animator.
//You must assign the same parameter name in the Animator as you set in SetFloat, in this case “horizontalSpeed”. You must also handle the transition conditions in the Animator, to tell which values should cause each transition.
//For example, the walking animation triggers when the horizontal value is above 0, and the running animation triggers when the horizontal value reaches past 0.5. Assigning animations to states are also done in the Animator.using UnityEngine;public class Example : MonoBehaviour
{
    Animator m_Animator;
    float m_HorizontalMovement;    void Start()
    {
        //Get the animator, which you attach to the GameObject you are intending to animate.
        m_Animator = gameObject.GetComponent<Animator>();
    }    void Update()
    {
        //Translate the left and right button presses or the horizontal joystick movements to a float
        m_HorizontalMovement = Input.GetAxis("Horizontal");
        //Sends the value from the horizontal axis input to the animator. Change the settings in the
        //Animator to define when the character is walking or running
        m_Animator.SetFloat("horizontalSpeed", m_HorizontalMovement);
    }
}
```





[Image: image]



Above is an example setup of the Animator for accepting floats.


            
