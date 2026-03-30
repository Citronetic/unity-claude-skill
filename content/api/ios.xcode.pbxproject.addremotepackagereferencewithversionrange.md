This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).AddRemotePackageReferenceWithVersionRange




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

public string AddRemotePackageReferenceWithVersionRange(string url,
string minVersion,
string maxVersion);






### Parameters



| Parameter | Description |
| --- | --- |
| url | The URL of the repository. |
| minVersion | The minimum version to allow updates from. |
| maxVersion | The maximum version to allow updates to. |





### Returns



**string**
        Returns the GUID of the remote package reference.





### Description



Adds a reference to the remote package and allows updates in the given version range.


              


```
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_AddRemotePackageReferenceWithVersionRange
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get the GUID you want to add the package to
        string mainTargetGuid = pbxProject.GetUnityMainTargetGuid();        // Get the GUID of the Remote Package using the URL, minimum and maximum allowed versions
        string packageGuid = pbxProject.AddRemotePackageReferenceWithVersionRange("https://github.com/apple/swift-system.git", "1.2.0", "1.3.0");        // Add the package to the Xcode project
        pbxProject.AddRemotePackageFrameworkToProject(pbxProject.GetUnityMainTargetGuid(), "SystemPackage", packageGuid, false);        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
