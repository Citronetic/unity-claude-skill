This version of Unity is unsupported.



# [AndroidProjectFiles](Android.AndroidProjectFiles.html).SetGradleSettingsFile




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

public void SetGradleSettingsFile(string path,
[Unity.Android.Gradle.GradleSettingsFile](Unity.Android.Gradle.GradleSettingsFile.html) gradleSettings);






### Parameters



| Parameter | Description |
| --- | --- |
| path | The file path to place the settings.gradle file at. This path is relative to the gradle project path. |
| gradleSettings | The representation of module settings.gradle file. |





### Description



Sets a new `settings.gradle` file.





To use this method, you must also declare your new file in [AndroidProjectFilesModifier.Setup](Android.AndroidProjectFilesModifier.Setup.html) using the [AndroidProjectFilesModifierContext.AdditionalOutputs.AddGradleSettingsFile](Android.AndroidProjectFilesModifierContext.AdditionalOutputs.AddGradleSettingsFile.html) method.


              


```
using System.IO;
using Unity.Android.Gradle;
using UnityEditor.Android;public class ModifyProjectScript : AndroidProjectFilesModifier
{
    // Define the path to the Gradle settings file
    private string _myLibGradleSettings = Path.Combine("unityLibrary", "customPlugin", "settings.gradle");    // Configure the required settings/outputs to modify the Android project files
    public override AndroidProjectFilesModifierContext Setup()
    {
        var projectFilesContext = new AndroidProjectFilesModifierContext();        projectFilesContext.Outputs.AddGradleSettingsFile(_myLibGradleSettings);        return projectFilesContext;
    }    //  Modify the Android project files
    public override void OnModifyAndroidProjectFiles(AndroidProjectFiles projectFiles)
    {
        // Create an object representing a settings.gradle and set it as contents to unityLibrary/customPlugin/settings.gradle
        var gradleSettingsFile = new GradleSettingsFile();
        projectFiles.SetGradleSettingsFile(_myLibGradleSettings, gradleSettingsFile);
    }
}
```


            
