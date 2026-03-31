This version of Unity is unsupported.



# [ArticulationBody](ArticulationBody.html).PublishTransform




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




                [Switch to Manual](../Manual/class-ArticulationBody.html)










## Declaration

public void PublishTransform();






### Description



Reads the position and rotation of the Articulation Body from the physics system and applies it to the corresponding [Transform](Transform.html) component.





Note: This method doesn't update the child Transforms. It should be called from the topmost Transform, down the hierarchy.


              


```
using System.Linq;
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    private PhysicsScene m_SomeScene;
    private ArticulationBody m_RootArticulation;    public void SimulateTrajectory(float totalTime)
    {
        m_SomeScene.RunSimulationStages(0f, SimulationStage.PrepareSimulation);        for (int i = 0; i < totalTime / Time.fixedDeltaTime; i++)
            m_SomeScene.RunSimulationStages(Time.fixedDeltaTime, SimulationStage.RunSimulation);        // Transforms of the ArticulationBody tree are still like they were at the start of the method        var links = m_RootArticulation.gameObject.GetComponentsInChildren<ArticulationBody>().ToList();
        links.Sort((a0, a1) => a0.index.CompareTo(a1.index));
        foreach (var ab in links)
            ab.PublishTransform();        // Transforms of the ArticulationBody tree are now up to date and can be accessed to see where the bodies ended up after simulating for "totalTime" seconds
    }    // Teleports the root body of the Articulation and applies the resulting position and rotation to the Transform component
    public void TeleportAndUpdate(Vector3 position, Quaternion rotation)
    {
        m_RootArticulation.TeleportRoot(position, rotation);
        m_RootArticulation.PublishTransform();
    }
}
```





Simulate a [PhysicsScene](PhysicsScene.html) with an [ArticulationBody](ArticulationBody.html) and use [PublishTransform](ArticulationBody.PublishTransform.html) to read the information from the physics system to the [Transform](Transform.html) component.


            
