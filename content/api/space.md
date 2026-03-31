This version of Unity is unsupported.



# Space





enumeration


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



















### Description



The coordinate spaces in which to apply transformation to a GameObject.





You can pass a value from this enum as a parameter to methods such as [Transform.Rotate](Transform.Rotate.html) and [Transform.Translate](Transform.Translate.html) to specify which coordinate space the transformation is applied in.

                World coordinate space represented by [Space.World](Space.World.html) refers to the position of a GameObject relative to the origin point (0,0,0) of the x-, y-, and z-axes of the scene. The [Transform.position](Transform-position.html) property gives a GameObject's current position in world space.

                Use [Space.World](Space.World.html) to transform a GameObject relative to its [Transform.position](Transform-position.html) and the scene axes, ignoring the GameObject's own orientation. For example, `transform.Translate(Vector3.forward, Space.World)` adds one unit to the object's [Transform.position](Transform-position.html) on the z-axis of the scene.

                Local coordinate space represented by [Space.Self](Space.Self.html) refers to the position of an object relative to its parent GameObject, including any rotation of the parent GameObject. The [Transform.localPosition](Transform-localPosition.html) property gives a GameObject's current position in local space, which is relative to the parent GameObject if there is one. If a GameObject has no parent, its [Transform.localPosition](Transform-localPosition.html) is the same as its [Transform.position](Transform-position.html).

                For example, a GameObject with no parent and a [Transform.position](Transform-position.html) of (1,3,0) will also have a [Transform.localPosition](Transform-localPosition.html) of (1,3,0). But if a child GameObject to this first object has [Transform.position](Transform-position.html) (1,3,0), the child object's [Transform.localPosition](Transform-localPosition.html) is (0,0,0) because it's in the same position as the parent object.

                Use [Space.Self](Space.Self.html) to transform a GameObject relative to its [Transform.localPosition](Transform-localPosition.html) and its own local axes, taking its orientation into account. For example, `Transform.Translate(Vector3.forward, Space.Self)` adds one unit to the object's [Transform.localPosition](Transform-localPosition.html) on the z-axis of the object, which may differ from the z-axis of the scene depending on the object's orientation. Select an object in the Scene view to see its local position and axes.

                For more information, refer to [Transforms](../Manual/class-Transform.html), [Rotation and orientation in Unity](../Manual/QuaternionAndEulerRotationsInUnity.html), and [Position GameObjects](../Manual/PositioningGameObjects.html) in the Manual.


              


```
// Attach this script to a GameObject.
// This example demonstrates the difference between Space.World and Space.Self in rotation.
// The inWorldSpace field is automatically exposed as a checkbox in the Inspector window labelled In World Space. Enable or disable the checkbox in the Inspector to start in world or self space, respectively.
// Press play to see the GameObject rotating appropriately. Press space or toggle the In World Space checkbox to switch between world and self space.using UnityEngine;public class Example : MonoBehaviour
{
    float rotationSpeed;
    public bool inWorldSpace;    void Start()
    {
        // Set the speed of the rotation
        rotationSpeed = 20.0f;
        // Start off in World.Space
        inWorldSpace = true;
        // Rotate the GameObject a little at the start to show the difference between world and local spaces
        transform.Rotate(60, 0, 60);
    }    void Update()
    {
        // Rotate the GameObject in world space if inWorldSpace is true
        if (inWorldSpace)
            transform.Rotate(Vector3.up * rotationSpeed * Time.deltaTime, Space.World);
        // Otherwise, rotate the GameObject in local space
        else
            transform.Rotate(Vector3.up * rotationSpeed * Time.deltaTime, Space.Self);        // Press the Space button to switch between world and local space states
        if (Input.GetKeyDown(KeyCode.Space))
        {
            // Make the current state switch to the other state
            inWorldSpace = !inWorldSpace;
            // Output the current state to the console
            Debug.Log("World space : " + inWorldSpace.ToString());
        }
    }
}
```





Additional resources: [Transform](Transform.html), [Transform.Rotate](Transform.Rotate.html), [Transform.Translate](Transform.Translate.html).





### Properties



| Property | Description |
| --- | --- |
| World | World coordinate space, relative to the origin point (0,0,0) of the x-, y-, and z-axes of the scene. |
| Self | The local coordinate system of a GameObject relative to its parent, including orientation. |


            
