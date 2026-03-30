This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).InsertCopyFilesBuildPhase




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

public string InsertCopyFilesBuildPhase(int index,
string targetGuid,
string name,
string dstPath,
string subfolderSpec);






### Parameters



| Parameter | Description |
| --- | --- |
| index | The position at which to insert the new build phase. If it's higher than the total number of build phases, the new phase is added at the end. |
| targetGuid | The GUID of the target, such as the one returned by TargetGuidByName. |
| name | The name of the phase. |
| dstPath | The shell path. |
| subfolderSpec | The subfolder spec. The following usages are known:
10 for embedding frameworks.13 for embedding app extension content.16 for embedding watch content. |





### Returns



**string**
        Returns the GUID of the new phase.





### Description



Creates a new copy files build phase for a given target.





The build phase is inserted at the specified position. You can query all the defined build phases using [GetAllBuildPhasesForTarget](iOS.Xcode.PBXProject.GetAllBuildPhasesForTarget.html).


              


```
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_InsertCopyFilesBuildPhase
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get main target GUID
        string mainTargetGuid = pbxProject.GetUnityMainTargetGuid();        // Insert a Copy Files Build Phase to the main target as first custom build phase (index 0)
        pbxProject.InsertCopyFilesBuildPhase(0, mainTargetGuid, "ExamplePhase", "path/to/file", "10");        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
