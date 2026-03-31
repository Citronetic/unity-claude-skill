This version of Unity is unsupported.



# [Rigidbody](Rigidbody.html).WakeUp




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




                [Switch to Manual](../Manual/class-Rigidbody.html)










## Declaration

public void WakeUp();






### Description



Forces a rigidbody to wake up.





For more information about [Rigidbody](Rigidbody.html) sleeping, refer to the [Rigidbody overview](../Manual/RigidbodiesOverview.html).


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    private float fallTime;
    private Rigidbody rbGO;
    private bool sleeping;    void Start()
    {
        rbGO = gameObject.AddComponent<Rigidbody>();
        rbGO.mass = 10.0f;
        Physics.gravity = new Vector3(0, -2.0f, 0);
        sleeping = false;
        fallTime = 0.0f;
    }    void Update()
    {
        if (fallTime > 1.0f)
        {
            if (sleeping)
            {
                rbGO.WakeUp();
                Debug.Log("wakeup");
            }
            else
            {
                rbGO.Sleep();
                Debug.Log("sleep");
            }            sleeping = !sleeping;            fallTime = 0.0f;
        }        fallTime += Time.deltaTime;
    }
}
```


            
