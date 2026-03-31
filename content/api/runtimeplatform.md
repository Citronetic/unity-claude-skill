This version of Unity is unsupported.



# RuntimePlatform





enumeration


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



The platform application is running. Returned by Application.platform.





**Note:** The difference between using RuntimePlatform and Platform dependent compilation
is that using RuntimePlatform is evaluated at runtime while Platform dependent compilation is
evaluated at compile time. So if you can use platform dependent compilation, don't hesitate to use it. In most cases, you can
get the same functionality using both, and using the defines will produce smaller and faster code, as you don't need to check at runtime.
There are some cases where RuntimePlatform is needed at runtime.





### Properties



| Property | Description |
| --- | --- |
| OSXEditor | In the Unity editor on macOS. |
| OSXPlayer | In the player on macOS. |
| WindowsPlayer | In the player on Windows. |
| WindowsEditor | In the Unity editor on Windows. |
| IPhonePlayer | In the player on iPhone or iPad devices. |
| Android | In the player on Android devices. |
| LinuxPlayer | In the player on Linux. |
| LinuxEditor | In the Unity editor on Linux. |
| WebGLPlayer | In the player on WebGL |
| WSAPlayerX86 | In the player on Windows Store Apps when CPU architecture is X86. |
| WSAPlayerX64 | In the player on Windows Store Apps when CPU architecture is X64. |
| WSAPlayerARM | In the player on Windows Store Apps when CPU architecture is ARM. |
| PS4 | In the player on the Playstation 4. |
| XboxOne | In the player on Xbox One. |
| tvOS | In the player on the Apple's tvOS. |
| Switch | In the player on Nintendo Switch. |
| GameCoreXboxSeries | In the player on GameCoreXboxSeries. |
| GameCoreXboxOne | In the player on GameCoreXboxOne. |
| PS5 | In the player on the Playstation 5. |
| EmbeddedLinuxArm64 | In the player on EmbeddedLinuxArm64. |
| EmbeddedLinuxX64 | In the player on EmbeddedLinuxX64. |
| LinuxServer | In the server on Linux. |
| WindowsServer | In the server on Windows. |
| OSXServer | In the server on macOS. |
| QNXArm64 | In the player on QNXArm64. |
| QNXX64 | In the player on QNXX64. |
| VisionOS | In the player on visionOS. |


            
