This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).CancelInvoke




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

public void CancelInvoke();






### Description



Cancels all Invoke calls on this MonoBehaviour.


              


```
using UnityEngine;
using System.Collections.Generic;public class ExampleScript : MonoBehaviour
{
    public GameObject projectile;    void Start()
    {
        // Starting in 2 seconds, a projectile will be launched every 0.3 seconds
        InvokeRepeating(nameof(LaunchProjectile), 2, 0.3F);
    }    void LaunchProjectile()
    {
        // Create a projectile GameObject and set its velocity to a random direction
        GameObject instance = Instantiate(projectile);
        Rigidbody rigidbody = instance.GetComponent<Rigidbody>();        rigidbody.velocity = Random.insideUnitSphere * 5;
    }    void Update()
    {
        // Cancel all Invoke calls
        if (Input.GetButton("Fire1"))
            CancelInvoke();
    }
}
```




---








## Declaration

public void CancelInvoke(string methodName);






### Description



Cancels all Invoke calls with name `methodName` on this behaviour.


              


```
using UnityEngine;
using System.Collections.Generic;public class ExampleScript : MonoBehaviour
{
    public GameObject projectile;    void Start()
    {
        // Starting in 2 seconds, a projectile will be launched every 0.3 seconds
        InvokeRepeating(nameof(LaunchProjectile), 2, 0.3F);
    }    void LaunchProjectile()
    {
        // Create a projectile GameObject and set its velocity to a random direction
        GameObject instance = Instantiate(projectile);
        Rigidbody rigidbody = instance.GetComponent<Rigidbody>();        rigidbody.velocity = Random.insideUnitSphere * 5;
    }    void Update()
    {
        // Cancel only the LaunchProjectile invoke
        if (Input.GetButton("Fire1"))
            CancelInvoke(nameof(LaunchProjectile));
    }
}
```


            
