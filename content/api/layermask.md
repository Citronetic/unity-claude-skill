This version of Unity is unsupported.



# LayerMask





struct in
          UnityEngine



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Specifies Layers to use in a [Physics.Raycast](Physics.Raycast.html).





A [GameObject](GameObject.html) can use up to 32 [LayerMask](LayerMask.html)s supported by the Editor. The first 8 of these `Layers` are specified by Unity; the following 24 are controllable by the user.

Bitmasks represent the 32 Layers and define them as `true` or `false`. Each bitmask describes whether the `Layer` is used. As an example, bit 5 can be set to 1 (`true`). This will allow the use of the built-in `Water` setting.

`Edit->Settings->Tags and Layers` option shows the use of the 32 bitmasks. Each `Layer` is shown with a string setting. As an example `Built-in Layer 0` is set as `Default`; `Built-in Layer 1` is set as `TransparentFX`. New named `Layer`s are added above bitmask layer 8. A selected `GameObject` will show the chosen `Layer` at top right of the Inspector. The example below has `User Layer 13` set to "Wall". This causes the assigned `GameObject` to be treated as part of a building.

In the following script example, [Physics.Raycast](Physics.Raycast.html) sends a ray into the world. [Camera.main](Camera-main.html) can be rotated around the y-axis and fire a ray. Three [GameObject](GameObject.html)s represent walls that can be hit by the fired ray. Each [GameObject](GameObject.html) has [GameObject.layer](GameObject-layer.html) set to the "Wall" [layerMask](LayerMask-layerMask.html).


              


```
using UnityEngine;// Fire a gun at 3 walls in the scene.
//
// The Raycast will be aimed in the range of -45 to 45 degrees. If the Ray hits any of the
// walls true will be returned . The three walls all have a Wall Layer attached.  The left
// and right keys, and the space key, are all used to aim and fire.
//
// Quad floor based at (0, -0.5, 0), rotated in x by 90 degrees, scale (8, 8, 8).
// ZCube wall at (0, 0.5, 6), scale (3, 2, 0.5).
// LCube wall at (-3, 0, 3), scale (0.5, 1, 4).
// RCube wall at (3, 1.5, 3), scale (1, 4, 4).public class ExampleScript : MonoBehaviour
{
    private float cameraRotation;    void Start()
    {
        Camera.main.transform.position = new Vector3(0, 0.5f, 0);
        cameraRotation = 0.0f;
    }    // Rotate the camera based on what the user wants to look at.
    // Avoid rotating more than +/-45 degrees.
    void Update()
    {
        if (Input.GetKey("left"))
        {
            cameraRotation -= 1f;
            if (cameraRotation < -45.0f)
            {
                cameraRotation = -45.0f;
            }
        }        if (Input.GetKey("right"))
        {
            cameraRotation += 1f;
            if (cameraRotation > 45.0f)
            {
                cameraRotation = 45.0f;
            }
        }        // Rotate the camera
        Camera.main.transform.localEulerAngles = new Vector3(0.0f, cameraRotation, 0.0f);
    }    void FixedUpdate()
    {
        Transform transform = Camera.main.transform;        if (Input.GetKeyUp("space"))
        {
            // Check for a Wall.
            LayerMask mask = LayerMask.GetMask("Wall");            // Check if a Wall is hit.
            if (Physics.Raycast(transform.position, transform.forward, 20.0f, mask))
            {
                Debug.Log("Fired and hit a wall");
            }
        }
    }
}
```





**Note:** [LayerMask](LayerMask.html) is a bitmask.  Use [LayerMask.GetMask](LayerMask.GetMask.html) and [LayerMask.LayerToName](LayerMask.LayerToName.html)
to generate the bitmask.





### Properties



| Property | Description |
| --- | --- |
| value | Converts a layer mask value to an integer value. |





### Static Methods



| Method | Description |
| --- | --- |
| GetMask | Given a set of layer names as defined by either a Builtin or a User Layer in the Tags and Layers manager, returns the equivalent layer mask for all of them. |
| LayerToName | Given a layer number, returns the name of the layer as defined in either a Builtin or a User Layer in the Tags and Layers manager. |
| NameToLayer | Given a layer name, returns the layer index as defined by either a Builtin or a User Layer in the Tags and Layers manager. |





### Operators



| Operator | Description |
| --- | --- |
| LayerMask | Implicitly converts an integer to a LayerMask. |


            
