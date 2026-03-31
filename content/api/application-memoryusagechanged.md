This version of Unity is unsupported.



# [Application](Application.html).memoryUsageChanged




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



















### Description



Informs about significant changes in the application's memory usage.





This event occurs when there are significant changes in the application's memory usage, such as an increase to a dangerous level or a drop to a much safer level.

You can use this event to balance your application's memory usage for device capability. For example, you can lower the resource intensity of your application when memory usage becomes critical.

iOS, Android, and Universal Windows Platform (UWP) support this event, but not every platform supports all possible [ApplicationMemoryUsage](ApplicationMemoryUsage.html) values.



          - Android supports [Medium](ApplicationMemoryUsage.Medium.html), [High](ApplicationMemoryUsage.High.html), and [Critical](ApplicationMemoryUsage.Critical.html).
**Note:** When targeting [GameActivity](https://developer.android.com/games/agdk/game-activity), only [Critical](ApplicationMemoryUsage.Critical.html) is supported.

          - iOS supports [Critical](ApplicationMemoryUsage.Critical.html).

          - UWP supports [Low](ApplicationMemoryUsage.Low.html), [Medium](ApplicationMemoryUsage.Medium.html), [High](ApplicationMemoryUsage.High.html), and [Critical](ApplicationMemoryUsage.Critical.html).




              


```
using System;
using UnityEngine;public class Sample : MonoBehaviour
{
    void Start()
    {
        Application.memoryUsageChanged += OnMemoryUsageChanged;
    }    void OnMemoryUsageChanged(in ApplicationMemoryUsageChange newUsage)
    {
        if (newUsage.memoryUsage == ApplicationMemoryUsage.Critical)
        {
            // release resources here
            Resources.UnloadUnusedAssets();
            GC.Collect();
        }
    }
}
```





This code sample shows how to perform garbage collection if the application is critically low on memory.


            
