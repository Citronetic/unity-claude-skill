This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).UpdateBuildProperty




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

public void UpdateBuildProperty(string targetGuid,
string name,
IEnumerable<string> addValues,
IEnumerable<string> removeValues);






## Declaration

public void UpdateBuildProperty(IEnumerable<string> targetGuids,
string name,
IEnumerable<string> addValues,
IEnumerable<string> removeValues);






### Parameters



| Parameter | Description |
| --- | --- |
| targetGuid | The target GUID as returned by NativeTargetByName. |
| targetGuids | An array of target GUIDs. |
| name | The name of the build property. |
| addValues | The values to add to the build property. |
| removeValues | The values to remove from the build property. |





### Description



Adds and removes values from a build property in all build configurations for the specified target(s).


              


```
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_UpdateBuildProperty
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get the target GUID
        string mainTargetGuid = pbxProject.GetUnityMainTargetGuid();        // Set up which property you will want to update, what values you want to add and what values you want to remove
        string propertyName = "ON_DEMAND_RESOURCES_INITIAL_INSTALL_TAGS";
        string[] newTags = new string[] { "newTag1", "newTag2", "newTag3"};
        string[] oldTags = new string[] { "oldTag1", "oldTag2", "oldTag3"};        // Update the property using the UpdateBuildPropery function
        pbxProject.UpdateBuildProperty(mainTargetGuid, propertyName, newTags, oldTags);

        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
