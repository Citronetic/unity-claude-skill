This version of Unity is unsupported.



# [AndroidProjectFiles](Android.AndroidProjectFiles.html).GetData




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

public string GetData(string key);






### Parameters



| Parameter | Description |
| --- | --- |
| key | Data key. |
| value | Data value as string. |





### Description



Gets data that was set in the Setup method.





This method is used to get data from the Unity Editor by setting it in the `Setup` method.

                    If data with the the given key does not exist, Unity throws an error.




---








## Declaration

public T GetData(string key);






### Parameters



| Parameter | Description |
| --- | --- |
| key | Data key. |
| value | Serializable object. |





### Description



Gets data that was set in the Setup method.





This method is used to get data from the Unity Editor by setting it in the `Setup` method.

                    If data with the the given key does not exist, Unity throws an error.


              


```
using System.IO;
using UnityEngine;
using UnityEditor;
using UnityEditor.Android;
using Unity.Android.Gradle.Manifest;public class ModifyProjectScript : AndroidProjectFilesModifier
{
    // Define the path to the Android Manifest file
    private string _myLibAndroidManifest = Path.Combine("unityLibrary", "customPlugin", "AndroidManifest.xml");    // Configure the required settings/outputs to modify the Android project files
    public override AndroidProjectFilesModifierContext Setup()
    {
        var projectFilesContext = new AndroidProjectFilesModifierContext();        // Set data example
        projectFilesContext.SetData("companyName", PlayerSettings.companyName);        // Add the Android manifest file to the outputs
        projectFilesContext.Outputs.AddManifestFile(_myLibAndroidManifest);        return projectFilesContext;
    }    //  Modify the Android project files
    public override void OnModifyAndroidProjectFiles(AndroidProjectFiles projectFiles)
    {
        // GetData example
        var companyName = projectFiles.GetData("companyName");
        Debug.Log($"Modifying Gradle files for {companyName}");        // Create metadata for the company name
        var companyMeta = new MetaData();
        companyMeta.Attributes.Name.Set("Company Name:");
        companyMeta.Attributes.Value.Set(companyName);        // Create Android manifest file and add metadata
        var androidManifest = new AndroidManifestFile();
        androidManifest.Manifest.Application.MetaDataList.AddElement(companyMeta);        // Set the manifest file
        projectFiles.SetManifestFile(_myLibAndroidManifest, androidManifest);
    }
}
```


            
