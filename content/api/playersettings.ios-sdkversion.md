This version of Unity is unsupported.



# [PlayerSettings.iOS](PlayerSettings.iOS.html).sdkVersion




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




                [Switch to Manual](../Manual/class-PlayerSettings.html)







                    public static [iOSSdkVersion](iOSSdkVersion.html) sdkVersion;






### Description



Set the iOS SDK version to use in the application.





Specify the iOS SDK version your Unity project will use when building for the iOS platform. Select between the following options:



          - **DeviceSDK**: Target physical iOS devices for production and submission.

          - **SimulatorSDK**: Target the iOS Simulator on macOS for testing when a physical device is unavailable.




              


```
using UnityEditor;
using UnityEditor.iOS;// Save this code in the Editor folder of your Project. When you save, Unity compiles this script and changes the settings. public static class UpdateiOSSdkVersion
{
    [InitializeOnLoadMethod]
    public static void UpdateiOSSdkVersionAutomatically()
    {
        // Set the desired iOS SDK version here. Choose one of the following:        //iOSSdkVersion.DeviceSDK or iOSSdkVersion.SimulatorSDK.        PlayerSettings.iOS.sdkVersion = iOSSdkVersion.DeviceSDK;        // Log the result
        UnityEngine.Debug.Log("iOS SDK Version updated to: " + PlayerSettings.iOS.sdkVersion);
    }
}
```





Additional resources: [iOSSdkVersion](iOSSdkVersion.html).


            
