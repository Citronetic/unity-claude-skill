This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).GetResourcesBuildPhaseByTarget




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

public string GetResourcesBuildPhaseByTarget(string targetGuid);






### Parameters



| Parameter | Description |
| --- | --- |
| targetGuid | The GUID of the target, such as the one returned by TargetGuidByName. |





### Returns



**string**
        Returns the GUID of the existing phase or `null` if it does not exist.





### Description



Returns the GUID of resources build phase for the given target.


              


```
using UnityEngine;
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_GetResourcesBuildPhaseByTarget
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get the target GUID
        string targetGuid = pbxProject.GetUnityMainTargetGuid();        // Get the "Resources Build" build phase GUID
        string resourcesBuildPhase = pbxProject.GetResourcesBuildPhaseByTarget(targetGuid);        // Log the "Resources Build" phase GUID for debugging
        Debug.Log("'Resources Build' phase GUID: " + resourcesBuildPhase);
    }
}
```


            
