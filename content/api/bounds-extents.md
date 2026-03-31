This version of Unity is unsupported.



# [Bounds](Bounds.html).extents




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












                    public [Vector3](Vector3.html) extents;






### Description



The extents of the Bounding Box. This is always half of the [size](Bounds-size.html) of the Bounds.





**Note:** If [Bounds.extents](Bounds-extents.html) has a negative value for any axis, [Bounds.Contains](Bounds.Contains.html)
            always returns False.


              


```
//Attach this script to a visible GameObject.
//Click on the GameObject to expand it and output the Bound extents to the Console.using UnityEngine;public class Example : MonoBehaviour
{
    Collider m_ObjectCollider;
    public Vector3 m_MyScale;    void Start()
    {
        //Fetch the GameObject's collider (make sure they have a Collider component)
        m_ObjectCollider = gameObject.GetComponent<Collider>();
        //Output the GameObject's Collider Bound extents
        Debug.Log("extents : " + m_ObjectCollider.bounds.extents);
    }    //Detect when the user clicks the GameObject
    void OnMouseDown()
    {
        //Change the scale of the GameObject to the size you define in the Inspector
        transform.localScale = m_MyScale;
        //Output the extents of the Bounds after clicking the GameObject. Extents change to half of the scale.
        Debug.Log("extents : " + m_ObjectCollider.bounds.extents);
    }
}
```


            
