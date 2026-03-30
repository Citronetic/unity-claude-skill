This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).GetBuildPhaseName




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

public string GetBuildPhaseName(string phaseGuid);






### Parameters



| Parameter | Description |
| --- | --- |
| phaseGuid | GUID of the phase. |





### Returns



**string**
        The build phase name if it's defined.





### Description



Returns the name of the build phase with the specified GUID.





For shell script and copy file build phases, the name is returned. For all the other phases, the type is returned. This is the same behavior as [GetBuildPhaseType](iOS.Xcode.PBXProject.GetBuildPhaseType.html). If a phase with the given GUID isn't available, Null is returned.


              


```
using UnityEngine;
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_GetBuildPhaseName
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get the GUID of the target you want
        string mainTargetGuid = pbxProject.GetUnityMainTargetGuid();        // Retrieve the GUIDs of all Build Phases for the target and print their names to the Console
        string[] buildPhases = pbxProject.GetAllBuildPhasesForTarget(mainTargetGuid);
        foreach (string phaseGuid in buildPhases)
        {
            string phaseName = pbxProject.GetBuildPhaseName(phaseGuid);
            Debug.Log($"Name: {phaseName}");
        }
    }
}
```


            
