This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).GetBuildPhaseType




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

public string GetBuildPhaseType(string phaseGuid);






### Parameters



| Parameter | Description |
| --- | --- |
| phaseGuid | GUID of the phase. |





### Returns



**string**
        The type of the build phase.





### Description



Returns the type of the build phase with the specified GUID.





The defined build phase types are `PBXSourcesBuildPhase`, `PBXFrameworksBuildPhase`, `PBXResourcesBuildPhase`, `PBXCopyFilesBuildPhase`, and `PBXShellScriptBuildPhase`.


              


```
using UnityEngine;
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_GetBuildPhaseType
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get the GUID of the target you want
        string mainTargetGuid = pbxProject.GetUnityMainTargetGuid();        // Retrieve the GUIDs of all Build Phases for the target and print their types to the Console
        string[] buildPhases = pbxProject.GetAllBuildPhasesForTarget(mainTargetGuid);
        foreach (string phaseGuid in buildPhases)
        {
            string phaseType = pbxProject.GetBuildPhaseType(phaseGuid);
            Debug.Log($"Type: {phaseType}");
        }
    }
}
```


            
