This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).SetBuildPropertyForConfig




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

public void SetBuildPropertyForConfig(string configGuid,
string name,
string value);






## Declaration

public void SetBuildPropertyForConfig(IEnumerable<string> configGuids,
string name,
string value);






### Parameters



| Parameter | Description |
| --- | --- |
| configGuid | The GUID of the build configuration as returned by BuildConfigByName. |
| configGuids | The GUIDs of the build configurations as returned by BuildConfigByName. |
| name | The name of the build property. |
| value | The value of the build property. |





### Description



Sets a build property to the given value in the specified build configuration(s).





Duplicate build properties are ignored. Values for names `LIBRARY_SEARCH_PATHS` and `FRAMEWORK_SEARCH_PATHS` are quoted if they contain spaces.


              


```
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_SetBuildPropertyForConfig
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get the GUID you want to set a build property on
        string unityFrameworkTargetGuid = pbxProject.GetUnityFrameworkTargetGuid();        // Get the GUID of the "Debug" config so you can use it to change config-specific settings
        string configGuid = pbxProject.BuildConfigByName(unityFrameworkTargetGuid, "Debug");        // Set "ENABLE_BITCODE" to "NO" for "Debug" config
        pbxProject.SetBuildPropertyForConfig(configGuid, "ENABLE_BITCODE", "NO");        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
