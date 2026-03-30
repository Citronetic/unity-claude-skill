This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).GetPBXProjectPath




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

public static string GetPBXProjectPath(string buildPath);






### Parameters



| Parameter | Description |
| --- | --- |
| buildPath | The project build path. |





### Returns



**string**
        The path to the PBX project file. This path can be opened later using the [ReadFromFile](iOS.Xcode.PBXProject.ReadFromFile.html) function.





### Description



Returns the path to PBX project in the given Unity build path.





This function can only be used for Unity-generated projects.

**Note:** On VisionOS and macOS platforms this will return `BUILDPATH/Unity-iPhone.xcodeproj/project.pbxproj`, which isn't correct. Its not recommended to use this method when developing for visionOS or macOS.


              


```
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_GetPBXProjectPath
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject by using GetPBXProjectPath to create PBXProject object
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get the GUID for the UnityFramework using it's name
        string unityFrameworkGuid = pbxProject.TargetGuidByName("UnityFramework");        // The unityFrameworkGuid can be used later to specify the UnityFramework as the target when manipulating the pbxproj file
        pbxProject.AddFrameworkToProject(unityFrameworkGuid, "Security.framework", false);
        pbxProject.SetBuildProperty(unityFrameworkGuid, "ENABLE_BITCODE", "NO");

        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
