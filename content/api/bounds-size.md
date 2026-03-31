This version of Unity is unsupported.



# [Bounds](Bounds.html).size




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












                    public [Vector3](Vector3.html) size;






### Description



The total size of the box. This is always twice as large as the [extents](Bounds-extents.html).





*size.x* is the width, *size.y* is the height and *size.z* is the depth of the box.  Note that *size* is given in world size.  A Bound surrounding a tall human might have *size.y* approximately 2.0f, meaning a 2 meter height body.


              


```
//This script outputs the size of the Collider bounds to the consoleusing UnityEngine;public class Example : MonoBehaviour
{
    Collider m_Collider;
    Vector3 m_Size;    void Start()
    {
        //Fetch the Collider from the GameObject
        m_Collider = GetComponent<Collider>();        //Fetch the size of the Collider volume
        m_Size = m_Collider.bounds.size;        //Output to the console the size of the Collider volume
        Debug.Log("Collider Size : " + m_Size);
    }
}
```


            
