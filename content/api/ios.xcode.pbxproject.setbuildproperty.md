This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).SetBuildProperty




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

public void SetBuildProperty(string targetGuid,
string name,
string value);






## Declaration

public void SetBuildProperty(IEnumerable<string> targetGuids,
string name,
string value);






### Parameters



| Parameter | Description |
| --- | --- |
| targetGuid | The GUID of the target, such as the one returned by GetUnityFrameworkTargetGuid. |
| targetGuids | The GUIDs of the targets, such as the one returned by GetUnityFrameworkTargetGuid. |
| name | The name of the build property. For more information on build properties, refer to Build settings reference (Apple Developer). |
| value | The value of the build property. |





### Description



Sets a build property to the given value in all build configurations for the specified target(s).





Values for names `LIBRARY_SEARCH_PATHS` and `FRAMEWORK_SEARCH_PATHS` are quoted if they contain spaces.


              


```
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_SetBuildProperty
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get the GUID that you want to set a build property on
        string unityFrameworkTargetGuid = pbxProject.GetUnityFrameworkTargetGuid();        // Set "ENABLE_BITCODE" to "NO" for UnityFramework target
        pbxProject.SetBuildProperty(unityFrameworkTargetGuid, "ENABLE_BITCODE", "NO");        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
