This version of Unity is unsupported.



# [AnimationHumanStream](Animations.AnimationHumanStream.html).SolveIK




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

public void SolveIK();






### Description



Execute the IK solver.





The humanoid IK solver is executed using the IK goal position, rotation, and weight currently set in the [AnimationHumanStream](Animations.AnimationHumanStream.html).


              


```
using UnityEngine;
using UnityEngine.Playables;
using UnityEngine.Animations;public struct IKJob : IAnimationJob
{
    public TransformSceneHandle effector;
    public PropertySceneHandle positionWeight;
    public PropertySceneHandle rotationWeight;    public void ProcessRootMotion(AnimationStream stream) {}    public void ProcessAnimation(AnimationStream stream)
    {
        AnimationHumanStream humanStream = stream.AsHuman();
        if (effector.IsValid(stream) && positionWeight.IsValid(stream) && rotationWeight.IsValid(stream))
        {
            humanStream.SetGoalPosition(AvatarIKGoal.LeftFoot, effector.GetPosition(stream));
            humanStream.SetGoalRotation(AvatarIKGoal.LeftFoot, effector.GetRotation(stream));
            humanStream.SetGoalWeightPosition(AvatarIKGoal.LeftFoot, positionWeight.GetFloat(stream));
            humanStream.SetGoalWeightRotation(AvatarIKGoal.LeftFoot, rotationWeight.GetFloat(stream));
        }        humanStream.SolveIK();
    }
}
```


            
