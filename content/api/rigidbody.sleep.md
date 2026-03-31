This version of Unity is unsupported.



# [Rigidbody](Rigidbody.html).Sleep




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

public void Sleep();






### Description



Forces a rigidbody to sleep until woken up.





A Rigidbody can be put to sleep only if it is not in contact with an awake rigidbody, and if it does not come in contact with any rigidbody during the next simulation step.
                    A common use is to call this from Awake in order to make a rigidbody sleep at startup.
See the [Rigidbodies Overview](../Manual/RigidbodiesOverview.html) in the manual for more information about Rigidbody sleeping.


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


            
