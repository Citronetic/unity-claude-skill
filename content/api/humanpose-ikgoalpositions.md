This version of Unity is unsupported.



# [HumanPose](HumanPose.html).ikGoalPositions




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












                    public ReadOnlySpan<Vector3> ikGoalPositions;






### Description



The positions of the four IK goals: left foot, right foot, left hand and right hand in character space.





Use in conjunction with [HumanPose.bodyRotation](HumanPose-bodyRotation.html), [HumanPose.bodyPosition](HumanPose-bodyPosition.html) and [Animator.humanScale](Animator-humanScale.html) to calculate the global position of Avatar IK effectors. See code example for details.

**Note**: These values can be used to create Avatar IK goal position keyframes in Humanoid AnimationClips.


              


```
using System;
using UnityEngine;

[RequireComponent(typeof(Animator))]
[ExecuteInEditMode]
public class HumanPoseHandlerEffectorDisplay : MonoBehaviour
{
    private Animator m_Animator;
    private HumanPoseHandler m_HumanPoseHandler;
    private HumanPose m_HumanPose;

    void OnEnable()
    {
        m_Animator = GetComponent<Animator>();
        m_HumanPoseHandler = new HumanPoseHandler(m_Animator.avatar, m_Animator.avatarRoot);
        m_HumanPose = new HumanPose();
    }

    private void OnDrawGizmos()
    {
        //Acquire the human pose from the current position of the transforms
        m_HumanPoseHandler.GetHumanPose(ref m_HumanPose);

        //backup the gizmos static color.
        var color = Gizmos.color;
        Gizmos.color = Color.yellow;
        for (int i = 0; i < 4; i++)
        {
            //Acquire the local position and rotation of the effectors
            var localPosition = m_HumanPose.ikGoalPositions[i];
            var localRotation = m_HumanPose.ikGoalRotations[i];

            //Calculate the global position of the effector by rotating by the body rotation, then adding the body position
            var globalPosition = m_HumanPose.bodyRotation * localPosition + m_HumanPose.bodyPosition;

            //Multiply the position by the human scale to convert the normalized position into the global position
            globalPosition *= m_Animator.humanScale;

            //Calculate the global rotation
            var globalRotation = m_HumanPose.bodyRotation * localRotation;

            //Backup the static gizmos matrix
            var backup = Gizmos.matrix;

            //Set the matrix to rotate the sphere to align with the effector
            Gizmos.matrix = Matrix4x4.identity * Matrix4x4.Translate(globalPosition) * Matrix4x4.Rotate(globalRotation) * Matrix4x4.Translate(-globalPosition);

            Gizmos.color = Color.red;
            Gizmos.DrawLine(globalPosition, globalPosition + Vector3.right * 0.2f);
            Gizmos.color = Color.green;
            Gizmos.DrawLine(globalPosition, globalPosition + Vector3.up * 0.2f);
            Gizmos.color = Color.blue;
            Gizmos.DrawLine(globalPosition, globalPosition + Vector3.forward * 0.2f);

            //Draw the sphere
            Gizmos.DrawWireSphere(globalPosition, 0.05f);

            //Restore the static gizmos matrix
            Gizmos.matrix = backup;
        }

        //Restore the gizmos static color
        Gizmos.color = color;
    }
}
```


            
