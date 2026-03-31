This version of Unity is unsupported.



# [Time](Time.html).timeAsDouble




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












                    public static double timeAsDouble;






### Description



The double precision time at the beginning of this frame (Read Only). This is the time in seconds since the start of the game.





Time.timeAsDouble is the amount of time in seconds that the application has been running for. It is read-only.

Double precision version of [Time.time](Time-time.html). This offers more precision than a float or single value, particularly over extended periods of real-world time.
In almost all cases, you should use the [Time.timeAsDouble](Time-timeAsDouble.html) equivalent over [Time.time](Time-time.html).

The application receives the current [Time.timeAsDouble](Time-timeAsDouble.html) at the beginning of each frame, with the value increasing per frame. A [timeAsDouble](Time-timeAsDouble.html) call per frame
receives the same value. When called from `FixedUpdate` it returns the [Time.fixedTimeAsDouble](Time-fixedTimeAsDouble.html) property.

Regular (per frame) calls should be avoided: [Time.timeAsDouble](Time-timeAsDouble.html) is intended to supply the length of time the application has been running for, and not the time per frame.

The value of [Time.timeAsDouble](Time-timeAsDouble.html)  is undefined during `Awake` messages and starts after all messages are finished. [Time.timeAsDouble](Time-timeAsDouble.html) does not update if the Editor is paused.
See [Time.realtimeSinceStartupAsDouble](Time-realtimeSinceStartupAsDouble.html) for a time value that is unaffected by pausing.


              


```
//If the Fire1 button is pressed, a projectile
//will be Instantiated every 0.5 seconds.using UnityEngine;
using System.Collections;public class Example : MonoBehaviour
{
    public GameObject projectile;
    public float fireRate = 0.5f;
    private double nextFire = 0.0f;    void Update()
    {
        if (Input.GetButton("Fire1") && Time.timeAsDouble > nextFire)
        {
            nextFire = Time.timeAsDouble + fireRate;
            Instantiate(projectile, transform.position, transform.rotation);
        }
    }
}
```


            
