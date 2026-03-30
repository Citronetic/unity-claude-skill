This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).RemoveFrameworkFromProject




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

public void RemoveFrameworkFromProject(string targetGuid,
string framework);






### Parameters



| Parameter | Description |
| --- | --- |
| targetGuid | The GUID of the target, such as the one returned by TargetGuidByName. |
| framework | The name of the framework. The extension of the filename must be .framework. |





### Description



Removes a system framework dependency for the specified target.





The function assumes system frameworks are located in the `System/Library/Frameworks` folder in the SDK source tree.


              


```
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_RemoveFrameworkFromProject
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get the target GUID
        string unityFrameworkTargetGuid = pbxProject.GetUnityFrameworkTargetGuid();        // Remove a framework from UnityFramework target
        pbxProject.RemoveFrameworkFromProject(unityFrameworkTargetGuid, "CoreMedia.framework");        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
