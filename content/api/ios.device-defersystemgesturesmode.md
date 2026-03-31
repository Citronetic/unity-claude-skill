This version of Unity is unsupported.



# [Device](iOS.Device.html).deferSystemGesturesMode




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












                    public static [iOS.SystemGestureDeferMode](iOS.SystemGestureDeferMode.html) deferSystemGesturesMode;






### Description



Defer system gestures until the second swipe on specific edges.





Select one or more edges that users must swipe twice to enact system gestures.

On iOS devices, users can perform actions by swiping from different edges of the screen. For example, you can naviagte home by swiping up from the bottom of the screen. This can cause issues with games that use swiping for interaction.

Use `deferSystemGesturesMode` to control which screen edge gestures the system waits for before responding to the second swipe. The first swipe is ignored to help prevent unintentional actions in the app. The iOS Human Interface Guidelines do not recommend turning on this setting, as it could confuse users.

**Note**: The initial value of this setting is defined by the [PlayerSettings.iOS.deferSystemGesturesMode](PlayerSettings.iOS-deferSystemGesturesMode.html) property.


              


```
using UnityEngine;
using UnityEditor;
using UnityEngine.iOS;public class Sample_deferSystemGesturesMode
{    void DeferSystemGesturesRuntimeExample()
    {
        // Print current deferSystemGesturesMode value to the console
        Debug.Log(Device.deferSystemGesturesMode.ToString());        // Set up settings to always prioritize system gestures
        Device.deferSystemGesturesMode = SystemGestureDeferMode.None;        // Set up settings to defer all system gestures and prioritize your game input
        Device.deferSystemGesturesMode = SystemGestureDeferMode.All;        // Set up settings to defer system gesture from the top edge of the screen (Control Center, Notifications, etc)
        Device.deferSystemGesturesMode = SystemGestureDeferMode.TopEdge;        // Set up settings to defer system gesture from multiple edges of the screen
        Device.deferSystemGesturesMode = SystemGestureDeferMode.TopEdge | SystemGestureDeferMode.BottomEdge;    }
}
```


            
