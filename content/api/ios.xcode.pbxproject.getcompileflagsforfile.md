This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).GetCompileFlagsForFile




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

public List<string> GetCompileFlagsForFile(string targetGuid,
string fileGuid);






### Parameters



| Parameter | Description |
| --- | --- |
| targetGuid | The GUID of the target, such as the one returned by TargetGuidByName. |
| fileGuid | The GUID of the file. |





### Returns



**List<string>**
        The compile flags for the specified file.





### Description



Returns compile flags set for the specific file on a given target.





Null is returned if the file has no configured compile flags or the file is not configured for building on the given target.


              


```
using UnityEditor;
using System.Collections.Generic;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;
using System;public class Sample_GetCompileFlagsForFile
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get the target GUID
        string targetGuid = pbxProject.GetUnityFrameworkTargetGuid();        // Specify the file path you want to get compile flags of (within the Xcode project)
        string filePath = "Plugins/ExampleFile.mm";        // Retrieve the file GUID using the file path
        string fileGuid = pbxProject.FindFileGuidByProjectPath(filePath);        // Get the compile flags for the specified file
        string[] compileFlags = pbxProject.GetCompileFlagsForFile(targetGuid, fileGuid).ToArray();

        // Check if the file already has a compile flag you want to specify
        string customCompileFlag = "exampleFlag";
        if (Array.IndexOf(compileFlags, customCompileFlag) <  0)
        {
            // Add the compile flag if it doesn't
            pbxProject.SetCompileFlagsForFile(targetGuid, fileGuid, new List<string> (){customCompileFlag});
        }        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
