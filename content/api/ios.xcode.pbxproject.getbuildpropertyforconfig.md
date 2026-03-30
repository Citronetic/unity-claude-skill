This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).GetBuildPropertyForConfig




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

public string GetBuildPropertyForConfig(string configGuid,
string name);






### Parameters



| Parameter | Description |
| --- | --- |
| configGuid | The GUID of the build configuration as returned by BuildConfigByName. |
| name | The name of the build property. |





### Returns



**string**
        The specified build property value.





### Description



Gets a build property value for the given name in the specified build configuration(s). If a property has multiple values they are delimited by a space.





Duplicate build properties are ignored. Values for names `LIBRARY_SEARCH_PATHS` and `FRAMEWORK_SEARCH_PATHS` are quoted if they contain spaces.


              


```
using UnityEngine;
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_GetBuildPropertyForConfig
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get GUID for main target
        string mainTargetGuid = pbxProject.GetUnityMainTargetGuid();        // Get "Architecture" property for "Debug" configuration in main target
        string configGuid = pbxProject.BuildConfigByName(mainTargetGuid, "Debug");
        string architectures = pbxProject.GetBuildPropertyForConfig(configGuid, "ARCHS");
        Debug.Log("architectures: " + architectures);
    }
}
```


            
