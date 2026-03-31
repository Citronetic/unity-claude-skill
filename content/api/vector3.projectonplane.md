This version of Unity is unsupported.



# [Vector3](Vector3.html).ProjectOnPlane




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

public static [Vector3](Vector3.html) ProjectOnPlane([Vector3](Vector3.html) vector,
[Vector3](Vector3.html) planeNormal);






### Parameters



| Parameter | Description |
| --- | --- |
| vector | The vector to project on the plane. |
| planeNormal | The normal which defines the plane to project on. |





### Returns



**Vector3**
        The vector that results from projection of `vector` on the plane.





### Description



Projects a vector onto a plane.





This method resolves the input vector onto the plane and returns the resulting vector. The new vector is orthogonal to `planeNormal` and parallel to the plane.

                Note that `planeNormal` does not need to be normalized.


              


```
// This example rotates a cube above a tilted plane. As the cube rotates, the cube's position vector is projected onto the plane and rendered as a line. using UnityEngine;public class ProjectOnPlaneExampleUpdate: MonoBehaviour
{
    GameObject groundPlane;
    GameObject rotObject;
    LineRenderer line;
        void Start ()
    {
        // Create the plane
        groundPlane = GameObject.CreatePrimitive(PrimitiveType.Plane);
        groundPlane.transform.Rotate(-30, 10, 0);        // Create the item to rotate
        rotObject = GameObject.CreatePrimitive(PrimitiveType.Cube);
        rotObject.transform.position = new Vector3(5,5,0);
        line = rotObject.AddComponent<LineRenderer>();
    }    void Update()
    {
        // Set the rotation origin
        Vector3 origin = Vector3.zero;        // Rotate the object above the plane
        rotObject.transform.RotateAround(origin, Vector3.up, 20 * Time.deltaTime);        // Project the location of the cube onto the plane
        Vector3 projected = Vector3.ProjectOnPlane(rotObject.transform.position, groundPlane.transform.up);        // Draw the projected vector as a line
        line.SetPosition(0, origin);
        line.SetPosition(1, projected);
        line.startWidth = 0.1f;

    }
}
```





Additional resources: [Project](Vector3.Project.html), [Reflect](Vector3.Reflect.html).


            
