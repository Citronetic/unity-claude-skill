This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).ProjectGuid




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

public string ProjectGuid();






### Returns



**string**
        The GUID of the project.





### Description



Returns the GUID of the project.





The project GUID identifies a project-wide native target which is used to set project-wide properties. This GUID can be passed to any functions that accepts target GUIDs as parameters.


              


```
using UnityEngine;
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_ProjectGuid
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get the project GUID
        string projectGuid = pbxProject.ProjectGuid();        // Log the project GUID for debugging
        Debug.Log("Project GUID: " + projectGuid);

        // Use the GUID to make project-wide changes such as adding properties
        pbxProject.AddBuildProperty(projectGuid, "exampleProperty", "exampleValue");        // Apply changes to the pbxproj file if there were any
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
