This version of Unity is unsupported.



# [Vector3](Vector3.html).Reflect




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

public static [Vector3](Vector3.html) Reflect([Vector3](Vector3.html) inDirection,
[Vector3](Vector3.html) inNormal);






### Parameters



| Parameter | Description |
| --- | --- |
| inDirection | The vector to be reflected in the plane. |
| inNormal | The normal vector that defines the plane of reflection. |





### Description



Reflects a vector off the plane defined by a normal vector.





This method calculates the reflection vector using the following formula:

**B** = **A** − 2 × **N** × **A** ⋅ **N**

where A is the incoming vector and N defines the normal (perpendicular) vector of the reflection plane.

The returned value is a vector of equal magnitude to `inDirection` but with its direction reflected.

[Image: image]

Reflection of a vector off a plane.


              


```
// This example moves a GameObject to the reflected position
// of a second object
//
// To run this example, create two GameObjects at different
// positions. In the Editor, assign these GameObjects as the
// Original and Relflect Object variables. The reflected object
// moves to the reflected position of the original object. using UnityEngine;public class ReflectExample : MonoBehaviour
{
    public Transform originalObject;
    public Transform reflectedObject;    void Update()
    {
        // Makes the reflected object appear opposite of the original object,
        // mirrored in the y-z plane of the world
        reflectedObject.position = Vector3.Reflect(originalObject.position, Vector3.right);
    }
}
```


            
