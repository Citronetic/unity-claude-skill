This version of Unity is unsupported.



# [AndroidProjectFiles](Android.AndroidProjectFiles.html).SetGradlePropertiesFile




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

public void SetGradlePropertiesFile(string path,
[Unity.Android.Gradle.GradlePropertiesFile](Unity.Android.Gradle.GradlePropertiesFile.html) gradleProperties);






### Parameters



| Parameter | Description |
| --- | --- |
| path | The file path to place the gradle.properties file at. This path is relative to the gradle project path. |
| gradleProperties | The representation of module gradle.properties file. |





### Description



Sets a new `gradle.properties` file.





To use this method, you must also declare your new file in [AndroidProjectFilesModifier.Setup](Android.AndroidProjectFilesModifier.Setup.html) using the [AndroidProjectFilesModifierContext.AdditionalOutputs.AddGradlePropertiesFile](Android.AndroidProjectFilesModifierContext.AdditionalOutputs.AddGradlePropertiesFile.html) method.


              


```
using System.IO;
using Unity.Android.Gradle;
using UnityEditor.Android;public class ModifyProjectScript : AndroidProjectFilesModifier
{
    // Define the path to the Gradle properties file
    private string _myLibGradleProperties = Path.Combine("unityLibrary", "customPlugin", "gradle.properties");    public override AndroidProjectFilesModifierContext Setup()
    {
        var projectFilesContext = new AndroidProjectFilesModifierContext();        projectFilesContext.Outputs.AddGradlePropertiesFile(_myLibGradleProperties);        return projectFilesContext;
    }    //  Modify the Android project files
    public override void OnModifyAndroidProjectFiles(AndroidProjectFiles projectFiles)
    {
        // Create an object representing a gradle.properties and set it as contents to unityLibrary/customPlugin/gradle.properties
        var gradlePropertiesFile = new GradlePropertiesFile();
        projectFiles.SetGradlePropertiesFile(_myLibGradleProperties, gradlePropertiesFile);
    }
}
```


            
