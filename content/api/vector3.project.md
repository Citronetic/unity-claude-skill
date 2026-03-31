This version of Unity is unsupported.



# [Vector3](Vector3.html).Project




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

public static [Vector3](Vector3.html) Project([Vector3](Vector3.html) vector,
[Vector3](Vector3.html) onNormal);






### Parameters



| Parameter | Description |
| --- | --- |
| vector | The vector to project. |
| onNormal | The vector to project onto. This vector doesn't need to be normalized. |





### Returns



**Vector3**
        The vector that results from the projection of `vector`. This vector points in the same direction as `onNormal`.





### Description



Projects a vector onto another vector.





The resulting projection is the amount of `vector` that points in the same direction as `onNormal`.

[Image: image]

Diagram showing a vector projected onto the vector `onNormal`. The projected vector extends past `onNormal` in the same direction because the magnitude of `vector` in the direction of `onNormal` is greater than the magnitude of `onNormal`. The result points to the point along the infinite line in the direction of `onNormal` that's closest to the point specified by `vector`.

The function returns a zero vector if `onNormal` is almost zero. `onNormal` doesn't need to be a normalized vector.

You can use projection to work out the closest point along a line to a target vector. This information can be useful for moving or orienting items in the direction of a moving target.


              


```
using UnityEngine;
using System.Collections;public class ExampleClass : MonoBehaviour
{
    void Slide(Transform target, Vector3 railDirection)
    {
        Vector3 heading = target.position - transform.position;
        Vector3 force = Vector3.Project(heading, railDirection);        GetComponent<Rigidbody>().AddForce(force);
    }
}
```


            
