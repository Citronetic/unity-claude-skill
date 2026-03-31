This version of Unity is unsupported.



# CollisionDetectionMode





enumeration


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



















### Description



The collision detection mode constants used for [Rigidbody.collisionDetectionMode](Rigidbody-collisionDetectionMode.html).


              


```
//This script allows you to switch collision detection mode at the press of the space key, and move your GameObject. It also outputs collisions that occur to the console.
//Attach this script to a GameObject and make sure it has a Rigidbody component
//If it doesn't have a Rigidbody component, click the GameObject, go to its Inspector and click the Add Component button. Then, go to Physics>Rigidbody.
//Create another GameObject. Make sure it has a Collider, so you can test collisions between them.using UnityEngine;public class Example : MonoBehaviour
{
    Rigidbody m_Rigidbody;
    public float m_Speed;    void Start()
    {
        //Fetch the Rigidbody of the GameObject (make sure this is attached in the Inspector window)
        m_Rigidbody = GetComponent<Rigidbody>();
        //Make sure the Rigidbody can't rotate or move in the z axis for this example
        m_Rigidbody.constraints = RigidbodyConstraints.FreezeRotation | RigidbodyConstraints.FreezePositionZ;
    }    void Update()
    {
        //Change the GameObject's movement in the X axis
        float translationX = Input.GetAxis("Horizontal") * m_Speed;
        //Change the GameObject's movement in the Y axis
        float translationY = Input.GetAxis("Vertical") * m_Speed;        //Move the GameObject
        transform.Translate(new Vector3(translationX, translationY, 0));        //Press the space key to switch the collision detection mode
        if (Input.GetKeyDown(KeyCode.Space))
            SwitchCollisionDetectionMode();
    }    //Detect when there is a collision starting
    void OnCollisionEnter(Collision collision)
    {
        //Ouput the Collision to the console
        Debug.Log("Collision : " + collision.gameObject.name);
    }    //Detect when there is are ongoing Collisions
    void OnCollisionStay(Collision collision)
    {
        //Output the Collision to the console
        Debug.Log("Stay : " + collision.gameObject.name);
    }    //Switch between the different Collision Detection Modes
    void SwitchCollisionDetectionMode()
    {
        switch (m_Rigidbody.collisionDetectionMode)
        {
            //If the current mode is continuous, switch it to continuous dynamic mode
            case CollisionDetectionMode.Continuous:
                m_Rigidbody.collisionDetectionMode = CollisionDetectionMode.ContinuousDynamic;
                break;
            //If the current mode is continuous dynamic, switch it to continuous speculative
            case CollisionDetectionMode.ContinuousDynamic:
                m_Rigidbody.collisionDetectionMode = CollisionDetectionMode.ContinuousSpeculative;
                break;            // If the current mode is continuous speculative, switch it to discrete mode
            case CollisionDetectionMode.ContinuousSpeculative:
                m_Rigidbody.collisionDetectionMode = CollisionDetectionMode.Discrete;
                break;            //If the current mode is discrete, switch it to continuous mode
            case CollisionDetectionMode.Discrete:
                m_Rigidbody.collisionDetectionMode = CollisionDetectionMode.Continuous;
                break;
        }
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| Discrete | Continuous collision detection is off for this Rigidbody. |
| Continuous | Continuous collision detection is on for colliding with static mesh geometry. |
| ContinuousDynamic | Continuous collision detection is on for colliding with static and dynamic geometry. |
| ContinuousSpeculative | Speculative continuous collision detection is on for static and dynamic geometries |


            
