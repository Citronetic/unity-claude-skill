This version of Unity is unsupported.



# [Collider](Collider.html).enabled




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












                    public bool enabled;






### Description



Enabled Colliders will collide with other Colliders, disabled Colliders won't.





This is shown as the small checkbox in the inspector of the Colliders. It decides if a GameObject can collide with other Colliders.


              


```
//This example enables and disables the GameObject's Collider when the space bar is pressed.
//Attach this to a GameObject and attach a Collider to the GameObjectusing UnityEngine;public class ColliderEnabled : MonoBehaviour
{
    Collider m_Collider;    void Start()
    {
        //Fetch the GameObject's Collider (make sure it has a Collider component)
        m_Collider = GetComponent<Collider>();
    }    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            //Toggle the Collider on and off when pressing the space bar
            m_Collider.enabled = !m_Collider.enabled;            //Output to console whether the Collider is on or not
            Debug.Log("Collider.enabled = " + m_Collider.enabled);
        }
    }
}
```


            
