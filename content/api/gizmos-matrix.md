This version of Unity is unsupported.



# [Gizmos](Gizmos.html).matrix




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












                    public static [Matrix4x4](Matrix4x4.html) matrix;






### Description



Sets the [Matrix4x4](Matrix4x4.html) that the Unity Editor uses to draw [Gizmos](Gizmos.html).





The [Gizmos.matrix](Gizmos-matrix.html) stores the position, rotation and scale of the [Gizmos](Gizmos.html). By default, [Gizmos](Gizmos.html) always uses world coordinates. The default [Gizmos.matrix](Gizmos-matrix.html) transforms the world coordinates using a default identity matrix. [Transform.localToWorldMatrix](Transform-localToWorldMatrix.html) changes local coordinate space to world space.

[GameObject](GameObject.html)s often use local coordinates. [Gizmos.matrix](Gizmos-matrix.html) changes these local coordinates into world coordinates to allow [Gizmos](Gizmos.html) to use them.  For example, a rotating object uses local coordinates.  A transfer into world coordinates happens using [Gizmos.matrix](Gizmos-matrix.html). To visualise the  object, use [Gizmos.DrawCube](Gizmos.DrawCube.html). See below.

To use the example to draw a red, semi-transparent, cube gizmo:

1. Place this example script on a Cylinder at the origin.

2. Select the Cylinder in the Hierarchy and then click the `Play` button.

3. Next, click the `Scene` button. The gizmo should appear.

The cylinder will rotate in `Play` mode and be seen rotating in `Scene` view.


              


```
using UnityEngine;

public class GizmosExample : MonoBehaviour
{
    public float rotationSpeed = 50.0f;

    void OnDrawGizmosSelected()
    {
        Gizmos.color = new Color(0.75f, 0.0f, 0.0f, 0.75f);

        // Convert the local coordinate values into world
        // coordinates for the matrix transformation.
        Gizmos.matrix = transform.localToWorldMatrix;
        Gizmos.DrawCube(Vector3.zero, Vector3.one);
    }

    // Rotate the cube.
    void Update()
    {
        float zRot = rotationSpeed * Time.deltaTime;
        transform.Rotate(0.0f, 0.0f, zRot);
    }
}
```


            
