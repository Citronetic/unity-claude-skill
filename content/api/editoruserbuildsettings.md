This version of Unity is unsupported.



# EditorUserBuildSettings





class in
          UnityEditor



/



Inherits from:[Object](Object.html)


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



User build settings for the Editor





EditorUserBuildSettings tracks the build configuration for Player or AssetBundles builds.
For example, the active build target is used to determine which platform the Player is built for.

This class is used to store build-related settings that are local to the project, as installed on a specific device.
For example, [EditorUserBuildSettings.activeBuildTarget](EditorUserBuildSettings-activeBuildTarget.html) is a setting that could have different values for different people who are using the same Unity project and simultaneously building the Player for different devices.

EditorUserBuildSettings is stored in `Library/EditorUserBuildSettings.asset`, a location which is not intended for inclusion in version control.
Some of these settings can be overridden by the active [BuildProfile](Build.Profile.BuildProfile.html), see [Override settings with build profiles](../Manual/build-profiles-override-settings.html) for details.

When writing a custom build script it is possible to retrieve the current settings using this class, or to provide different settings, see [BuildPlayerOptions](BuildPlayerOptions.html) and [BuildAssetBundlesParameters](BuildAssetBundlesParameters.html).

The related class [EditorBuildSettings](EditorBuildSettings.html) exposes build-related settings that are suitable to be backed up and shared through version control.





### Static Properties



| Property | Description |
| --- | --- |
| activeBuildTarget | The currently active build target. |
| activeScriptCompilationDefines | DEFINE directives for the compiler. |
| allowDebugging | Enable source-level debuggers to connect. |
| androidBuildSubtarget | Android platform options. |
| buildAppBundle | Set to true to build an Android App Bundle (aab file) instead of an apk. The default value is false. |
| buildScriptsOnly | Is build script only enabled. |
| buildWithDeepProfilingSupport | Enables Deep Profiling support in the Player. |
| compressFilesInPackage | Compress files in package. |
| connectProfiler | Start the player with a connection to the profiler. |
| development | Enables a development build. |
| explicitArrayBoundsChecks | Are array bounds actively validated? |
| explicitDivideByZeroChecks | Are divide by zero's actively validated? |
| explicitNullChecks | Are null references actively validated? |
| exportAsGoogleAndroidProject | Export Android Project for use with Android Studio/Gradle. |
| forceInstallation | Force installation of package, even if error. |
| installInBuildFolder | Place the built player in the build folder. |
| iOSXcodeBuildConfig | The scheme Xcode uses to run this project. |
| macOSXcodeBuildConfig | The scheme Xcode uses to run this project. |
| managedDebuggerFixedPort | Force the port used by the managed debugger. Default is 0 which means platform-specific auto-selection of a port. |
| movePackageToDiscOuterEdge | Places the package on the outer edge of the disk. |
| needSubmissionMaterials | Build submission materials. |
| overrideMaxTextureSize | The override for the maximum texture size when importing assets. |
| overrideTextureCompression | The asset importing override of texture compression. |
| ps4BuildSubtarget | PS4 Build Subtarget. |
| ps4HardwareTarget | Specifies which version of PS4 hardware to target. |
| selectedBuildTargetGroup | The currently selected build target group. |
| selectedStandaloneTarget | The currently selected target for a standalone build. |
| standaloneBuildSubtarget | Desktop standalone build subtarget. |
| symlinkSources | Symlink sources when generating the project. |
| waitForManagedDebugger | Instructs the Player to wait for managed debugger to attach before executing any script code. |
| waitForPlayerConnection | Sets the Player to wait for player connection on player start. |
| webGLBuildSubtarget | WebGL Build subtarget. |
| webGLClientBrowserPath | The path to the executable of the browser in which to load the web application. |
| webGLClientBrowserType | Defines the client browser type in which to load the web application. |
| windowsBuildAndRunDeployTarget | Sets and gets the Windows device to launch the Windows app when using Build and Run. |
| windowsDevicePortalAddress | Specifies the Windows DevicePortal connection address of the device to deploy and launch the UWP app on when using Build and Run. |
| windowsDevicePortalPassword | Specifies the Windows DevicePortal password for the device to deploy and launch the UWP app on when using Build and Run. |
| windowsDevicePortalUsername | Specifies the Windows DevicePortal username for the device to deploy and launch the UWP app on when using Build and Run. |
| wsaBuildAndRunDeployTarget | Sets and gets the Windows device to launch the UWP app when using Build and Run. |
| wsaUWPBuildType | The build type for the Universal Windows Platform. |
| wsaUWPSDK | Sets and gets target UWP SDK to build Windows Store application against. |
| wsaUWPVisualStudioVersion | Sets and gets Visual Studio version to build Windows Store application with. |





### Static Methods



| Method | Description |
| --- | --- |
| GetBuildLocation | Returns the location used for the last saved build. |
| SetBuildLocation | Set a new location for the build. |
| SwitchActiveBuildTarget | Select a new build target to be active. |
| SwitchActiveBuildTargetAsync | Select a new build target to be active during the next Editor update. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| hideFlags | Should the object be hidden, saved with the Scene or modifiable by the user? |
| name | The name of the object. |






### Public Methods

| Method | Description |
| --- | --- |
| GetInstanceID | Gets  the instance ID of the object. |
| ToString | Returns the name of the object. |




### Static Methods

| Method | Description |
| --- | --- |
| Destroy | Removes a GameObject, component, or asset. |
| DestroyImmediate | Destroys the specified object immediately. Use with caution and in Edit mode only. |
| DontDestroyOnLoad | Do not destroy the target Object when loading a new Scene. |
| FindAnyObjectByType | Retrieves any active loaded object of Type type. |
| FindFirstObjectByType | Retrieves the first active loaded object of Type type. |
| FindObjectsByType | Retrieves a list of all loaded objects of Type type. |
| Instantiate | Clones the object original and returns the clone. |
| InstantiateAsync | Captures a snapshot of the original object (that must be related to some GameObject) and returns the AsyncInstantiateOperation. |



### Operators

| Operator | Description |
| --- | --- |
| bool | Does the object exist? |
| operator != | Compares if two objects refer to a different object. |
| operator == | Compares two object references to see if they refer to the same object. |





            
