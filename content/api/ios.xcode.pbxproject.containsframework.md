This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).ContainsFramework




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

public bool ContainsFramework(string targetGuid,
string framework);






### Parameters



| Parameter | Description |
| --- | --- |
| targetGuid | The GUID of the target, such as the one returned by TargetGuidByName. |
| framework | The name of the framework. The extension of the filename must be .framework. |





### Returns



**bool**
        Returns true if the given framework is a dependency of the given target.





### Description



Checks whether the given system framework is a dependency of a target.





The function assumes system frameworks are located in `System/Library/Frameworks` in the SDK source tree.


              


```
using UnityEngine;
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_ContainsFramework
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get GUID for Main target
        string mainTargetGuid = pbxProject.GetUnityMainTargetGuid();        // Check if the target contains the specified framework as a dependency
        string frameworkName = "ExampleFramework.framework";
        if (pbxProject.ContainsFramework(mainTargetGuid, frameworkName))
        {
            Debug.Log("Framework " + frameworkName + " was found.");
            // Continue your logic
        }
        else
        {
            Debug.Log("Framework " + frameworkName + " was not found.");
        }        // If any changes were made to the PBXProject instance, apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
