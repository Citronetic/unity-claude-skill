This version of Unity is unsupported.



# [MonoBehaviour](MonoBehaviour.html).InvokeRepeating




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

public void InvokeRepeating(string methodName,
float time,
float repeatRate);






### Parameters



| Parameter | Description |
| --- | --- |
| methodName | The name of a method to invoke. |
| time | Time to wait in seconds before the first invocation. |
| repeatRate | Interval in seconds between method invocations. |





### Description



Invokes the specified method after a specified delay, then repeatedly at the specified rate.





To cancel `InvokeRepeating`, use [MonoBehaviour.CancelInvoke](MonoBehaviour.CancelInvoke.html).

The `time` and `repeatRate` parameters depend on [Time.timeScale](Time-timeScale.html). For example, a [Time.timeScale](Time-timeScale.html) of 2 effectively halves the real-time values of `time` and `repeatRate`, while a [Time.timeScale](Time-timeScale.html) of 0.5 doubles them. If [Time.timeScale](Time-timeScale.html) is 0, then the `method` is never invoked.

You can't change the value of the `repeatRate` interval while `InvokeRepeating` is running. You must cancel and re-invoke to change it.


              


```
using UnityEngine;
using System.Collections.Generic;// After an initial 2 second wait, launch a projectile every 0.3 secondspublic class ExampleScript : MonoBehaviour
{
    public Rigidbody projectile;    void Start()
    {
        InvokeRepeating(nameof(LaunchProjectile), 2.0f, 0.3f);
    }    void LaunchProjectile()
    {
        Rigidbody instance = Instantiate(projectile);        instance.velocity = Random.insideUnitSphere * 5;
    }
}
```


            
