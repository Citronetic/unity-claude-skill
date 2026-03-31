This version of Unity is unsupported.



# [Display](Display.html).Activate




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















## Declaration

public void Activate();






### Description



Activates an external display. For example, a secondary monitor connected to the system.





Creates a window with screen width and screen height, and with the default refresh rate.

Displays have the following indices in the [Display.displays](Display-displays.html) array:



          - The primary display is `0`.

          - Secondary displays are `1` to `7`.





Make sure an external display is connected before you activate it.

This method works only on desktop platforms.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        // Check the number of monitors connected.
        if (Display.displays.Length > 1)
        {
            // Activate the display 1 (second monitor connected to the system).
            Display.displays[1].Activate();
        }
    }
}
```




---








## Declaration

public void Activate(int width,
int height,
[RefreshRate](RefreshRate.html) refreshRate);






### Parameters



| Parameter | Description |
| --- | --- |
| width | Windows platforms only. Width of the window to open. |
| height | Windows platforms only. Height of the window to open. |
| refreshRate | Refresh Rate of the window to open. |





### Description



Windows platforms only. Activates an external display with a specific width, height and refresh rate. For example, a secondary monitor connected to the system.





This method only works fully on Windows platforms. If you use this method on Linux or macOS platforms, the display uses the screen width and height.

Displays have the following indices in the [Display.displays](Display-displays.html) array:



          - The primary display is `0`.

          - Secondary displays are `1` to `7`.





Make sure an external display is connected before you activate it.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        // Check the number of monitors connected.
        if (Display.displays.Length > 1)
        {
            // Activate the display 1 (second monitor connected to the system).
            Display.displays[1].Activate(0, 0, new RefreshRate() { numerator = 60, denominator = 1 });
        }
    }
}
```


            
