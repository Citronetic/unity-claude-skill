This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).IsInvoking




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




                [Switch to Manual](../Manual/class-MonoBehaviour.html)










## Declaration

public bool IsInvoking(string methodName);






### Description



Is any invoke on `methodName` pending?


              


```
using UnityEngine;
using System.Collections.Generic;// Instantiates a projectile two seconds after the spacebar was pressed.
// LaunchProjectile is called when a previous RigidBody has finished the Invoke.public class ExampleScript : MonoBehaviour
{
    public Rigidbody projectile;    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space) && !IsInvoking(nameof(LaunchProjectile)))
            Invoke(nameof(LaunchProjectile), 2.0f);
    }    void LaunchProjectile()
    {
        Rigidbody instance = Instantiate(projectile);
        instance.velocity = Random.insideUnitSphere * 5;
    }
}
```




---








## Declaration

public bool IsInvoking();






### Description



Is any invoke pending on this MonoBehaviour?


            
