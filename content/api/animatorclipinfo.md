This version of Unity is unsupported.



# AnimatorClipInfo





struct in
          UnityEngine



/



Implemented in:[UnityEngine.AnimationModule](UnityEngine.AnimationModule.html)


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



Information about clip being played and blended by the Animator.





Additional resources: [Animator.GetCurrentAnimatorClipInfo](Animator.GetCurrentAnimatorClipInfo.html) and [Animator.GetNextAnimatorClipInfo](Animator.GetNextAnimatorClipInfo.html).


              


```
//Create a GameObject and attach an Animator component (Click the Add Component button in the Inspector of the GameObject and go to Miscellaneous>Animator). Set up the Animator how you would like.
//Attach this script to the GameObject//This script outputs the current clip from the Animator to the console
using UnityEngine;public class AnimationClipInfoClipExample : MonoBehaviour
{
    Animator m_Animator;
    AnimatorClipInfo[] m_AnimatorClipInfo;    // Use this for initialization
    void Start()
    {
        //Fetch the Animator component from the GameObject
        m_Animator = GetComponent<Animator>();
        //Get the animator clip information from the Animator Controller
        m_AnimatorClipInfo = m_Animator.GetCurrentAnimatorClipInfo(0);
        //Output the name of the starting clip
        Debug.Log("Starting clip : " + m_AnimatorClipInfo[0].clip);
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| clip | Returns the animation clip played by the Animator. |
| weight | Returns the blending weight used by the Animator to blend this clip. |


            
