This version of Unity is unsupported.



# [Transform](Transform.html).eulerAngles




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




                [Switch to Manual](../Manual/class-Transform.html)







                    public [Vector3](Vector3.html) eulerAngles;






### Description



The rotation as Euler angles in degrees.





[Transform.eulerAngles](Transform-eulerAngles.html) represents rotation in world space. When viewing the rotation of a GameObject in the Inspector, you may see different angle values from those stored in this property. This is because the Inspector displays local rotation, for more information see [Transform.localEulerAngles](Transform-localEulerAngles.html).

Euler angles can represent a three dimensional rotation by performing three separate rotations around individual axes. In Unity these rotations are performed around the Z axis, the X axis, and the Y axis, in that order.

You can set the rotation of a Quaternion by setting this property, and you can read the Euler angle values by reading this property.

 When using the .eulerAngles property to set a rotation, it is important to understand that although you are providing X, Y, and Z rotation values to describe your rotation, those values are not stored in the rotation. Instead, the X, Y & Z values are converted to the Quaternion's internal format.

When you read the .eulerAngles property, Unity converts the Quaternion's internal representation of the rotation to Euler angles. Because, there is more than one way to represent any given rotation using Euler angles, the values you read back out may be quite different from the values you assigned. This can cause confusion if you are trying to gradually increment the values to produce animation.

 To avoid these kinds of problems, the recommended way to work with rotations is to avoid relying on consistent results when reading .eulerAngles particularly when attempting to gradually increment a rotation to produce animation. For better ways to achieve this, see the [Quaternion * operator](Quaternion-operator_multiply.html).

 The following example demonstrates the rotation of a GameObject using eulerAngles based on the Input of the user. The example shows that we never rely on reading the Quanternion.eulerAngles to increment the rotation, instead we set it using our Vector3 currentEulerAngles. All rotational changes happen in the currentEulerAngles variable, which are then applied to the Quaternion avoiding the problem mentioned above.


              


```
using UnityEngine;
public class ExampleScript : MonoBehaviour
{
    float rotationSpeed = 45;
    Vector3 currentEulerAngles;
    float x;
    float y;
    float z;    void Update()
    {
        if (Input.GetKeyDown(KeyCode.X)) x = 1 - x;
        if (Input.GetKeyDown(KeyCode.Y)) y = 1 - y;
        if (Input.GetKeyDown(KeyCode.Z)) z = 1 - z;        //modifying the Vector3, based on input multiplied by speed and time
        currentEulerAngles += new Vector3(x, y, z) * Time.deltaTime * rotationSpeed;        //apply the change to the gameObject
        transform.eulerAngles = currentEulerAngles;
    }    void OnGUI()
    {
        GUIStyle style = new GUIStyle();
        style.fontSize = 24;
        GUI.Label(new Rect(10, 0, 0, 0), "Rotating on X:" + x + " Y:" + y + " Z:" + z, style);        GUI.Label(new Rect(10, 25, 0, 0), "Transform.eulerAngle: " + transform.eulerAngles, style);
    }
}
```





Do not set one of the eulerAngles axis separately  (eg. eulerAngles.x = 10; ) since this will lead to drift and undesired rotations.
When setting them to a new value set them all at once as shown above.
Unity converts the angles to and from the rotation stored in [Transform.rotation](Transform-rotation.html).

Angles are expressed modulo 360 degrees. For instance, specifying 1, 361, or -17999 results in the same angle, as demonstrated in the previous example, where currentEulerAngles increase over time beyond 360 for x, y, and z.


            
