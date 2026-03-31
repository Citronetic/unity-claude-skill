This version of Unity is unsupported.



# [PlayerSettings.iOS](PlayerSettings.iOS.html).buildNumber




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







                    public static string buildNumber;






### Description



The build number of the bundle





It is saved to the 'CFBundleVersion' field in the built app's info.plist file.


              


```
using UnityEngine;
using UnityEditor;public class BuildNumberExample
{
    // This example will create a Menu Item called "Increase Minor Build Number" under "Examples" submenu which when pressed will get the current "Build" property and increase the Minor version by 1
    // Assuming the "Build" property follows the format Major.Minor.Patch (for example 2.0.5 will be increased to 2.1.0),
    [MenuItem("Examples/Increase Minor Build Number")]
    public static void IncreaseMinorBuildNumber()
    {
        // Get the current build number value
        string currentBuildNumberString = PlayerSettings.iOS.buildNumber;        // Separate the build number string to Major, Minor and Patch numbers
        string[] separatedBuildNumbers = currentBuildNumberString.Split('.');        // Parse the Major and Minor version numbers to integer values
        int majorVersionNumber = int.Parse(separatedBuildNumbers[0]);
        int minorVersionNumber = int.Parse(separatedBuildNumbers[1]);        // Increment the Minor version number
        minorVersionNumber++;

        // Update the buildNumber property with the new values:
        // - keep the old Major version number;
        // - update Minor version number;
        // - replace Patch version number with 0, since Minor version was updated.
        PlayerSettings.iOS.buildNumber = string.Format("{0}.{1}.{2}", majorVersionNumber, minorVersionNumber, 0);
    }
}
```


            
