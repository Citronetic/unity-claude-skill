This version of Unity is unsupported.



# [AndroidProjectFiles](Android.AndroidProjectFiles.html).SetFileContents




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

public void SetFileContents(string path,
byte[] contents);






### Parameters



| Parameter | Description |
| --- | --- |
| path | The file to write to. This path is relative to the Gradle project path. |
| contents | Byte array contents. |





### Description



Sets the content of a new file to the specified bytes.





To use this method, you must first declare the new file in [AndroidProjectFilesModifier.Setup](Android.AndroidProjectFilesModifier.Setup.html) using the [AndroidProjectFilesModifierContext.AdditionalOutputs.AddFileWithContents](Android.AndroidProjectFilesModifierContext.AdditionalOutputs.AddFileWithContents.html) method.


              


```
using UnityEditor.Android;public class ModifyProjectScript : AndroidProjectFilesModifier
{
    // Configure the required settings/outputs to modify the Android project files
    public override AndroidProjectFilesModifierContext Setup()
    {
        var projectFilesContext = new AndroidProjectFilesModifierContext();        // Add new file example
        projectFilesContext.Outputs.AddFileWithContents("AdditionalContent/ModifyProjectTextFile.txt");        return projectFilesContext;
    }    //  Modify the Android project files
    public override void OnModifyAndroidProjectFiles(AndroidProjectFiles projectFiles)
    {
        // Set file contents example
        // Requires file to be added to output in Setup method
        projectFiles.SetFileContents("AdditionalContent/ModifyProjectTextFile.txt", "This was created in the OnModifyAndroidProjectFiles method");
    }
}
```


            
