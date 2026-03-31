This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).SetIcons




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

public static void SetIcons([Build.NamedBuildTarget](Build.NamedBuildTarget.html) buildTarget,
Texture2D[] icons,
[IconKind](IconKind.html) kind);






### Parameters



| Parameter | Description |
| --- | --- |
| buildTarget | The NamedBuildTarget. |





### Description



Assigns a list of icons for the specified platform.





Most platforms support viewing icons in multiple sizes so Unity lets you specify multiple icon textures for each platform.

Unity only assigns the list of icons if the following is true:



          - The list is the same length as the list of icon sizes returned by GetIconSizes.

          - The Editor supports the specified platform .





Only iOS supports icons which have a different kind than [IconKind.Application](IconKind.Application.html). Unity copies Icons assigned to  [IconKind.Application](IconKind.Application.html), [IconKind.Settings](IconKind.Settings.html), [IconKind.Notification](IconKind.Notification.html) and [IconKind.Spotlight](IconKind.Spotlight.html) to the appropriate slots in the generated Xcode project.

Calling `SetIcons` with an empty Texture2D array removes all icons currently set for [IconKind](IconKind.html).


            
