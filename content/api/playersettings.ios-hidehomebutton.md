This version of Unity is unsupported.



# [PlayerSettings.iOS](PlayerSettings.iOS.html).hideHomeButton




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




                [Switch to Manual](../Manual/class-PlayerSettings.html)







                    public static bool hideHomeButton;






### Description



Specifies whether the home button should be hidden in the iOS build of this application.





On iPhone X the home button is implemented as a system gesture (swipe up from the bottom edge of the screen).
The location of this virtual button is indicated by a white bar.
If this setting is enabled, the home button is hidden from view whenever the user has not touched the screen for several seconds.
Note that iOS Human interface guidelines do not recommend enabling this behavior for applications not containing passive viewing experiences such as viewing a video or a photo slideshow.
Home button can be hidden on runtime by changing `iOS.Device.hideHomeButton` property.


              


```
using UnityEngine;
using UnityEditor;public class HideHomeButtonExample
{
    // This example will create a Menu Item called "Hide Home Button" under "Examples" submenu which when pressed will print the current value of hideHomeButton to console and then change it to "true"
    [MenuItem("Examples/Hide Home Button")]
    public static void SimpleExample()
    {
        // This will print the value of "Hide Home Button" property for iOS (in "Project Settings/Player/Other Settings") to the console
        Debug.Log("Hide Home Button : " + PlayerSettings.iOS.hideHomeButton);

        // This will enable the "Hide Home Button" property for iOS (in "Project Settings/Player/Other Settings")
        PlayerSettings.iOS.hideHomeButton = true;
    }
}
```


            
