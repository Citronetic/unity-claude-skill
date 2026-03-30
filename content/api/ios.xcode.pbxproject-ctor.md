This version of Unity is unsupported.



# PBXProject Constructor




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

public PBXProject();






### Description



Creates a new instance of PBXProject class.


              


```
using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;
using UnityEditor;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_PBXProject
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {
        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Perform any modifications you want to the PBXProject        // Get the target GUID
        string mainTargetGuid = pbxProject.GetUnityMainTargetGuid();        // Add a new build configuration and add a new property to it
        string configName = "exampleConfig";
        pbxProject.AddBuildConfig(configName);
        string configGuid = pbxProject.BuildConfigByName(mainTargetGuid, configName);
        pbxProject.AddBuildPropertyForConfig(configGuid, "exampleProperty", "exampleValue");        // Add a new file to project and to build list
        string filePath = Path.Combine(Application.dataPath, "Resources/InputFile.txt");
        string fileGuid = pbxProject.AddFile(filePath, "Resources/InputFile.txt");
        pbxProject.AddFileToBuild(mainTargetGuid, fileGuid);        // Add frameworks to the project
        pbxProject.AddFrameworkToProject(mainTargetGuid, "CoreBluetooth.framework", false);
        pbxProject.AddFrameworkToProject(mainTargetGuid, "MapKit.framework", true);        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }}
```


            
