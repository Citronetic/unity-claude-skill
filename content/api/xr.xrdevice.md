This version of Unity is unsupported.



# XRDevice





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



Contains all functionality related to a XR device.





### Static Properties



| Property | Description |
| --- | --- |
| fovZoomFactor | Zooms the XR projection. |
| refreshRate | Refresh rate of the display in Hertz. |





### Static Methods



| Method | Description |
| --- | --- |
| DisableAutoXRCameraTracking | Sets whether the camera passed in the first parameter is controlled implicitly by the XR Device |
| GetNativePtr | This method returns an IntPtr representing the native pointer to the XR device if one is available, otherwise the value will be IntPtr.Zero. |
| UpdateEyeTextureMSAASetting | Recreates the XR platform's eye texture swap chain with the appropriate anti-aliasing sample count.  The reallocation of the eye texture will only occur if the MSAA quality setting's sample count is different from the sample count of the current eye texture.  Reallocations of the eye textures will happen at the beginning of the next frame.  This is an expensive operation and should only be used when necessary. |





### Events



| Event | Description |
| --- | --- |
| deviceLoaded | Subscribe a delegate to this event to get notified when an XRDevice is successfully loaded. |


            
