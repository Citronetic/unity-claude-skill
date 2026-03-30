This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).GetBuildPropertyForAnyConfig




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

public string GetBuildPropertyForAnyConfig(IEnumerable<string> targetGuids,
string name);






## Declaration

public string GetBuildPropertyForAnyConfig(string targetGuid,
string name);






### Parameters



| Parameter | Description |
| --- | --- |
| targetGuid | The GUID of the target, such as one returned by TargetGuidByName. |
| targetGuids | The GUID of the targets, such as the one returned by TargetGuidByName. |
| name | The name of the build property. |





### Returns



**string**
        The specified build property value.





### Description



Gets a build property value for the given name in all the build configurations for the specified target(s). If a property has multiple values, those are delimited by a space.





Values for names `LIBRARY_SEARCH_PATHS` and `FRAMEWORK_SEARCH_PATHS` are quoted if they contain spaces.


              


```
using UnityEngine;
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_GetBuildPropertyForAnyConfig
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get the GUID for main target
        string mainTargetGuid = pbxProject.GetUnityMainTargetGuid();        // Get `Minimum iOS version` property for any configuration in main target
        string minVersion = pbxProject.GetBuildPropertyForAnyConfig(mainTargetGuid, "IPHONEOS_DEPLOYMENT_TARGET");
        Debug.Log("minVersion: " + minVersion);
    }
}
```


            
