This version of Unity is unsupported.



# [PlayerSettings.iOS](PlayerSettings.iOS.html).SetLaunchScreenImage




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










## Declaration

public static void SetLaunchScreenImage([Texture2D](Texture2D.html) image,
[iOSLaunchScreenImageType](iOSLaunchScreenImageType.html) type);






### Description



Sets the image to display on screen when the game launches for the specified iOS device.





This function adds the specified image to the launch screen's Interface Builder (.xib) file in the generated iOS Xcode project. The image is only used by [iOSLaunchScreenType.ImageAndBackgroundConstant](iOSLaunchScreenType.ImageAndBackgroundConstant.html) and [iOSLaunchScreenType.ImageAndBackgroundRelative](iOSLaunchScreenType.ImageAndBackgroundRelative.html). Use the [PlayerSettings.iOS.SetiPhoneLaunchScreenType](PlayerSettings.iOS.SetiPhoneLaunchScreenType.html) or [PlayerSettings.iOS.SetiPadLaunchScreenType](PlayerSettings.iOS.SetiPadLaunchScreenType.html) functions to set the launch screen type for your target device.


            
