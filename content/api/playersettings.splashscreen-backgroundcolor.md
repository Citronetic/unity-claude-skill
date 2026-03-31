This version of Unity is unsupported.



# [PlayerSettings.SplashScreen](PlayerSettings.SplashScreen.html).backgroundColor




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







                    public static [Color](Color.html) backgroundColor;






### Description



Sets the background color of the splash screen when no background image is used. The default background color is dark blue RGB(34.44,54).





On Android, use this property to set the background color for the static splash image. In this case, the selected background color blends with the static splash image based on the image transparency levels. Additionally, on Android Unity uses this color to hide the default automatic splash screen which appears on Android 12+ devices. This happens even if [PlayerSettings.SplashScreen.background](PlayerSettings.SplashScreen-background.html) is being set. Therefore, make sure that this color is set to match [PlayerSettings.SplashScreen.background](PlayerSettings.SplashScreen-background.html) image.


            
