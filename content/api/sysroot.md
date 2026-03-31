This version of Unity is unsupported.



# Sysroot





class in
          UnityEditor


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



Base class for implementing sysroots and toolchains for IL2CPP





### Properties



| Property | Description |
| --- | --- |
| HostArch | Returns name of the host architecture |
| HostPlatform | Returns name of the host platform |
| Name | Returns name of the sysroot |
| TargetArch | Returns name of the target architecture |
| TargetPlatform | Returns name of the target platform |





### Public Methods



| Method | Description |
| --- | --- |
| GetIl2CppAdditionalDefines | Returns an array of additional defines. |
| GetIl2CppAdditionalIncludeDirectories | Returns an array of additional include directories. |
| GetIl2CppAdditionalLibraries | Returns an array of additional static libraries. |
| GetIl2CppAdditionalLinkDirectories | Returns an array of additional link directories. |
| GetIl2CppArguments | Returns the next Il2Cpp argument on each call |
| GetIl2CppCompilerFlags | Returns compiler flags string to pass to Il2Cpp |
| GetIl2CppLinkerFlags | Returns linker flags string to pass to Il2Cpp |
| GetIl2CppLinkerFlagsFile | Returns linker flags file string to pass to Il2Cpp. |
| GetSysrootPath | Returns path to sysroot |
| GetToolchainPath | Returns path to toolchain |
| Initialize | Initializes sysroot |


            
