This version of Unity is unsupported.



# [InputDevices](XR.InputDevices.html).GetDevicesWithCharacteristics




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















## Declaration

public static void GetDevicesWithCharacteristics([XR.InputDeviceCharacteristics](XR.InputDeviceCharacteristics.html) desiredCharacteristics,
List<InputDevice> inputDevices);






### Parameters



| Parameter | Description |
| --- | --- |
| desiredCharacteristics | A bitwise combination of the characteristics you are looking for. |
| inputDevices | A List<InputDevice> object to receive the available input devices. |





### Description



Gets the list of active XR input devices that match the specified [InputDeviceCharacteristics](XR.InputDeviceCharacteristics.html).





This function finds any input devices available to the XR Subsystem that match the specified [InputDeviceCharacteristics](XR.InputDeviceCharacteristics.html) bitmask exactly and inserts them into the `inputDevices` list. The function does not include devices that only provide some of the desired characteristics or capabilities.

The inputDevices list is cleared before any new elements are added.

The characteristics are a bitmask, and so you can use the | operator in order to search for multiple characteristics at once.


              


```
using UnityEngine;
using UnityEngine.XR;
using System.Collections.Generic;public class ExampleClass : MonoBehaviour
{
    void Start()
    {
        InputDeviceCharacteristics leftTrackedControllerFilter = InputDeviceCharacteristics.Controller | InputDeviceCharacteristics.TrackedDevice | InputDeviceCharacteristics.Left, leftHandedControllers;        List<InputDevice> foundControllers = new List<InputDevice>();
        InputDevices.GetDevicesWithCharacteristics(leftTrackedControllerFilter, foundControllers);
    }
}
```


            
