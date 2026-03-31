This version of Unity is unsupported.



# [CollisionDetectionMode](CollisionDetectionMode.html).ContinuousDynamic




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



Continuous collision detection is on for colliding with static and dynamic geometry.





Prevent this Rigidbody from passing through static mesh geometry, and through other
Rigidbodies which have continuous collision detection enabled, when it is moving fast.
This is the slowest collision detection mode, and should only be used for selected fast moving objects.


              


```
//This script allows you to switch collision detection mode at the press of the space key
//Attach this script to a GameObject
//Click the GameObject, go to its Inspector and click the Add Component Button. Then, go to Physics>Rigidbody.using UnityEngine;
using UnityEngine.UI;public class Example : MonoBehaviour
{
    Rigidbody m_Rigidbody;    void Start()
    {
        m_Rigidbody = GetComponent<Rigidbody>();
    }    public void Update()
    {
        //Press the space key to switch the collision detection mode
        if (Input.GetKeyDown(KeyCode.Space))
            SwitchCollisionDetectionMode();
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
                break;            // If the curren mode is continuous speculative, switch it to discrete mode
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


            
