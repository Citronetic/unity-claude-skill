This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).InsertShellScriptBuildPhase




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

public string InsertShellScriptBuildPhase(int index,
string targetGuid,
string name,
string shellPath,
string shellScript);






### Parameters



| Parameter | Description |
| --- | --- |
| index | The position at which to insert the new build phase. If it's higher than the total number of build phases, the new phase is added at the end. |
| targetGuid | The GUID of the target, such as the one returned by TargetGuidByName. |
| name | The name of the phase. |
| shellPath | The shell path. |
| shellScript | The shell script. |





### Returns



**string**
        Returns the GUID of the new phase.





### Description



Creates a new shell script build phase for a given target.





The build phase is inserted at the specified position. You can query all the defined build phases using [GetAllBuildPhasesForTarget](iOS.Xcode.PBXProject.GetAllBuildPhasesForTarget.html).


              


```
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_InsertShellScriptBuildPhase
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get GUID of the target you want to add the Shell Script Phase to
        string mainTargetGuid = pbxProject.GetUnityMainTargetGuid();        // Add the Shell Script Phase to that target as first custom Shell Script phase (index 0)
        pbxProject.InsertShellScriptBuildPhase(0, mainTargetGuid, "exampleScript1", "", "echo exampleCommand1");        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```




---








## Declaration

public string InsertShellScriptBuildPhase(int index,
string targetGuid,
string name,
string shellPath,
string shellScript,
List<string> inputPaths);






### Parameters



| Parameter | Description |
| --- | --- |
| index | The position at which to insert the new build phase. If it's higher than the total number of build phases, the new phase is added at the end. |
| targetGuid | The GUID of the target, such as the one returned by TargetGuidByName. |
| name | The name of the phase. |
| shellPath | The shell path. |
| shellScript | The shell script. |
| inputPaths | The shell script input dependencies. |





### Returns



**string**
        Returns the GUID of the new phase.





### Description



Creates a new shell script build phase for a given target.





The build phase is inserted at the specified position. You can query all the defined build phases using [GetAllBuildPhasesForTarget](iOS.Xcode.PBXProject.GetAllBuildPhasesForTarget.html).


            
