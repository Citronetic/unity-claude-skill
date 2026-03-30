This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).AddPublicHeaderToBuild




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

public void AddPublicHeaderToBuild(string targetGuid,
string fileGuid);






### Parameters



| Parameter | Description |
| --- | --- |
| targetGuid | The GUID of the target, such as the one returned by TargetGuidByName. |
| fileGuid | The file GUID returned by AddFile or AddFolderReference. |





### Description



Configures a file for building for the given native target as a public header.





In projects containing multiple native targets, you can configure a file to build in all, some, or, none of the targets. The file reference is added to appropriate build section.


              


```
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_AddPublicHeaderToBuild
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get the GUID of the target you want to add the Headers Build Phase to
        string mainTargetGuid = pbxProject.GetUnityMainTargetGuid();        // Add Headers Build Phase
        pbxProject.AddHeadersBuildPhase(mainTargetGuid);        // Add the header file to the project and add it to Public Headers Build Phase
        string headerGuid = pbxProject.AddFile("exampleHeader.h", "Headers/exampleHeader.h", PBXSourceTree.Source);
        pbxProject.AddPublicHeaderToBuild(mainTargetGuid, headerGuid);        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
