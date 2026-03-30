This version of Unity is unsupported.



# [RotationConstraint](Animations.RotationConstraint.html).rotationAxis




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












                    public [Animations.Axis](Animations.Axis.html) rotationAxis;






### Description



The axes affected by the RotationConstraint.





Use this property to restrict the effect of the constraint on a particular axis.


              


```
using UnityEngine.Animations;public class ConstraintAxis
{
    public void ConstrainOnlyOnXY(RotationConstraint component)
    {
        component.rotationAxis = Axis.X | Axis.Y;
    }
}
```


            
