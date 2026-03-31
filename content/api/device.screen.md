This version of Unity is unsupported.



# Screen





class in
          UnityEngine.Device



/



Implemented in:[UnityEngine.CoreModule](UnityEngine.CoreModule.html)


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



Access platform-specific display information.





This class has the same functionality as [Screen](Screen.html) and also mimics platform-specific behavior in the Unity Editor. Use it together with the Device Simulator to test platform-specific behaviors inside the Editor. Outside of the Editor, this class behaves exactly like the [Screen](Screen.html) class. Unity strips all simulation capabilities during the build process. Use the original [Screen](Screen.html) class if you work directly with the Unity Editor (for example, to create a custom Editor tool) and you don't need to use any simulated values.





### Static Properties



| Property | Description |
| --- | --- |
| autorotateToLandscapeLeft | This has the same functionality as Screen.autorotateToLandscapeLeft and also mimics platform-specific behavior in the Unity Editor. |
| autorotateToLandscapeRight | This has the same functionality as Screen.autorotateToLandscapeRight and also mimics platform-specific behavior in the Unity Editor. |
| autorotateToPortrait | This has the same functionality as Screen.autorotateToPortrait and also mimics platform-specific behavior in the Unity Editor. |
| autorotateToPortraitUpsideDown | This has the same functionality as Screen.autorotateToPortraitUpsideDown and also mimics platform-specific behavior in the Unity Editor. |
| brightness | This has the same functionality as Screen.brightness. At the moment, the Device Simulator doesn't support simulation of this property. |
| currentResolution | This has the same functionality as Screen.currentResolution and also mimics platform-specific behavior in the Unity Editor. |
| cutouts | This has the same functionality as Screen.cutouts and also mimics platform-specific behavior in the Unity Editor. |
| dpi | This has the same functionality as Screen.dpi and also mimics platform-specific behavior in the Unity Editor. |
| fullScreen | This has the same functionality as Screen.fullScreen and also mimics platform-specific behavior in the Unity Editor. |
| fullScreenMode | This has the same functionality as Screen.fullScreenMode and also mimics platform-specific behavior in the Unity Editor. |
| height | This has the same functionality as Screen.height and also mimics platform-specific behavior in the Unity Editor. |
| mainWindowDisplayInfo | The Device Simulator doesn't simulate this property. |
| mainWindowPosition | The Device Simulator doesn't simulate this property. |
| msaaSamples | This has the same functionality as Screen.msaaSamples and also mimics platform-specific behavior in the Unity Editor. |
| orientation | This has the same functionality as Screen.orientation and also mimics platform-specific behavior in the Unity Editor. |
| resolutions | This has the same functionality as Screen.resolutions and also mimics platform-specific behavior in the Unity Editor. |
| safeArea | This has the same functionality as Screen.safeArea and also mimics platform-specific behavior in the Unity Editor. |
| sleepTimeout | This has the same functionality as Screen.sleepTimeout. At the moment, the Device Simulator doesn't support simulation of this property. |
| width | This has the same functionality as Screen.width and also mimics platform-specific behavior in the Unity Editor. |





### Static Methods



| Method | Description |
| --- | --- |
| GetDisplayLayout | The Device Simulator doesn't simulate this property.                Additional resources: DisplayInfo, Screen.GetDisplayLayout |
| MoveMainWindowTo | The Device Simulator doesn't simulate this method. |
| SetMSAASamples | This has the same functionality as Screen.SetMSAASamples and also mimics platform-specific behavior in the Unity Editor. |
| SetResolution | This has the same functionality as Screen.SetResolution and also mimics platform-specific behavior in the Unity Editor. |


            
