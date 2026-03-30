This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).AddFrameworksBuildPhase




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

public string AddFrameworksBuildPhase(string targetGuid);






### Parameters



| Parameter | Description |
| --- | --- |
| targetGuid | The GUID of the target, such as the one returned by TargetGuidByName. |





### Returns



**string**
        Returns the GUID of the new phase.





### Description



Creates a new frameworks build phase for given target.





If the frameworks build phase is already configured for the target, the function returns the existing phase.

The new phase is placed at the end of the list of build phases configured for the target.


              


```
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_AddFrameworksBuildPhase
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get GUID of the target you want to add the Framework Build Phase to
        string mainTargetGuid = pbxProject.GetUnityMainTargetGuid();        // Add the Framework Build Phase. Note that if this phase already exists, the function doesn't create a new one and returns GUID to the existing phase
        pbxProject.AddFrameworksBuildPhase(mainTargetGuid);        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
