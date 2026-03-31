This version of Unity is unsupported.



# [Transform](Transform.html).forward




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







                    public [Vector3](Vector3.html) forward;






### Description



Returns a normalized vector representing the blue axis of the transform in world space.





Unlike [Vector3.forward](Vector3-forward.html), which is a constant direction in world space, [Transform.forward](Transform-forward.html) is the local forward direction for this GameObject. Rotating this GameObject will change the [Transform.forward](Transform-forward.html) direction.

The example below shows how to manipulate a GameObject’s position along the Z axis (blue axis) of the transform in world space.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    Rigidbody m_Rigidbody;
    float m_Speed;    void Start()
    {
        //Fetch the Rigidbody component you attach from your GameObject
        m_Rigidbody = GetComponent<Rigidbody>();
        //Set the speed of the GameObject
        m_Speed = 10.0f;
    }    void Update()
    {
        if (Input.GetKey(KeyCode.UpArrow))
        {
            //Move the Rigidbody forwards constantly at speed you define (the blue arrow axis in Scene view)
            m_Rigidbody.velocity = transform.forward * m_Speed;
        }        if (Input.GetKey(KeyCode.DownArrow))
        {
            //Move the Rigidbody backwards constantly at the speed you define (the blue arrow axis in Scene view)
            m_Rigidbody.velocity = -transform.forward * m_Speed;
        }        if (Input.GetKey(KeyCode.RightArrow))
        {
            //Rotate the sprite about the Y axis in the positive direction
            transform.Rotate(new Vector3(0, 1, 0) * Time.deltaTime * m_Speed, Space.World);
        }        if (Input.GetKey(KeyCode.LeftArrow))
        {
            //Rotate the sprite about the Y axis in the negative direction
            transform.Rotate(new Vector3(0, -1, 0) * Time.deltaTime * m_Speed, Space.World);
        }
    }
}
```





Another example:


              


```
using UnityEngine;// Computes the angle between the direction of the target from this object and this object's viewing direction (forward).public class Example : MonoBehaviour
{
    public float angleBetween = 0.0f;
    public Transform target;    void Update()
    {
        Vector3 targetDir = target.position - transform.position;
        angleBetween = Vector3.Angle(transform.forward, targetDir);
    }
}
```


            
