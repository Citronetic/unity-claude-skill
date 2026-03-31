This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).GetPlatformIcons




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

public static PlatformIcon[] GetPlatformIcons([Build.NamedBuildTarget](Build.NamedBuildTarget.html) buildTarget,
[PlatformIconKind](PlatformIconKind.html) kind);






### Parameters



| Parameter | Description |
| --- | --- |
| buildTarget | The NamedBuildTarget. |
| kind | Each platform supports a different set of icon kinds. These can be found in the specific platform namespace (for example iOSPlatformIconKind. |





### Description



Gets the list of available icon slots for the specified build target and  [kind](PlatformIconKind.html).





If you use [PlayerSettings.SetPlatformIcons](PlayerSettings.SetPlatformIcons.html) to set icons, Unity needs to retrieve each icon's build target and [icon kind](PlatformIconKind.html)."




---






                        **Obsolete**
                        Use GetPlatformIcons(NamedBuildTarget , PlatformIconKind) instead.




## Declaration

public static PlatformIcon[] GetPlatformIcons([BuildTargetGroup](BuildTargetGroup.html) platform,
[PlatformIconKind](PlatformIconKind.html) kind);






### Parameters



| Parameter | Description |
| --- | --- |
| platform | The full list of platforms that support this API and the supported icon kinds can be found in icon kinds. |
| kind | Each platform supports a different set of icon kinds. These can be found in the specific platform namespace (for example iOSPlatformIconKind). |





### Description



BuildTargetGroup is marked for deprecation in the future. Use [NamedBuildTarget](Build.NamedBuildTarget.html) instead.


            
