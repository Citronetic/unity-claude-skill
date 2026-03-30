This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).GetUnityTestTargetName




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

public static string GetUnityTestTargetName();






### Returns



**string**
        The default test target name.





### Description



Returns the default test target name.





Use the returned target name to retrieve the GUID of the target via [TargetGuidByName](iOS.Xcode.PBXProject.TargetGuidByName.html).

**Note**: This function can only be used in Unity-generated projects.


              


```
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_GetUnityTestTargetName
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get the Test target name
        string testTargetName = PBXProject.GetUnityTestTargetName();        // Use the name to get Test target GUID
        string testTargetGuid = pbxProject.TargetGuidByName(testTargetName);        // The test target GUID can be later used manipulating the pbxproj file
        pbxProject.AddFrameworkToProject(testTargetGuid, "Security.framework", false);
        pbxProject.SetBuildProperty(testTargetGuid, "ENABLE_BITCODE", "NO");

        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
