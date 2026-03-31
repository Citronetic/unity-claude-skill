This version of Unity is unsupported.



# [Device](iOS.Device.html).generation




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












                    public static [iOS.DeviceGeneration](iOS.DeviceGeneration.html) generation;






### Description



The generation of the device. (Read Only)





For information on the possible values, see [DeviceGeneration](iOS.DeviceGeneration.html).


              


```
using UnityEngine;
using UnityEngine.iOS;public class DeviceGenerationExample : MonoBehaviour
{
    string m_DeviceGeneration = "Undefined";    void Start()
    {
        // Check if the device running this is an "iPhone 14 Pro Max"
        if (Device.generation == DeviceGeneration.iPhone14ProMax)
        {
            m_DeviceGeneration = "iPhone 14 Pro Max";
        }

        // Check if the device running this is an 'iPad Mini (6th generation)"
        if (Device.generation == DeviceGeneration.iPadMini6Gen)
        {
            m_DeviceGeneration = "iPad Mini (6th generation)";
        }

        // Check if the device running this is an "iPod Touch (7th generation)"
        if (Device.generation == DeviceGeneration.iPodTouch7Gen)
        {
            m_DeviceGeneration = "iPod Touch (7th generation)";
        }        // Check if the device running this is an unknown iPhone
        if (Device.generation == DeviceGeneration.iPhoneUnknown)
        {
            m_DeviceGeneration = "Unknown iPhone";
        }

        // Check if the device running this is an unknown iPad
        if (Device.generation == DeviceGeneration.iPadUnknown)
        {
            m_DeviceGeneration = "Unknown iPad";
        }

        // Check if the device running this is an unknown iPod Touch
        if (Device.generation == DeviceGeneration.iPodTouchUnknown)
        {
            m_DeviceGeneration = "Unknown iPod Touch";
        }

        // Output the device generation to the console/device log
        Debug.Log("Device generation: " + m_DeviceGeneration);
    }
}
```


            
