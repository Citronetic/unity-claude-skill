This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).AddBuildPropertyForConfig




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

public void AddBuildPropertyForConfig(string configGuid,
string name,
string value);






## Declaration

public void AddBuildPropertyForConfig(IEnumerable<string> configGuids,
string name,
string value);






### Parameters



| Parameter | Description |
| --- | --- |
| configGuid | The GUID of the build configuration as returned by BuildConfigByName. |
| configGuids | An array of GUIDs of build configurations. |
| name | The name of the build property. |
| value | The value of the build property. |





### Description



Adds a value to build property list of the given build configuration(s).





Duplicate build properties are ignored. Values for names `LIBRARY_SEARCH_PATHS` and `FRAMEWORK_SEARCH_PATHS` are quoted if they contain spaces.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.iOS.Xcode;
using UnityEditor.Callbacks;
using System.IO;public class Sample_AddBuildPropertyForConfig
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get GUID for Main target
        string mainTargetGuid = pbxProject.GetUnityMainTargetGuid();        // Add the Build Config with a given name
        string configName = "exampleConfig";
        pbxProject.AddBuildConfig(configName);        // Get the GUID for the newly created config
        string configGuid = pbxProject.BuildConfigByName(mainTargetGuid, configName);        // Add a Build Property to the "exampleConfig"
        pbxProject.AddBuildPropertyForConfig(configGuid, "exampleProperty", "exampleValue");        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
