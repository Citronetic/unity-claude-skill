This version of Unity is unsupported.



# [Rigidbody](Rigidbody.html).PublishTransform




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




                [Switch to Manual](../Manual/class-Rigidbody.html)










## Declaration

public void PublishTransform();






### Description



Applies the [position](Rigidbody-position.html) and [rotation](Rigidbody-rotation.html) of the Rigidbody to the corresponding [Transform](Transform.html) component.





This is more efficient than setting [Transform.position](Transform-position.html) and [Transform.rotation](Transform-rotation.html) manually.

Note: This method doesn't update the child Transforms. It should be called from the topmost Transform, down the hierarchy.


              


```
using UnityEngine;public class PositionTracker : MonoBehaviour
{
    private PhysicsScene m_SomeScene;
    private Rigidbody m_Rigidbody;    public void SimulateTrajectory(float totalTime)
    {
        m_SomeScene.RunSimulationStages(0f, SimulationStage.PrepareSimulation);        for (int i = 0; i < totalTime / Time.fixedDeltaTime; i++)
            m_SomeScene.RunSimulationStages(Time.fixedDeltaTime, SimulationStage.RunSimulation);        // Transform of the m_Rigidbody is still like it was at the start of the method
        m_Rigidbody.PublishTransform();
        // Transform of the m_Rigidbody is now up to date and can be accessed to see where the body ended up after simulating for "totalTime" seconds
    }
}
```





Simulate a [PhysicsScene](PhysicsScene.html) with a [Rigidbody](Rigidbody.html) and use [PublishTransform](Rigidbody.PublishTransform.html) to read the information from the physics system to the [Transform](Transform.html) component.


            
