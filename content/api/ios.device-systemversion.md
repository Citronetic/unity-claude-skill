This version of Unity is unsupported.



# [Device](iOS.Device.html).systemVersion




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












                    public static string systemVersion;






### Description



iOS version.





iOS version as a string. E.g. "7.0" or "8.1".


              


```
using UnityEngine;
using UnityEngine.iOS;public class SystemVersionExample : MonoBehaviour
{
    bool allowFeature = true;    void Start()
    {
        // Get the iOS version of the device this is running on
        string systemVersion = Device.systemVersion;        // Separate the version string to major and minor version numbers
        string[] separatedVersion = systemVersion.Split('.');        // Parse the major version number to an integer that can be used for comparison
        int majorVersion = int.Parse(separatedVersion[0]);        // Check if major version number of the device this is running on is below iOS 12
        if (majorVersion < 12)
        {
            // Log a message and disable the version-specific features.
            Debug.Log("Sorry, this amazing feature requires iOS 12 and above to work. Please update your iOS version.");
            allowFeature = false;
        }
    }
}
```


            
