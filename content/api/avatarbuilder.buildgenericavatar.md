This version of Unity is unsupported.



# [AvatarBuilder](AvatarBuilder.html).BuildGenericAvatar




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

public static [Avatar](Avatar.html) BuildGenericAvatar([GameObject](GameObject.html) go,
string rootMotionTransformName);






### Parameters



| Parameter | Description |
| --- | --- |
| go | Root object of your transform hierarchy. |
| rootMotionTransformName | Transform name of the root motion transform. If empty no root motion is defined and you must take care of avatar movement yourself. |





### Description



Create a new generic avatar.





All transforms under the root game object will be part of this generic avatar.


              


```
using UnityEngine;

// This example automatically builds a generic avatar
// for the GameObject it is attached to and assigns it
// to the Animator.
[RequireComponent(typeof(Animator))]
public class GenericAvatarBuilderExample : MonoBehaviour
{
    void Start()
    {
        var animator = GetComponent<Animator>();

        var avatar = AvatarBuilder.BuildGenericAvatar(gameObject, "");
        avatar.name = "RuntimeAvatar";

        animator.avatar = avatar;
    }
}
```


            
