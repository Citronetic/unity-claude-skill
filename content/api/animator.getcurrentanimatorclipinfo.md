This version of Unity is unsupported.



# [Animator](Animator.html).GetCurrentAnimatorClipInfo




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

public AnimatorClipInfo[] GetCurrentAnimatorClipInfo(int layerIndex);






### Parameters



| Parameter | Description |
| --- | --- |
| layerIndex | The layer index. |





### Returns



**AnimatorClipInfo[]**
        An array of all the [AnimatorClipInfo](AnimatorClipInfo.html) in the current state.





### Description



Returns an array of all the [AnimatorClipInfo](AnimatorClipInfo.html) in the current state of the given layer.


              


```
//This script outputs the name and length of the Animation clip played at start-up.using UnityEngine;public class GetCurrentAnimatorClipInfoExample : MonoBehaviour
{
    Animator m_Animator;
    string m_ClipName;
    AnimatorClipInfo[] m_CurrentClipInfo;    float m_CurrentClipLength;    void Start()
    {
        //Get them_Animator, which you attach to the GameObject you intend to animate.
        m_Animator = gameObject.GetComponent<Animator>();
        //Fetch the current Animation clip information for the base layer
        m_CurrentClipInfo = this.m_Animator.GetCurrentAnimatorClipInfo(0);
        //Access the current length of the clip
        m_CurrentClipLength = m_CurrentClipInfo[0].clip.length;
        //Access the Animation clip name
        m_ClipName = m_CurrentClipInfo[0].clip.name;
    }    void OnGUI()
    {
        //Output the current Animation name and length to the screen
        GUI.Label(new Rect(0, 0, 200, 20),  "Clip Name : " + m_ClipName);
        GUI.Label(new Rect(0, 30, 200, 20),  "Clip Length : " + m_CurrentClipLength);
    }
}
```




---








## Declaration

public void GetCurrentAnimatorClipInfo(int layerIndex,
List<AnimatorClipInfo> clips);






### Parameters



| Parameter | Description |
| --- | --- |
| layerIndex | The layer index. |
| clips | The list of AnimatorClipInfo to fill. |





### Description



Fills `clips` with the list of all the [AnimatorClipInfo](AnimatorClipInfo.html) in the current state of the given layer.





Additional resources: [GetCurrentAnimatorClipInfoCount](Animator.GetCurrentAnimatorClipInfoCount.html).


            
