This version of Unity is unsupported.



# [Quaternion](Quaternion.html).SetFromToRotation




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




                [Switch to Manual](../Manual/class-Quaternion.html)










## Declaration

public void SetFromToRotation([Vector3](Vector3.html) fromDirection,
[Vector3](Vector3.html) toDirection);






### Description



Creates a rotation which rotates from `fromDirection` to `toDirection`.





Use this to create a rotation which starts at the first Vector (fromDirection) and rotates to the second Vector (toDirection). These Vectors must be set up in a script.


              


```
//This example shows how the rotation works between two GameObjects. Attach this to a GameObject.
//Make sure to assign the GameObject you would like your GameObject to rotate towards in the Inspectorusing UnityEngine;public class SetFromToRotationExample : MonoBehaviour
{
    //This is the Transform of the second GameObject
    public Transform m_NextPoint;
    Quaternion m_MyQuaternion;
    float m_Speed = 1.0f;    void Start()
    {
        m_MyQuaternion = new Quaternion();
    }    void Update()
    {
        //Set the Quaternion rotation from the GameObject's position to the next GameObject's position
        m_MyQuaternion.SetFromToRotation(transform.position, m_NextPoint.position);
        //Move the GameObject towards the second GameObject
        transform.position = Vector3.Lerp(transform.position, m_NextPoint.position, m_Speed * Time.deltaTime);
        //Rotate the GameObject towards the second GameObject
        transform.rotation = m_MyQuaternion * transform.rotation;
    }
}
```


              


```
//In this example your GameObject rotates towards the position of the mouseusing UnityEngine;public class Example2 : MonoBehaviour
{
    Quaternion m_MyQuaternion;
    float m_Speed = 1.0f;
    Vector3 m_MousePosition;    void Start()
    {
        m_MyQuaternion = new Quaternion();
    }    void Update()
    {
        //Fetch the mouse's position
        m_MousePosition = Input.mousePosition;
        //Fix how far into the Scene the mouse should be
        m_MousePosition.z = 50.0f;
        //Transform the mouse position into world space
        m_MousePosition = Camera.main.ScreenToWorldPoint(m_MousePosition);        //Set the Quaternion rotation from the GameObject's position to the mouse position
        m_MyQuaternion.SetFromToRotation(transform.position, m_MousePosition);
        //Move the GameObject towards the mouse position
        transform.position = Vector3.Lerp(transform.position, m_MousePosition, m_Speed * Time.deltaTime);
        //Rotate the GameObject towards the mouse position
        transform.rotation = m_MyQuaternion * transform.rotation;
    }
}
```


            
