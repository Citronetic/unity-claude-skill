This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).AddShellScriptBuildPhaseBeforeTargetPostprocess




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

public string AddShellScriptBuildPhaseBeforeTargetPostprocess(string targetGuid,
string name,
string shellPath,
string shellScript);






### Parameters



| Parameter | Description |
| --- | --- |
| targetGuid | The GUID of the target, such as the one returned by TargetGuidByName. |
| name | The name of the phase. |
| shellPath | The shell path. |
| shellScript | The shell script. |





### Returns



**string**
        Returns the GUID of the new phase.





### Description



Creates a new copy shell script phase for a given target.





If a shell script build phase with the same name, `shellPath`, and `shellScript` is already configured for the target, the function returns the existing phase. The new phase is placed right before Unity's post-process placeholder target, if it exists.




---








## Declaration

public string AddShellScriptBuildPhaseBeforeTargetPostprocess(string targetGuid,
string name,
string shellPath,
string shellScript,
List<string> inputPaths);






### Parameters



| Parameter | Description |
| --- | --- |
| targetGuid | The GUID of the target, such as the one returned by TargetGuidByName. |
| name | The name of the phase. |
| shellPath | The shell path. |
| shellScript | The shell script. |
| inputPaths | The shell script input dependencies. |





### Returns



**string**
        Returns the GUID of the new phase.





### Description



Creates a new copy shell script phase for a given target.





If a shell script build phase with the same name, `shellPath`, `shellScript`, and `inputPaths` is already configured for the target, the function returns the existing phase. The new phase is placed right before Unity's post-process placeholder target, if it exists.


              


```
using UnityEditor;
using System.Collections.Generic;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_AddShellScriptBuildPhaseBeforeTargetPostprocess
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get GUID of the target you want to add the Shell Script Phase to
        string mainTargetGuid = pbxProject.GetUnityMainTargetGuid();        // Add the Shell Script Phase to that target
        pbxProject.AddShellScriptBuildPhaseBeforeTargetPostprocess(mainTargetGuid, "exampleScript1", "", "echo exampleCommand1");        // Optionally, you can add the Phase with Input Files listed
        pbxProject.AddShellScriptBuildPhaseBeforeTargetPostprocess(mainTargetGuid, "exampleScript2", "", "echo exampleCommand2", new List<string>() { "InputFile1" });        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
