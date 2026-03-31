This version of Unity is unsupported.



# [PhysicsScene](PhysicsScene.html).Simulate




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

public void Simulate(float step);






### Parameters



| Parameter | Description |
| --- | --- |
| step | The time to advance physics by. |





### Returns



**void**
        Whether the simulation was run or not.  Running the simulation during physics callbacks will always fail.





### Description



Simulate physics associated with this [PhysicsScene](PhysicsScene.html).





Calling this method causes the physics to be simulated over the specified `step` time.  Only the physics associated with this [PhysicsScene](PhysicsScene.html) will be simulated.  If this [PhysicsScene](PhysicsScene.html) is not the default physics Scene (see [Physics.defaultPhysicsScene](Physics-defaultPhysicsScene.html)) then it is associated with a specific [Scene](SceneManagement.Scene.html) and as such, only components added to that [Scene](SceneManagement.Scene.html) are affected when running the simulation.

If you pass framerate-dependent step values (such as [Time.deltaTime](Time-deltaTime.html)) to the physics engine, your simulation will be less deterministic because of the unpredictable fluctuations in framerate that can arise. To achieve more deterministic physics results, you should pass a fixed step value to [PhysicsScene.Simulate](PhysicsScene.Simulate.html) every time you call it.

You can call [PhysicsScene.Simulate](PhysicsScene.Simulate.html) in the Editor outside of play mode however caution is advised as this will cause the simulation to move GameObject that have a [Rigidbody](Rigidbody.html) component attached.  When simulating in the Editor outside of play mode, a full simulation occurs for all physics components including [Rigidbody](Rigidbody.html), [Collider](Collider.html) and [Joint](Joint.html) including the generation of contacts however contacts are not reported via the standard script callbacks.  This is a safety measure to prevent allowing callbacks to delete objects in the Scene which would not be an undoable operation.
Here is an example of a basic simulation that implements what's being done in the automatic simulation mode.


              


```
using UnityEngine;
using UnityEngine.SceneManagement;public class MultiScenePhysics : MonoBehaviour
{
    private Scene extraScene;    public void Start()
    {
        // First create an extra scene with local physics
        extraScene = SceneManager.CreateScene("Scene", new CreateSceneParameters(LocalPhysicsMode.Physics3D));        // Mark the scene active, so that all the new GameObjects end up in the newly created scene
        SceneManager.SetActiveScene(extraScene);        PopulateExtraSceneWithObjects();
    }    public void FixedUpdate()
    {
        // All of the non-default physics scenes need to be simulated manually
        var physicsScene = extraScene.GetPhysicsScene();
        physicsScene.Simulate(Time.fixedDeltaTime);
    }    public void PopulateExtraSceneWithObjects()
    {
        // Create GameObjects for physics simulation
        var sphere = GameObject.CreatePrimitive(PrimitiveType.Sphere);
        sphere.AddComponent<Rigidbody>();
        sphere.transform.position = Vector3.up * 4;
    }
}
```





Additional resources: [Physics.Simulate](Physics.Simulate.html).


            
