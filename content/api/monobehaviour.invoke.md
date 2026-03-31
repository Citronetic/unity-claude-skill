This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).Invoke




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

public void Invoke(string methodName,
float time);






### Description



Invokes the method `methodName` in time seconds.





If time is set to 0 and Invoke is called before the first frame update, the method is invoked at the next Update cycle before [MonoBehaviour.Update](MonoBehaviour.Update.html). In this case, it's better to call the function directly.

Note: Setting time to negative values is identical to setting it to 0.

In other cases, the order of execution of the method depends on the timing of the invocation.

If you need to pass parameters to your method, consider using [Coroutine](Coroutine.html) instead. Coroutines also provide better performance.


              


```
using UnityEngine;
using System.Collections.Generic;public class ExampleScript : MonoBehaviour
{
    // Launches a projectile in 2 seconds    Rigidbody projectile;    void Start()
    {
        Invoke(nameof(LaunchProjectile), 2.0f);
    }    void LaunchProjectile()
    {
        Rigidbody instance = Instantiate(projectile);
        instance.velocity = Random.insideUnitSphere * 5.0f;
    }
}
```


            
