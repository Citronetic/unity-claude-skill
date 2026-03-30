This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).ReadFromString




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

public void ReadFromString(string src);






### Parameters



| Parameter | Description |
| --- | --- |
| src | The project contents. |





### Description



Reads the project from the given string.





Current contents of the project are discarded.


              


```
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_ReadFromString
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);

        // Read the project.pbxproj file into a string
        string pbxProjectContent = File.ReadAllText(projectPath);        // Create a PBXProject object and read from the string
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromString(pbxProjectContent);        // Get the target GUID you want to make modifications on
        string mainTargetGuid = pbxProject.GetUnityMainTargetGuid();        // Modify the project, such as adding a build propety
        pbxProject.AddBuildProperty(mainTargetGuid, "exampleProperty", "exampleValue");

        // Convert the modified project back to a string
        string updatedPbxProjectContent = pbxProject.WriteToString();        // Save the updated project string back to the project.pbxproj file
        File.WriteAllText(projectPath, updatedPbxProjectContent);
    }
}
```


            
