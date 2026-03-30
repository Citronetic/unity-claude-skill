This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).ContainsFileByProjectPath




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

public bool ContainsFileByProjectPath(string path);






### Parameters



| Parameter | Description |
| --- | --- |
| path | The project path of the file. |





### Returns



**bool**
        Returns true if the project contains the file.





### Description



Checks if the project contains a file with the given project path.


              


```
using UnityEngine;
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_ContainsFileByProjectPath
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        string fileToSearch = "Path/To/File/ExamplePlugin.mm";        // Check if the project contains a file by using a path relative to the Xcode project structure
        if (pbxProject.ContainsFileByProjectPath(fileToSearch))
        {
            Debug.Log("File " + fileToSearch + " was found.");
            // Continue your logic
        }
        else
        {
            Debug.Log("File " + fileToSearch + " was not found.");
        }        // If any changes were made to the PBXProject instance, apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
