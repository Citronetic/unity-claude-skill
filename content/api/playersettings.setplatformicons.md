This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).SetPlatformIcons




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

public static void SetPlatformIcons([Build.NamedBuildTarget](Build.NamedBuildTarget.html) buildTarget,
[PlatformIconKind](PlatformIconKind.html) kind,
PlatformIcon[] icons);




                        **Obsolete**
                        Use SetPlatformIcons(NamedBuildTarget , PlatformIconKind) instead.




## Declaration

public static void SetPlatformIcons([BuildTargetGroup](BuildTargetGroup.html) platform,
[PlatformIconKind](PlatformIconKind.html) kind,
PlatformIcon[] icons);






### Parameters



| Parameter | Description |
| --- | --- |
| platform | The full list of platforms that support this API the supported  kinds can be found in icon kinds. |
| icons | All available PlatformIcon slots must be retrieved with GetPlatformIcons. |
| buildTarget | The NamedBuildTarget. |





### Description



Assign a list of icons for the specified platform and icon kind.





Most platforms support icons with several different sizes. This methods allows you to set [Icons](PlatformIcon.html) for each platform that supports them.  GetPlatformIcons has to be used to retrieve all the supported icons for specified [PlatformIconKind](PlatformIconKind.html) and platform.
Texture files must be stored in the project and instances obtained using [AssetDatabase.LoadAssetAtPath](AssetDatabase.LoadAssetAtPath.html).

BuildTargetGroup is marked for deprecation in the future. Use [NamedBuildTarget](Build.NamedBuildTarget.html) instead.

The following code sample shows how to set up adaptive icons for an Android application. This is an editor script which means it must be within an Editor folder to compile.


              


```
using UnityEditor.Android;
using UnityEditor;
using UnityEngine;
using UnityEditor.Build;public static class AndroidPlayerSettingsUtility
{
    // `Adaptive` icons for Android require a background and foreground layer for each icon
    public static void SetIcons(Texture2D[][] textures)
    {
        NamedBuildTarget platform = NamedBuildTarget.Android;
        PlatformIconKind kind = AndroidPlatformIconKind.Adaptive;        PlatformIcon[] icons = PlayerSettings.GetPlatformIcons(platform, kind);        //Assign textures to each available icon slot.
        for (int i = 0; i < icons.Length; i++)
        {
            icons[i].SetTextures(textures[i]);
        }
        PlayerSettings.SetPlatformIcons(platform, kind, icons);
    }
}
```





The following code sample shows how to set all App icons for an iOS application. This is an editor script which means it must be within an Editor folder to compile.


              


```
using UnityEditor.iOS;
using UnityEditor;
using UnityEngine;
using UnityEditor.Build;public static class iOSPlayerSettingsUtility
{
    // Setting all `App` icons for iOS
    public static void SetAppIcons(Texture2D[] textures)
    {
        NamedBuildTarget platform = NamedBuildTarget.iOS;
        PlatformIconKind kind = iOSPlatformIconKind.Application;        PlatformIcon[] icons = PlayerSettings.GetPlatformIcons(platform, kind);        //Assign textures to each available icon slot.
        for (int i = 0; i < icons.Length; i++)
        {
            icons[i].SetTextures(textures[i]);
        }
        PlayerSettings.SetPlatformIcons(platform, kind, icons);
    }
}
```


            
