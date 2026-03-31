This version of Unity is unsupported.



# [Screen](Screen.html).safeArea




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












                    public static [Rect](Rect.html) safeArea;






### Description



Returns the safe area of the screen in pixels (Read Only).





On some displays, certain areas of the screen might not be visible to the user.
This might be because the display's shape is non-rectangular or in the case of TV displays, it can be caused by overscan.
Avoid placing user interface elements in areas outside the safe area rectangle.
The maximum size of the safe area is the screen resolution in pixels and is defined as `Rect(0, 0, Screen.width, Screen.height)`.

**Note:** `Screen.safeArea` is defined relative to the Unity Player window, not the physical device screen. If [PlayerSettings.Android.renderOutsideSafeArea](PlayerSettings.Android-renderOutsideSafeArea.html) is disabled, Unity automatically resizes the Player window to fit the device safe area. In that case, the returned [Rect](Rect.html) typically equals `Rect(0, 0, Screen.width, Screen.height)`, because the Player window no longer includes any unsafe regions.

**Note:** The origin of the safe area is located at the bottom-left corner of the screen. Therefore, if you intend to use `Screen.safeArea` or [Screen.cutouts](Screen-cutouts.html) with a UI system like [UI Toolkit](../Manual/UIElements.html) (where origin is at the top-left corner), you must invert the coordinates. The following code snippet demonstrates how to do that:

`var safeAreaForUIToolkit = new Rect(Screen.safeArea.x, Screen.height - Screen.safeArea.y, Screen.safeArea.width, Screen.safeArea.height);`

The following image depicts how the safe area and cutouts appear on Google Pixel 7 Pro (API 35) in portrait and landscape modes. The green area is the safe area, while the red area is a cutout.

[Image: image]

Safe area and cutouts on Google Pixel 7 Pro (API 35) in portrait and landscape modes


            
