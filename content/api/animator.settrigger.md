This version of Unity is unsupported.



# [Animator](Animator.html).SetTrigger




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

public void SetTrigger(string name);






## Declaration

public void SetTrigger(int id);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The parameter name. |
| id | The parameter ID. |





### Description



Sets the value of the given trigger parameter.





This method allows you to set (i.e. activate) an animation trigger, to cause a change in flow in the state machine of an animator controller. The [Animation Parameters](../Manual/AnimationParameters.html) page describes the purpose of the Animator Controller Parameters window.  `Trigger` is one of the 4 selectable options. Selecting this adds a `Trigger` to the list of chosen parameters.  Once this is added to the selected list it can be named.  Unlike `bool`s which have the same `true/false` option, `Trigger`s have a `true` option which automatically returns back to `false`.  A typical example might be to have a Jump option.  If this option is entered during run-time the character will jump.  At the end of the Jump the previous motion (perhaps a walk or run state) will be returned to.

In the example script below, pressing `UpArrow` or `DownArrow` activates the Jump or Crouch triggers using  [SetTrigger](Animator.SetTrigger.html).


              


```
//Attach this script to a GameObject with an Animator component attached.
//For this example, create parameters in the Animator and name them “Crouch” and “Jump”
//Apply these parameters to your transitions between states//This script allows you to trigger an Animator parameter and reset the other that could possibly still be active. Press the up and down arrow keys to do this.using UnityEngine;public class Example : MonoBehaviour
{
    Animator m_Animator;    void Start()
    {
        //Get the Animator attached to the GameObject you are intending to animate.
        m_Animator = gameObject.GetComponent<Animator>();
    }    void Update()
    {
        //Press the up arrow button to reset the trigger and set another one
        if (Input.GetKey(KeyCode.UpArrow))
        {
            //Reset the "Crouch" trigger
            m_Animator.ResetTrigger("Crouch");            //Send the message to the Animator to activate the trigger parameter named "Jump"
            m_Animator.SetTrigger("Jump");
        }        if (Input.GetKey(KeyCode.DownArrow))
        {
            //Reset the "Jump" trigger
            m_Animator.ResetTrigger("Jump");            //Send the message to the Animator to activate the trigger parameter named "Crouch"
            m_Animator.SetTrigger("Crouch");
        }
    }
}
```


            
