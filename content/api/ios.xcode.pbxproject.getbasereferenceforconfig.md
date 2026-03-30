This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).GetBaseReferenceForConfig




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

public string GetBaseReferenceForConfig(string configGuid);






### Parameters



| Parameter | Description |
| --- | --- |
| configGuid | The GUID of the build configuration as returned by BuildConfigByName. |





### Returns



**string**
        The GUID of the configuration file being used as the base reference.





### Description



Gets the base configuration reference GUID for the specified build configuration.


              


```
using UnityEngine;
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_GetBaseReferenceForConfig
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);

        // Get the main target GUID
        string mainTargetGuid = pbxProject.GetUnityMainTargetGuid();        // Retrieve the configuration name (this can be "Debug", "Release", or any custom configuration name)
        string configName = "Debug";        // Get the "Debug" build configuration GUID
        string configGuid = pbxProject.BuildConfigByName(mainTargetGuid, configName);

        // Use GetBaseReferenceForConfig to get the base reference for the specified configuration
        string baseReference = pbxProject.GetBaseReferenceForConfig(configGuid);        // Check if baseReference for specified configuration was found
        if (string.IsNullOrEmpty(baseReference))
        {
            Debug.LogError("Unable to find base reference for build configuration: " + configName);
            return;
        }
        else
        {
            // Modify the project using baseReference here
            // In this example we just print the baseReference for "Debug" config in Console
            Debug.Log($"Base reference for {configName} configuration is: {baseReference}");
        }

        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
