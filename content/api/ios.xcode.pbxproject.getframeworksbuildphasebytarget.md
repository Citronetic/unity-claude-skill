This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).GetFrameworksBuildPhaseByTarget




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

public string GetFrameworksBuildPhaseByTarget(string targetGuid);






### Parameters



| Parameter | Description |
| --- | --- |
| targetGuid | The GUID of the target, such as one returned by TargetGuidByName. |





### Returns



**string**
        Returns the GUID of the existing phase or `null` if it does not exist.





### Description



Returns the GUID of frameworks build phase for the given target.


              


```
using UnityEngine;
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_GetFrameworksBuildPhaseByTarget
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {
        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get the target GUID
        string targetGuid = pbxProject.GetUnityMainTargetGuid();        // Get the "Frameworks Build" build phase GUID
        string frameworkBuildPhase = pbxProject.GetFrameworksBuildPhaseByTarget(targetGuid);        // Log the "Embed Frameworks" build phase GUID for debugging
        Debug.Log("'Frameworks Build' phase GUID: " + frameworkBuildPhase);
    }
}
```


            
