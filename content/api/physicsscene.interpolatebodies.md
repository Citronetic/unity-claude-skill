This version of Unity is unsupported.



# [PhysicsScene](PhysicsScene.html).InterpolateBodies




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

public void InterpolateBodies();






### Description



Interpolates Rigidbodies in this [PhysicsScene](PhysicsScene.html).





Interpolates all Rigidbodies in this [PhysicsScene](PhysicsScene.html) with [Rigidbody.interpolation](Rigidbody-interpolation.html) set to either [RigidbodyInterpolation.Interpolate](RigidbodyInterpolation.Interpolate.html) or [RigidbodyInterpolation.Extrapolate](RigidbodyInterpolation.Extrapolate.html) with the current [Time.time](Time-time.html) value.

This method is called automatically for the default [PhysicsScene](PhysicsScene.html) and therefore any manual calls on the [Physics.defaultPhysicsScene](Physics-defaultPhysicsScene.html) will fail.

Additional resources: [PhysicsScene.Simulate](PhysicsScene.Simulate.html), [PhysicsScene.ResetInterpolationPoses](PhysicsScene.ResetInterpolationPoses.html).


              


```
using UnityEngine;public class SimpleSimulator : MonoBehaviour
{
    private PhysicsScene m_PhysicsScene;    private void Update()
    {
        m_PhysicsScene.InterpolateBodies();
    }    private void FixedUpdate()
    {
        m_PhysicsScene.ResetInterpolationPoses();
        m_PhysicsScene.Simulate(Time.fixedDeltaTime);
    }
}
```





Simulates and interpolates a non-default [PhysicsScene](PhysicsScene.html).


            
