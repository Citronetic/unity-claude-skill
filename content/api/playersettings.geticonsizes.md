This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).GetIconSizes




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

public static int[] GetIconSizes([Build.NamedBuildTarget](Build.NamedBuildTarget.html) buildTarget,
[IconKind](IconKind.html) kind);






### Parameters



| Parameter | Description |
| --- | --- |
| buildTarget | The NamedBuildTarget. |





### Description



Returns a list of icon sizes for the specified platform.





Unity enables you to specify multiple icon textures for each platform.

Use this function to get the icon sizes for a specified platform. Each returned size includes the icon's width and height in pixels. By default, [[GetIcons(NamedBuildTarget,IconKind)]] returns all icons for a platform unless you specify an [IconKind](IconKind.html) value.  Only iOS supports icons which have a different kind than [IconKind.Application](IconKind.Application.html).


            
