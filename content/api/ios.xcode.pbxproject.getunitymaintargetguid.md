This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).GetUnityMainTargetGuid




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

public string GetUnityMainTargetGuid();






### Returns



**string**
        The GUID for the main target.





### Description



Returns the GUID of the main target in Unity project.





Returns the GUID of the main target. This target includes everything except source code, plugins, dependent frameworks, and source compile and link build options. To retreive the full framework, use [GetUnityFrameworkTargetGuid](iOS.Xcode.PBXProject.GetUnityFrameworkTargetGuid.html).


              


```
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_GetUnityMainTargetGuid
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get the GUID for the main target
        string mainTargetGuid = pbxProject.GetUnityMainTargetGuid();        // The mainTargetGuid can be later used to specify where to apply changes when manipulating the pbxproj file
        pbxProject.AddFrameworkToProject(mainTargetGuid, "Security.framework", false);
        pbxProject.SetBuildProperty(mainTargetGuid, "ENABLE_BITCODE", "NO");        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }}
```


            
