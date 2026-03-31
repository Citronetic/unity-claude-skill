This version of Unity is unsupported.



# [ScreenOrientation](ScreenOrientation.html).AutoRotation




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



Autorotates the screen as necessary toward any of the enabled orientations.





When you assign ScreenOrientation.AutoRotation to the [Screen.orientation](Screen-orientation.html) property, the screen autorotates so that the bottom of the image points downwards.
To set permitted orientations, use the following properties:



          - [Screen.autorotateToLandscapeLeft](Screen-autorotateToLandscapeLeft.html)

          - [Screen.autorotateToLandscapeRight](Screen-autorotateToLandscapeRight.html)

          - [Screen.autorotateToPortrait](Screen-autorotateToPortrait.html)

          - [Screen.autorotateToPortraitUpsideDown](Screen-autorotateToPortraitUpsideDown.html)





You can set a combination of orientations.
For example, you can set [Screen.autorotateToPortrait](Screen-autorotateToPortrait.html) and [Screen.autorotateToPortraitUpsideDown](Screen-autorotateToPortraitUpsideDown.html) to true whilst setting [Screen.autorotateToLandscapeLeft](Screen-autorotateToLandscapeLeft.html) and [Screen.autorotateToLandscapeRight](Screen-autorotateToLandscapeRight.html) to false. In this case, the autorotation never chooses either of the landscape options.

**Note**: On Android and iOS platforms, you must set at least one orientation property for autorotation to true. Make sure to set the remaining properties to false.

WebGL builds only support autorotation on the mobile Chrome browser, and only allows orienting to a subset of combinations, these are:



          - Individual orientations

          - Opposite pairs of orientations

          - All four of the above orientations.





If another combination is set, autorotation defaults to all four orientations.

**Note:** Autorotation on WebGL only works in full-screen mode.


              


```
using UnityEngine;public class Example : MonoBehaviour
{
    void Start()
    {
        Screen.autorotateToPortrait = true;        Screen.autorotateToPortraitUpsideDown = true;        Screen.autorotateToLandscapeLeft = false;        Screen.autorotateToLandscapeRight = false;        Screen.orientation = ScreenOrientation.AutoRotation;
    }
}
```





Additional resources: [Screen.orientation](Screen-orientation.html).


            
