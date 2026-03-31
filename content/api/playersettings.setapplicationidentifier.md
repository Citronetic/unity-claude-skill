This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).SetApplicationIdentifier




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

public static void SetApplicationIdentifier([Build.NamedBuildTarget](Build.NamedBuildTarget.html) buildTarget,
string identifier);






### Parameters



| Parameter | Description |
| --- | --- |
| buildTarget | The named build target that specifies the platform configuration targeted, allowing the application identifier to be retrieved for platforms like iOS, Android, or other defined build targets. |
| identifier | The unique application identifier, such as a bundle identifier on iOS or a package name on Android, used to uniquely identify the application on the specified platform. |





### Description



Sets the application identifier for a platform.





An application identifier is a unique string that distinguishes an app from others on a given platform, ensuring correct app installation, updates, and access to platform-specific services, making it essential for the app's identity and operation within app stores and devices.

The location that the application identifier is stored in depends on the platform build target. For iOS, tvOS, and macOS platforms, the identifier is written to the `CFBundleIdentifier` field within the `info.plist` file, which is generated and included in the build output folder when the Unity project is built. Specifically for macOS, the bundle identifier also appears in the `info.plist` file within the final .app file after the Xcode build process is completed. On Android, the identifier is saved in the `package` field of the `AndroidManifest.xml` file.


              


```
using UnityEditor;
using UnityEditor.Build;

public static class SetApplicationIdentifierExample
{
    public static void SetAppIdentifier()
    {
        // Set the application identifier for iOS.
        PlayerSettings.SetApplicationIdentifier(NamedBuildTarget.iOS, "com.companyname.yourapp");

        // Set the application identifier for Android.
        PlayerSettings.SetApplicationIdentifier(NamedBuildTarget.Android, "com.companyname.yourapp");

        // Set the application identifier for other platforms if needed
        // PlayerSettings.SetApplicationIdentifier(NamedBuildTarget.tvOS, "com.companyname.yourapp");
        // PlayerSettings.SetApplicationIdentifier(NamedBuildTarget.Standalone, "com.companyname.yourapp");
        // etc.
    }
}
```





Additional resources: [PlayerSettings.GetApplicationIdentifier](PlayerSettings.GetApplicationIdentifier.html).




---






                        **Obsolete**
                        Use SetApplicationIdentifier(NamedBuildTarget buildTarget, string identifier) instead.




## Declaration

public static void SetApplicationIdentifier([BuildTargetGroup](BuildTargetGroup.html) targetGroup,
string identifier);






### Parameters



| Parameter | Description |
| --- | --- |
| targetGroup | The build target group that specifies the platform configuration targeted, allowing the application identifier to be set for platforms like iOS, Android, or other defined build targets. |
| identifier | The unique application identifier, such as a bundle identifier on iOS or a package name on Android, used to uniquely identify the application on the specified platform. |





### Description



Set the application identifier for the specified platform.





An application identifier is a unique string that distinguishes an app from others on a given platform. This identifier ensures correct app installation, updates, and access to platform-specific services, making it essential for the app's identity and operation within app stores and devices.

The location that the application identifier is stored in depends on the platform build target. For iOS, tvOS, and macOS platforms, the identifier is written to the `CFBundleIdentifier` field within the `info.plist` file, which is generated and included in the build output folder when the Unity project is built. Specifically for macOS, the bundle identifier also appears in the `info.plist` file within the final .app file after the Xcode build process is completed. On Android, the identifier is saved in the `package` field of the `AndroidManifest.xml` file.


            
