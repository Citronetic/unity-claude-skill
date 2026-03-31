This version of Unity is unsupported.



# [BuildPlayerOptions](BuildPlayerOptions.html).subtarget




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












                    public int subtarget;






### Description



The Subtarget to build.





For certain platforms, setting a non-zero value for this property can modify the build behaviour.

Both this property and [BuildPlayerOptions.target](BuildPlayerOptions-target.html) should remain unset to automatically use the target and subtarget as defined in the current Build Profile.

The valid values for this property correspond to target-specific enums, which are cast to ints.  Examples of these enums include [StandaloneBuildSubtarget](StandaloneBuildSubtarget.html), [MobileTextureSubtarget](MobileTextureSubtarget.html), [WebGLTextureSubtarget](WebGLTextureSubtarget.html) and [XboxBuildSubtarget](XboxBuildSubtarget.html).

Usage examples:



          - For building a headless server, when building for [BuildTarget.StandaloneWindows](BuildTarget.StandaloneWindows.html), [BuildTarget.StandaloneOSX](BuildTarget.StandaloneOSX.html) or [BuildTarget.StandaloneLinux64](BuildTarget.StandaloneLinux64.html), specify [StandaloneBuildSubtarget.Server](StandaloneBuildSubtarget.Server.html) (numeric value 1).

          - For ETC2 texture compression, when building for [BuildTarget.Android](BuildTarget.Android.html), or another mobile platform, specify [MobileTextureSubtarget.ETC2](MobileTextureSubtarget.ETC2.html) (numeric value 5).





Additional resources: [BuildAssetBundlesParameters.subtarget](BuildAssetBundlesParameters-subtarget.html), [EditorUserBuildSettings.standaloneBuildSubtarget](EditorUserBuildSettings-standaloneBuildSubtarget.html), [EditorUserBuildSettings.androidBuildSubtarget](EditorUserBuildSettings-androidBuildSubtarget.html), [EditorUserBuildSettings.webGLBuildSubtarget](EditorUserBuildSettings-webGLBuildSubtarget.html), [EditorUserBuildSettings.ps4BuildSubtarget](EditorUserBuildSettings-ps4BuildSubtarget.html).


            
