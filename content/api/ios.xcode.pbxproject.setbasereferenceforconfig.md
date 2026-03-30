This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).SetBaseReferenceForConfig




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

public void SetBaseReferenceForConfig(string configGuid,
string baseReference);






### Parameters



| Parameter | Description |
| --- | --- |
| configGuid | The GUID of the build configuration as returned by BuildConfigByName. |
| baseReference | The GUID of the configuration file to be used as the base reference. |





### Description



Sets the base configuration reference for the specified build configuration.





**Note**: If the baseReference parameter is null, the base reference is removed.


              


```
using UnityEngine;
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_SetBaseReferenceForConfig
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);

        // Get the target GUID
        string mainTargetGuid = pbxProject.GetUnityMainTargetGuid();        // Retrieve the configuration name (this can be "Debug", "Release", or any custom configuration name)
        string configName = "Release";        // Get the "Release" build configuration GUID
        string configGuid = pbxProject.BuildConfigByName(mainTargetGuid, configName);

        // Add the file you will be using as base reference for the "Release" configuration
        // This example expects you having a "release.xcconfig" file in your project's "Assets/Resources/" directory
        string filePath = Path.Combine(Application.dataPath, "Resources/release.xcconfig");
        string file = pbxProject.AddFile(filePath, "Configs/release.xcconfig", PBXSourceTree.Source);

        // Set the base configuration file using SetBaseReferenceForConfig
        pbxProject.SetBaseReferenceForConfig(configGuid, file);

        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
