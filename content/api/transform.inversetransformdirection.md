This version of Unity is unsupported.



# [Transform](Transform.html).InverseTransformDirection




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










## Declaration

public [Vector3](Vector3.html) InverseTransformDirection([Vector3](Vector3.html) direction);






### Description



Transforms a `direction` from world space to local space. The opposite of [Transform.TransformDirection](Transform.TransformDirection.html).





This operation is not affected by scale or position of the transform. The transformed vector has the same length as the original.

If you need the inverse operation to transform from local space to world space you can use [Transform.TransformDirection](Transform.TransformDirection.html)

You should use [Transform.InverseTransformPoint](Transform.InverseTransformPoint.html) if the vector represents a position in space rather than a direction.

If you need to transform many directions at once consider using [Transform.InverseTransformDirections](Transform.InverseTransformDirections.html) instead as it is much faster than repeatedly calling this function.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        // transform the world forward into local space:
        Vector3 relative;
        relative = transform.InverseTransformDirection(Vector3.forward);
        Debug.Log(relative);
    }
}
```





Additional resources:[Transform.TransformDirection](Transform.TransformDirection.html), [Transform.InverseTransformDirections](Transform.InverseTransformDirections.html), [Transform.InverseTransformPoint](Transform.InverseTransformPoint.html), [Transform.InverseTransformVector](Transform.InverseTransformVector.html).




---








## Declaration

public [Vector3](Vector3.html) InverseTransformDirection(float x,
float y,
float z);






### Description



Transforms the direction `x`, `y`, `z` from world space to local space. The opposite of [Transform.TransformDirection](Transform.TransformDirection.html).





This operation is not affected by scale or position of the transform. The transformed vector has the same length as the original.

If you need the inverse operation to transform from local space to world space you can use [Transform.TransformDirection](Transform.TransformDirection.html)

You should use [Transform.InverseTransformPoint](Transform.InverseTransformPoint.html) if the vector represents a position in space rather than a direction.

If you need to transform many directions at once consider using [Transform.InverseTransformDirections](Transform.InverseTransformDirections.html) instead as it is much faster than repeatedly calling this function.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        // transform the world forward into local space:
        Vector3 relative;
        relative = transform.InverseTransformDirection(Vector3.forward);
        Debug.Log(relative);
    }
}
```





Additional resources:[Transform.TransformDirection](Transform.TransformDirection.html), [Transform.InverseTransformDirections](Transform.InverseTransformDirections.html), [Transform.InverseTransformPoint](Transform.InverseTransformPoint.html), [Transform.InverseTransformVector](Transform.InverseTransformVector.html).


            
