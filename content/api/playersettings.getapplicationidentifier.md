This version of Unity is unsupported.



# [PlayerSettings](PlayerSettings.html).GetApplicationIdentifier




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

public static string GetApplicationIdentifier([Build.NamedBuildTarget](Build.NamedBuildTarget.html) buildTarget);






### Parameters



| Parameter | Description |
| --- | --- |
| buildTarget | The named build target that specifies the platform configuration targeted, allowing the application identifier to be retrieved for platforms like iOS, Android, or other defined build targets. |





### Returns



**string**
        Returns the application identifier associated with a [NamedBuildTarget](Build.NamedBuildTarget.html).





### Description



Get the application identifier for the specified platform.





An application identifier is a unique string that distinguishes an app from others on a given platform. This identifier ensures correct app installation, updates, and access to platform-specific services, making it essential for the app's identity and operation within app stores and devices.

The location that the application identifier is stored in depends on the platform build target. For iOS, tvOS, and macOS platforms, the identifier is written to the `CFBundleIdentifier` field within the `info.plist` file, which is generated and included in the build output folder when the Unity project is built. Specifically for macOS, the bundle identifier also appears in the `info.plist` file within the final .app file after the Xcode build process is completed. On Android, the identifier is saved in the `package` field of the `AndroidManifest.xml` file.


              


```
using UnityEditor.Build;
using UnityEditor;
using UnityEngine;

public static class GetApplicationIdentifierExample
{
    public static void GetAppIdentifier()
    {
        // Retrieve the application identifier for iOS.
        var iOSIdentifier = PlayerSettings.GetApplicationIdentifier(NamedBuildTarget.iOS);
        Debug.Log("iOS Application Identifier: " + iOSIdentifier);

        // Retrieve the application identifier for Android.
        var androidIdentifier = PlayerSettings.GetApplicationIdentifier(NamedBuildTarget.Android);
        Debug.Log("Android Application Identifier: " + androidIdentifier);

        // Retrieve the application identifier for other platforms if needed
        // var tvOSIdentifier = PlayerSettings.GetApplicationIdentifier(NamedBuildTarget.tvOS);
        // Debug.Log("tvOS Application Identifier: " + tvOSIdentifier);
        // var standaloneIdentifier = PlayerSettings.GetApplicationIdentifier(NamedBuildTarget.Standalone);
        // Debug.Log("Standalone Application Identifier: " + standaloneIdentifier);
        // etc.
    }
}
```





Additional resources: [PlayerSettings.SetApplicationIdentifier](PlayerSettings.SetApplicationIdentifier.html).




---






                        **Obsolete**
                        Use GetApplicationIdentifier(NamedBuildTarget buildTarget) instead.




## Declaration

public static string GetApplicationIdentifier([BuildTargetGroup](BuildTargetGroup.html) targetGroup);






### Parameters



| Parameter | Description |
| --- | --- |
| targetGroup | The build target group used to specify the platform configuration targeted, allowing the application identifier to be retrieved for platforms like iOS, Android, or other defined build targets. |





### Returns



**string**
        Returns the application identifier associated with a [BuildTargetGroup](BuildTargetGroup.html).





### Description



Gets the application identifier for a platform.





An application identifier is a unique string that distinguishes an app from others on a given platform. This identifier ensures correct app installation, updates, and access to platform-specific services, making it essential for the app's identity and operation within app stores and devices.

The location that the application identifier is stored in depends on the platform build target. For iOS, tvOS, and macOS platforms, the identifier is written to the `CFBundleIdentifier` field within the `info.plist` file, which is generated and included in the build output folder when the Unity project is built. Specifically for macOS, the bundle identifier also appears in the `info.plist` file within the final .app file after the Xcode build process is completed. On Android, the identifier is saved in the `package` field of the `AndroidManifest.xml` file.


            
