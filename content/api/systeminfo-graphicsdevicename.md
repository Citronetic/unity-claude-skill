This version of Unity is unsupported.



# [SystemInfo](SystemInfo.html).graphicsDeviceName




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












                    public static string graphicsDeviceName;






### Description



The name of the graphics device (Read Only).





This is the name of user's graphics card, as reported by the graphics driver.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        // Prints using the following format - "ATI Radeon X1600 OpenGL Engine" on MacBook Pro running Mac OS X 10.4.8
        print(SystemInfo.graphicsDeviceName);
    }
}
```





Note that the same graphics card can be reported by different names depending on the operating system,
driver and so on. If you want to reliably identify some specific card, use [SystemInfo.graphicsDeviceID](SystemInfo-graphicsDeviceID.html)
[SystemInfo.graphicsDeviceVendorID](SystemInfo-graphicsDeviceVendorID.html).

Additional resources: [SystemInfo.graphicsDeviceID](SystemInfo-graphicsDeviceID.html), [SystemInfo.graphicsDeviceVendor](SystemInfo-graphicsDeviceVendor.html), [SystemInfo.graphicsDeviceVersion](SystemInfo-graphicsDeviceVersion.html).


            
