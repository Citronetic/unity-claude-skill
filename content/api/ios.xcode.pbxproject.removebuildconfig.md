This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).RemoveBuildConfig




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

public void RemoveBuildConfig(string name);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The name of the build configuration. |





### Description



Removes all build configurations with the given name from all targets in the project.





The number and names of the build configurations is a project-wide setting. Each target has the same number of build configurations and the names of these build configurations is the same. The function does nothing if the build configuration with the specified name does not exist.


              


```
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;
using Unity.VisualScripting;public class Sample_RemoveBuildConfig
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Remove the configuration name from all targets
        // This can be any custom configuration as well as default Unity configurations such as "Debug", "Release", etc.
        pbxProject.RemoveBuildConfig("ConfigName");

        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
