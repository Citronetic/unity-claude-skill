This version of Unity is unsupported.



# [Transform](Transform.html).TransformPoint




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

public [Vector3](Vector3.html) TransformPoint([Vector3](Vector3.html) position);






### Description



Transforms `position` from local space to world space.





Note that the returned position is affected by scale. Use [Transform.TransformDirection](Transform.TransformDirection.html) if you are dealing with direction vectors.

You can perform the opposite conversion, from world to local space using [Transform.InverseTransformPoint](Transform.InverseTransformPoint.html).

If you need to transform many points at once consider using [Transform.TransformPoints](Transform.TransformPoints.html) instead as it is much faster than repeatedly calling this function.

Additional resources: [Transform.TransformPoints](Transform.TransformPoints.html), [Transform.TransformDirection](Transform.TransformDirection.html), [Transform.TransformVector](Transform.TransformVector.html).


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public GameObject someObject;
    public Vector3 thePosition;    void Start()
    {
        // Instantiate an object to the right of the current object
        thePosition = transform.TransformPoint(Vector3.right * 2);
        Instantiate(someObject, thePosition, someObject.transform.rotation);
    }
}
```




---








## Declaration

public [Vector3](Vector3.html) TransformPoint(float x,
float y,
float z);






### Description



Transforms the position `x`, `y`, `z` from local space to world space.





Note that the returned position is affected by scale. Use [Transform.TransformDirection](Transform.TransformDirection.html) if you are dealing with direction vectors.

You can perform the opposite conversion, from world to local space using [Transform.InverseTransformPoint](Transform.InverseTransformPoint.html).

If you need to transform many points at once consider using [Transform.TransformPoints](Transform.TransformPoints.html) instead as it is much faster than repeatedly calling this function.

Additional resources: [Transform.TransformPoints](Transform.TransformPoints.html), [Transform.TransformDirection](Transform.TransformDirection.html), [Transform.TransformVector](Transform.TransformVector.html).


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    public GameObject someObject;    void Start()
    {
        // Instantiate an object to the right of the current object
        Vector3 thePosition = transform.TransformPoint(2, 0, 0);
        Instantiate(someObject, thePosition, someObject.transform.rotation);
    }
}
```


            
