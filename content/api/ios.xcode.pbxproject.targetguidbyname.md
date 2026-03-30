This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).TargetGuidByName




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

public string TargetGuidByName(string name);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The name of the native target. |





### Returns



**string**
        The GUID identifying the native target.





### Description



Returns the GUID of the native target with the given name.





**Note**: To retrieve a GUID for a Unity generated target, use [GetUnityMainTargetGuid](iOS.Xcode.PBXProject.GetUnityMainTargetGuid.html) or [GetUnityFrameworkTargetGuid](iOS.Xcode.PBXProject.GetUnityFrameworkTargetGuid.html)


              


```
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_TargetGuidByName
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get GUID for the UnityFramework using it's name
        string unityFrameworkGuid = pbxProject.TargetGuidByName("UnityFramework");        // The unityFrameworkGuid can be later used to specify UnityFramework as the target when manipulating the pbxproj file
        pbxProject.AddFrameworkToProject(unityFrameworkGuid, "Security.framework", false);
        pbxProject.SetBuildProperty(unityFrameworkGuid, "ENABLE_BITCODE", "NO");        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
