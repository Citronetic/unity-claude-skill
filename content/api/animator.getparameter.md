This version of Unity is unsupported.



# [Animator](Animator.html).GetParameter




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

public [AnimatorControllerParameter](AnimatorControllerParameter.html) GetParameter(int index);






### Parameters



| Parameter | Description |
| --- | --- |
| index | The index of the parameter to obtain. |





### Returns



**AnimatorControllerParameter**
        The parameter at the given index.





### Description



Obtains a reference to the AnimatorControllerParameter at the given index.





Throws an `IndexOutOfRangeException` when the index is not in the range from greater than or equal to 0 to less than [Animator.parameterCount](Animator-parameterCount.html).


              


```
using UnityEngine;

// This example demonstrates how to use the Animator.GetParameter method to get information about the parameters of an Animator controller.
[RequireComponent(typeof(Animator))]
public class GetParameterExample : MonoBehaviour
{
    Animator m_Animator;

    void Start()
    {
        m_Animator = GetComponent<Animator>();

        for (var i = 0; i < m_Animator.parameterCount; i++)
        {
            var parameter = m_Animator.GetParameter(i);
            Debug.Log($"Parameter {i}: {parameter.name} ({parameter.type})");
        }
    }
}
```





Additional resources: [AnimationParameters](../Manual/AnimationParameters.html) manual. [AnimatorController.parameters](Animations.AnimatorController-parameters.html) for accessing the list of parameters.


            
