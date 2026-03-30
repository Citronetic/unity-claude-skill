This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).AddTargetDependency




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

public void AddTargetDependency(string targetGuid,
string targetDependencyGuid);






## Declaration

public void AddTargetDependency(string targetGuid,
string targetDependencyGuid,
string dependencyName);






### Parameters



| Parameter | Description |
| --- | --- |
| targetGuid | The GUID of the target to which you are adding a dependency. |
| targetDependencyGuid | The GUID of the dependency target. |
| dependencyName | The name of the dependency target. |





### Description



Creates a dependency between this target and another target. The other target may be in a different project.


              


```
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_AddTargetDependency
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get GUIDs of the two targets you want to set up dependency between
        string mainTargetGuid = pbxProject.GetUnityMainTargetGuid();
        string newTargetGuid = pbxProject.AddTarget("ExampleTarget", "app", "example.type");        // Add the Target dependency
        pbxProject.AddTargetDependency(mainTargetGuid, newTargetGuid);        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
