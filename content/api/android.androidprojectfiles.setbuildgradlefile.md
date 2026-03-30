This version of Unity is unsupported.



# [AndroidProjectFiles](Android.AndroidProjectFiles.html).SetBuildGradleFile




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

public void SetBuildGradleFile(string path,
[Unity.Android.Gradle.ModuleBuildGradleFile](Unity.Android.Gradle.ModuleBuildGradleFile.html) buildGradle);






### Parameters



| Parameter | Description |
| --- | --- |
| path | The file path to place the build.gradle file at. This path is relative to the gradle project path. |
| buildGradle | The representation of module build.gradle file. |





### Description



Sets a new `build.gradle` file.





To use this method, you must also declare your new file in [AndroidProjectFilesModifier.Setup](Android.AndroidProjectFilesModifier.Setup.html) using the [AndroidProjectFilesModifierContext.AdditionalOutputs.AddBuildGradleFile](Android.AndroidProjectFilesModifierContext.AdditionalOutputs.AddBuildGradleFile.html) method.


              


```
using System.IO;
using Unity.Android.Gradle;
using UnityEditor.Android;public class ModifyProjectScript : AndroidProjectFilesModifier
{
    // Define the path to the Gradle file
    private string _myLibBuildGradle = Path.Combine("unityLibrary", "customPlugin", "build.gradle");    // Configure the required settings/outputs to modify the Android project files
    public override AndroidProjectFilesModifierContext Setup()
    {
        var projectFilesContext = new AndroidProjectFilesModifierContext();        // Inform the build system about the files to be generated during the build process
        projectFilesContext.Outputs.AddBuildGradleFile(_myLibBuildGradle);        return projectFilesContext;
    }    //  Modify the Android project files
    public override void OnModifyAndroidProjectFiles(AndroidProjectFiles projectFiles)
    {
        // Create an object representing a build.gradle and set it as contents to unityLibrary/customPlugin/build.gradle
        var buildGradleFile = new ModuleBuildGradleFile();
        projectFiles.SetBuildGradleFile(_myLibBuildGradle, buildGradleFile);
    }
}
```


            
