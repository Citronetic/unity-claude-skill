This version of Unity is unsupported.



# XRInputSubsystem





class in
          UnityEngine.XR



/



Inherits from:[IntegratedSubsystem](IntegratedSubsystem.html)



/



Implemented in:[UnityEngine.XRModule](UnityEngine.XRModule.html)


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



XRInputSubsystem
Instance is used to enable and disable the inputs coming from a specific plugin.





Starting up an XRInputSubsystem
Instance will cause that plugin to start feeding input device data to the following [InputTracking](XR.InputTracking.html) systems: XR.InputTracking.GetLocalPosition and XR.InputTracking.GetLocalRotation. Calling the Stop or Shutdown functions will disable polling any input device data for that plugin.





### Public Methods



| Method | Description |
| --- | --- |
| GetSupportedTrackingOriginModes | Gets all TrackingOriginModeFlags that this subsystem supports. |
| GetTrackingOriginMode | Gets the Tracking Origin Mode. |
| TryGetBoundaryPoints | Gets the list of 3D position values that represents the SDK-set boundary. |
| TryGetInputDevices | Gets a list of all connected InputDevices reported by this XRInputSubsystem. |
| TryRecenter | Centers the tracking features on all InputDevices to the current position and orientation of the head-mounted device. |
| TrySetTrackingOriginMode | Attempts to set the TrackingOriginModeFlags of the subsystem. |





### Events



| Event | Description |
| --- | --- |
| boundaryChanged | An event that takes the delegate instance that the XRInputSubsystem calls when it changes its tracking boundary. |
| trackingOriginUpdated | An event that takes the delegate instance that the XRInputSubsystem calls when it changes the origin it reports devices at. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| running | Whether or not the subsystem is running. |






### Public Methods

| Method | Description |
| --- | --- |
| Destroy | Destroys this instance of a subsystem. |
| Start | Starts an instance of a subsystem. |
| Stop | Stops an instance of a subsystem. |








            
