This version of Unity is unsupported.



# XRSettings





class in
          UnityEngine.XR



/



Implemented in:[UnityEngine.VRModule](UnityEngine.VRModule.html)


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



Global XR related settings.





### Static Properties



| Property | Description |
| --- | --- |
| deviceEyeTextureDimension | Fetch the device eye texture dimension from the active stereo device. |
| enabled | Globally enables or disables XR for the application. |
| eyeTextureDesc | Fetch the eye texture RenderTextureDescriptor from the active stereo device. |
| eyeTextureHeight | The current height of an eye texture for the loaded device. |
| eyeTextureResolutionScale | Controls the actual size of eye textures as a multiplier of the device's default resolution. |
| eyeTextureWidth | The current width of an eye texture for the loaded device. |
| gameViewRenderMode | Sets the render mode for the XR device. The render mode controls how the view of the XR device renders in the Game view and in the main window on a host PC. |
| isDeviceActive | Read-only value that can be used to determine if the XR device is active. |
| loadedDeviceName | Type of XR device that is currently loaded. |
| occlusionMaskScale | A scale applied to the standard occulsion mask for each platform. |
| renderViewportScale | Controls how much of the allocated eye texture should be used for rendering. |
| showDeviceView | This property has been deprecated. Use XRSettings.gameViewRenderMode instead. |
| stereoRenderingMode | The stereo rendering mode that is currently in use. |
| supportedDevices | Returns a list of supported XR devices that were included at build time. |
| useOcclusionMesh | Specifies whether or not the occlusion mesh should be used when rendering. Enabled by default. |


            
