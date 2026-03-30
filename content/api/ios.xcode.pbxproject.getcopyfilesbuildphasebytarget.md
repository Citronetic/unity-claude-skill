This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).GetCopyFilesBuildPhaseByTarget




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

public string GetCopyFilesBuildPhaseByTarget(string targetGuid,
string name,
string dstPath,
string subfolderSpec);






### Parameters



| Parameter | Description |
| --- | --- |
| targetGuid | The GUID of the target, such as the one returned by TargetGuidByName. |
| name | The name of the phase. |
| dstPath | The destination path. |
| subfolderSpec | The subfolder spec. The following usages are known:
10 for embedding frameworks.13 for embedding app extension content.16 for embedding watch content. |





### Returns



**string**
        Returns the GUID of the matching phase or null if it does not exist.





### Description



Returns the GUID of matching copy files build phase for the given target.





The parameters of existing copy files build phase are matched to the arguments of this function and the GUID of the phase is returned only if a matching build phase is found.


              


```
using UnityEngine;
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;
using UnityEditor.iOS.Xcode.Extensions;public class Sample_GetCopyFilesBuildPhaseByTarget
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get the target GUID
        string targetGuid = pbxProject.GetUnityMainTargetGuid();        // Get the "Embed Frameworks" build phase GUID
        string copyFilesPhase = pbxProject.GetCopyFilesBuildPhaseByTarget(targetGuid, "Embed Frameworks", "", "10");        // Log the "Embed Frameworks" build phase GUID for debugging
        Debug.Log("Copy 'Embed Frameworks' phase GUID: " + copyFilesPhase);
    }
}
```


            
