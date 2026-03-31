This version of Unity is unsupported.



# [Animator](Animator.html).GetCurrentAnimatorStateInfo




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

public [AnimatorStateInfo](AnimatorStateInfo.html) GetCurrentAnimatorStateInfo(int layerIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| layerIndex | The layer index. |





### Returns



**AnimatorStateInfo**
        An [AnimatorStateInfo](AnimatorStateInfo.html) with the information on the current state.





### Description



Returns an [AnimatorStateInfo](AnimatorStateInfo.html) with the information on the current state.





Fetches the data from the current state in the Animator. Use this to get details from the state, including accessing the state’s speed, length, name and other variables. For gathering information from the clips that the states hold, see [Animator.GetCurrentAnimatorClipInfo](Animator.GetCurrentAnimatorClipInfo.html).


              


```
//Create a GameObject and attach an Animator component (Click the Add Component button in the Inspector window, go to Miscellaneous>Animator).
//Create an Animator by going to Assets >  Create > Animator Controller. Attach this Controller to the Animator attached to your GameObject
//In the Animator Controller, create a Trigger parameter in the Parameters tab and name it “Jump”. Then create states and transition arrows that use this parameter.//This script triggers an Animation parameter when you press the space key.using UnityEngine;public class Example : MonoBehaviour
{
    Animator m_Animator;
    //Use to output current speed of the state to the screen
    float m_CurrentSpeed;    void Start()
    {
        //Get the Animator, which you attach to the GameObject you intend to animate.
        m_Animator = gameObject.GetComponent<Animator>();
        //The current speed of the first Animator state
        m_CurrentSpeed = m_Animator.GetCurrentAnimatorStateInfo(0).speed;
    }    void Update()
    {
        //Press the space bar to tell the Animator to trigger the Jump Animation
        if (Input.GetKeyDown(KeyCode.Space))
        {
            m_Animator.SetTrigger("Jump");
        }        //When entering the Jump state in the Animator, output the message in the console
        if (m_Animator.GetCurrentAnimatorStateInfo(0).IsName("Jump"))
        {
            Debug.Log("Jumping");
        }
    }    void OnGUI()
    {
        //Output the first Animation speed to the screen
        GUI.Label(new Rect(25, 25, 200, 20),  "Speed of State : " + m_CurrentSpeed);
    }
}
```


            
