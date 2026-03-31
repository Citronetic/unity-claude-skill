This version of Unity is unsupported.



# [Vector3](Vector3.html).Set




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

public void Set(float newX,
float newY,
float newZ);






### Parameters



| Parameter | Description |
| --- | --- |
| newX | X component value. |
| newY | Y component value. |
| newZ | Z component value. |





### Description



Set x, y and z components of an existing Vector3.





Use this to modify the three components of a vector.


              


```
// Attach this script to a GameObject. Create an empty GameObject that will act as your "New Transform". Assign this in the Inspector.
// Press the "Set" button in the game to set the GameObject's position to the "New Transform" position.using UnityEngine;
using UnityEngine.EventSystems;public class Example : MonoBehaviour
{
    // Use this to set the new position of the GameObject
    Vector3 m_MyPosition;    // Set an external Transform in the Inspector which is the GameObject’s starting point
    public Transform m_NewTransform;    void Start()
    {
        // Set the new Vector to be that of the Transform you attach in the Inspector
        m_MyPosition.Set(m_NewTransform.position.x, m_NewTransform.position.y, 0);
    }    void OnGUI()
    {
        // Press the Button to set the GameObject to this new position
        if (GUI.Button(new Rect(0, 0, 100, 40), "Set"))
        {
            transform.position = m_MyPosition;
        }
    }
}
```


            
