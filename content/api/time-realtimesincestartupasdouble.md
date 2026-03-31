This version of Unity is unsupported.



# [Time](Time.html).realtimeSinceStartupAsDouble




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












                    public static double realtimeSinceStartupAsDouble;






### Description



The real time in seconds since the game started (Read Only). Double precision version of [Time.realtimeSinceStartup](Time-realtimeSinceStartup.html).





This property is the time in seconds since the start of the application and isn't constant if called multiple times in a frame. [Time.timeScale](Time-timeScale.html) doesn't affect this property.
                In almost all cases, use `realtimeSinceStartupAsDouble` over `realtimeSinceStartup`. `realtimeSinceStartupAsDouble` offers more precision, particularly over extended periods of real-world time.

                In most use cases, use [Time.time](Time-time.html), [Time.timeAsDouble](Time-timeAsDouble.html), [Time.unscaledTime](Time-unscaledTime.html), or [Time.unscaledTimeAsDouble](Time-unscaledTimeAsDouble.html) instead of this property.
                However, `realtimeSinceStartupAsDouble` is useful if you want to set `timeScale` to zero to pause your application, but you also still want to measure time.
                In Editor scripts, you can also use `realtimeSinceStartupAsDouble` to measure time while the Editor is paused.

                `realtimeSinceStartupAsDouble` returns time as reported by the system timer. Depending on the platform and the hardware, it might report the same time even in several consecutive frames.
                If you're dividing something by time difference, take this into account (for example, time difference might become zero).
                On desktop, web, XR, and mobile platforms, the returned value includes time that elapsed while the system is in sleep mode.
                On console platforms, this behavior differs. For more information, refer to the platform-specific documentation.

                **NOTE:** There is a [known issue](https://issuetracker.unity3d.com/issues/time-dot-realtimesincestartup-returns-wrong-values-when-using-ondestroy)
                where `realtimeSinceStartup` and `realtimeSinceStartupAsDouble return incorrect values when using`OnDestroy@@.


              


```
using UnityEngine;
using System.Collections;// An FPS counter.
// It calculates frames/second over each updateInterval,
// so the display does not keep changing wildly.
public class ExampleClass : MonoBehaviour
{
    public float updateInterval = 0.5F;
    private double lastInterval;
    private int frames = 0;
    private float fps;
    void Start()
    {
        lastInterval = Time.realtimeSinceStartupAsDouble;
        frames = 0;
    }    void OnGUI()
    {
        GUILayout.Label("" + fps.ToString("f2"));
    }    void Update()
    {
        ++frames;
        double timeNow = Time.realtimeSinceStartupAsDouble;
        if (timeNow > lastInterval + updateInterval)
        {
            fps = (float)(frames / (timeNow - lastInterval));
            frames = 0;
            lastInterval = timeNow;
        }
    }
}
```


            
