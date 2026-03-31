This version of Unity is unsupported.



# [GameObject](GameObject.html).CreatePrimitive




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




                [Switch to Manual](../Manual/class-GameObject.html)










## Declaration

public static [GameObject](GameObject.html) CreatePrimitive([PrimitiveType](PrimitiveType.html) type);






### Parameters



| Parameter | Description |
| --- | --- |
| type | The type of primitive object to create, specified as a member of the PrimitiveType enum. |





### Description



Creates a GameObject of the specified PrimtiveType with a mesh renderer and appropriate collider.





For `CreatePrimitive` to succeed at runtime, your project must reference the following components:



          - [MeshFilter](MeshFilter.html)

          - [MeshRenderer](MeshRenderer.html)

          - [BoxCollider](BoxCollider.html)

          - [SphereCollider](SphereCollider.html)





To ensure you have the required references, declare private properties of these types to prevent them being stripped from the build. Your project must also reference the Default-Material. If it doesn't, the primitive object will be shown in pink to indicate the missing material.

For more information, refer to [Primitive and placeholder objects](../Manual/PrimitiveObjects.html) in the Manual.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    // Create a plane, sphere and cube in the Scene.    void Start()
    {
        GameObject plane  = GameObject.CreatePrimitive(PrimitiveType.Plane);        GameObject cube = GameObject.CreatePrimitive(PrimitiveType.Cube);
        cube.transform.position = new Vector3(0, 0.5f, 0);        GameObject sphere = GameObject.CreatePrimitive(PrimitiveType.Sphere);
        sphere.transform.position = new Vector3(0, 1.5f, 0);        GameObject capsule = GameObject.CreatePrimitive(PrimitiveType.Capsule);
        capsule.transform.position = new Vector3(2, 1, 0);        GameObject cylinder = GameObject.CreatePrimitive(PrimitiveType.Cylinder);
        cylinder.transform.position = new Vector3(-2, 1, 0);
    }
}
```





Additional resources: [PrimitiveType](PrimitiveType.html)


            
