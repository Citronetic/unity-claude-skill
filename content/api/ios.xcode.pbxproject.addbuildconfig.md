This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).AddBuildConfig




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

public void AddBuildConfig(string name);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The name of the build configuration. |





### Description



Creates a new set of build configurations for all targets in the project.





The number and names of the build configurations is a project-wide setting. Each target has the same number of build configurations and the names of these build configurations is the same. The created configurations are initially empty. Care must be taken to fill them with reasonable defaults. The function throws an exception if a build configuration with the given name already exists.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.iOS.Xcode;
using UnityEditor.Callbacks;
using System.IO;public class Sample_AddBuildConfig
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get GUID for the Main target
        string mainTargetGuid = pbxProject.GetUnityMainTargetGuid();        // Add the Build Config with a given name
        string configName = "exampleConfig";
        pbxProject.AddBuildConfig(configName);        // Get the GUID for the config and modify it
        string configGuid = pbxProject.BuildConfigByName(mainTargetGuid, configName);
        pbxProject.AddBuildPropertyForConfig(configGuid, "exampleProperty", "exampleValue");        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
