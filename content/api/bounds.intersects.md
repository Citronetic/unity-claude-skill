This version of Unity is unsupported.



# [Bounds](Bounds.html).Intersects




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

public bool Intersects([Bounds](Bounds.html) bounds);






### Description



Does another bounding box intersect with this bounding box?





Check if the bounding box comes into contact with another bounding box. This returns a Boolean that is set to true if there is an intersection between bounds. Two bounds are intersecting if there is at least one point which is contained by both bounds.


              


```
//Attach this script to an empty GameObject. Create 2 more GameObjects and attach a Collider component on each. Choose these as the "My Object" and "New Object" in the Inspector.
//This script allows you to move your main GameObject left to right. If it intersects with the other, it outputs the message to the Console.using UnityEngine;public class BoundsIntersectExample : MonoBehaviour
{
    public GameObject m_MyObject, m_NewObject;
    Collider m_Collider, m_Collider2;    void Start()
    {
        //Check that the first GameObject exists in the Inspector and fetch the Collider
        if (m_MyObject != null)
            m_Collider = m_MyObject.GetComponent<Collider>();        //Check that the second GameObject exists in the Inspector and fetch the Collider
        if (m_NewObject != null)
            m_Collider2 = m_NewObject.GetComponent<Collider>();
    }    void Update()
    {
        //If the first GameObject's Bounds enters the second GameObject's Bounds, output the message
        if (m_Collider.bounds.Intersects(m_Collider2.bounds))
        {
            Debug.Log("Bounds intersecting");
        }
    }
}
```


            
