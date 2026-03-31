This version of Unity is unsupported.



# Vector3 Constructor




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

public Vector3(float x,
float y,
float z);






### Parameters



| Parameter | Description |
| --- | --- |
| x | The x component of the vector. |
| y | The y component of the vector. |
| z | The z component of the vector. |





### Description



Creates a new three-dimensional vector or point.





The x, y, z parameters are used to initialize the corresponding x,y,z vector components.


              


```
// Attach this script to a GameObject.
// Attach a Rigidbody component to the GameObject (Click Add Component button in the Inspector window and go to Physics<Rigidbody)
// This script moves a GameObject upwards using a Vector3
using UnityEngine;public class Vector3CtorExample : MonoBehaviour
{
    Vector3 m_YDirectionVector;
    Rigidbody m_Rigidbody;
    float m_Speed = 2.0f;    void Start()
    {
        // Initialize the Y direction vector
        m_YDirectionVector = new Vector3(0.0f, 1.0f, 0.0f);
        // Fetch the RigidBody you attach to the GameObject
        m_Rigidbody = GetComponent<Rigidbody>();
    }    void Update()
    {
        // Move the RigidBody m_Speed units per second  in the Y direction
        m_Rigidbody.linearVelocity = m_YDirectionVector * m_Speed;
    }
}
```




---








## Declaration

public Vector3(float x,
float y);






### Parameters



| Parameter | Description |
| --- | --- |
| x | The x component of the vector. |
| y | The y component of the vector. |





### Description



Creates a new three dimensional vector or point in the xy-plane.





The x, y parameters are used to set the x,y vector components and the `z` component is set to zero.


            
