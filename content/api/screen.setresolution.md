This version of Unity is unsupported.



# [Screen](Screen.html).SetResolution




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

public static void SetResolution(int width,
int height,
bool fullscreen);






## Declaration

public static void SetResolution(int width,
int height,
[FullScreenMode](FullScreenMode.html) fullscreenMode);






## Declaration

public static void SetResolution(int width,
int height,
[FullScreenMode](FullScreenMode.html) fullscreenMode,
[RefreshRate](RefreshRate.html) preferredRefreshRate);






### Description



Switches the screen resolution and refresh rate if supported.





A `width` by `height` resolution is used. If no matching resolution is supported, the closest one is set.

If the `preferredRefreshRate` parameter is specified but no matching refresh rate is supported, the highest available is set. Changing the refresh rate is only supported when using exclusive full-screen mode.

**Android**:



          - **Android 10 and older:** The `fullscreen` parameter controls the `SYSTEM_UI_FLAG_IMMERSIVE_STICKY`, `SYSTEM_UI_FLAG_LAYOUT_STABLE`, `SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN`, `SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION`, `SYSTEM_UI_FLAG_HIDE_NAVIGATION`, and `SYSTEM_UI_FLAG_FULLSCREEN` flags using [View.setSystemUiVisibility](https://developer.android.com/reference/android/view/View#setSystemUiVisibility(int)) method.

          - **Android 11 and newer:** When `fullscreen` is true, `WindowInsetsController.hide(WindowInsets.Type.navigationBars())` is called and when `fullscreen` is false, `WindowInsetsController.show(WindowInsets.Type.navigationBars())` is called. For more information, refer to Android documentation on [WindowInsetsController](https://developer.android.com/reference/android/view/WindowInsetsController).





**Usage details**:



          - To set a specific full-screen mode on a desktop platform, use the method overload that accepts the `FullScreenMode` parameter. Exclusive full-screen mode is only supported on Windows standalone Player.

          - If you use [multi-display](../Manual/MultiDisplay.html), you can only use `Screen.SetResolution` to set the resolution of the primary screen.

          - A resolution change is applied at the end of the current frame and not immediately.

          - In the Editor, it affects only the Game view's resolution.





Examples:


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    void Start()
    {
        // Switch to 640 x 480 full-screen
        Screen.SetResolution(640, 480, true);
    }
}
```


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    void Start()
    {
        // Switch to 640 x 480 full-screen at 60 hz
        Screen.SetResolution(640, 480, FullScreenMode.ExclusiveFullScreen, new RefreshRate() { numerator = 60, denominator = 1 });
    }
}
```


              


```
using UnityEngine;public class ExampleScript : MonoBehaviour
{
    void Start()
    {
        // Switch to 800 x 600 windowed
        Screen.SetResolution(800, 600, false);
    }
}
```





Additional resources: [resolutions](Screen-resolutions.html) property.


            
