This version of Unity is unsupported.



# [Time](Time.html).time




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












                    public static float time;






### Description



The time at the beginning of the current frame in seconds since the start of the application (Read Only).





This is the time in seconds since the start of the application, which [Time.timeScale](Time-timeScale.html) scales and [Time.maximumDeltaTime](Time-maximumDeltaTime.html) adjusts.
                When called from inside [MonoBehaviour.FixedUpdate](MonoBehaviour.FixedUpdate.html), it returns [Time.fixedTime](Time-fixedTime.html).

This value is undefined during Awake messages and starts after all of these messages are finished. This value does not update if the Editor is paused.
                See [Time.realtimeSinceStartup](Time-realtimeSinceStartup.html) for a time value that is unaffected by pausing.

See [Time and Frame Rate Management](../Manual/managing-time-and-frame-rate.html) in the User Manual for more information about how this property relates to the other Time properties.


              


```
//If the Fire1 button is pressed, a projectile
//will be Instantiated every 0.5 seconds.using UnityEngine;
using System.Collections;public class Example : MonoBehaviour
{
    public GameObject projectile;
    public float fireRate = 0.5f;
    private float nextFire = 0.0f;    void Update()
    {
        if (Input.GetButton("Fire1") && Time.time > nextFire)
        {
            nextFire = Time.time + fireRate;
            Instantiate(projectile, transform.position, transform.rotation);
        }
    }
}
```


            
