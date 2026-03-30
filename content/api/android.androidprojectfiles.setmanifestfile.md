This version of Unity is unsupported.



# [AndroidProjectFiles](Android.AndroidProjectFiles.html).SetManifestFile




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

public void SetManifestFile(string path,
[Unity.Android.Gradle.Manifest.AndroidManifestFile](Unity.Android.Gradle.Manifest.AndroidManifestFile.html) manifest);






### Parameters



| Parameter | Description |
| --- | --- |
| path | The file path to place the Manifest file at. This path is relative to the gradle project path. |
| manifest | The representation of Android Manifest file. |





### Description



Sets a new `Android Manifest` file.





To use this method, you must also declare your new file in [AndroidProjectFilesModifier.Setup](Android.AndroidProjectFilesModifier.Setup.html) using the [AndroidProjectFilesModifierContext.AdditionalOutputs.AddManifestFile](Android.AndroidProjectFilesModifierContext.AdditionalOutputs.AddManifestFile.html) method.


              


```
using System.IO;
using Unity.Android.Gradle.Manifest;
using UnityEditor.Android;public class ModifyProjectScript : AndroidProjectFilesModifier
{
    //  Define the path to the Android Manifest file
    private string _myLibAndroidManifest = Path.Combine("unityLibrary", "customPlugin", "AndroidManifest.xml");    // Configure the required settings/outputs to modify the Android project files
    public override AndroidProjectFilesModifierContext Setup()
    {
        var projectFilesContext = new AndroidProjectFilesModifierContext();        projectFilesContext.Outputs.AddManifestFile(_myLibAndroidManifest);        return projectFilesContext;
    }    //  Modify the Android project files
    public override void OnModifyAndroidProjectFiles(AndroidProjectFiles projectFiles)
    {
        // Create an object representing an AndroidManifest.xml and set it as contents to unityLibrary/customPlugin/build.gradle
        var androidManifest = new AndroidManifestFile();        // Here you can modify AndroidManifest properties before calling SetManifestFile
        androidManifest.Manifest.AddUsesPermission("RECORD_AUDIO");
        projectFiles.SetManifestFile(_myLibAndroidManifest, androidManifest);
    }
}
```


            
