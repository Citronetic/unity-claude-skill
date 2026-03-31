This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).useMacAppStoreValidation




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







                    public static bool useMacAppStoreValidation;






### Description



Enable receipt validation for the Mac App Store.





When enabled, your game will only run when it has a valid receipt from the Mac App Store. Use `useMacAppStoreValidation` when submitting games to Apple for publishing on the App Store. This ensures users can only run the game on the computer it was purchased on.

**Note**: `useMacAppStoreValidation` doesn't implement any strong copy protection. Any potential crack against one Unity game might work against any other Unity content. For this reason, it's recommended to implement your own receipt validation code using [plug-ins](../Manual/Plugins.html). As Apple requires plug-in validation to happen before showing the screen setup dialog, you must still enable this check, or Apple might reject your submission.


            
