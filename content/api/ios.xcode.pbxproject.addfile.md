This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).AddFile




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

public string AddFile(string path,
string projectPath,
[iOS.Xcode.PBXSourceTree](iOS.Xcode.PBXSourceTree.html) sourceTree);






### Parameters



| Parameter | Description |
| --- | --- |
| path | The physical path to the file on the filesystem. |
| projectPath | The project path to the file as viewed in Xcode. |
| sourceTree | The source tree the path is relative to. By default it's PBXSourceTree.Source. Note:  PBXSourceTree.Group tree is not supported. |





### Returns



**string**
        The GUID of the added file. You can use it later, for example, to add the file for building to targets.





### Description



Adds a new file reference to the list of known files.





The group structure is automatically created to correspond to the project path. To add the file to the list of files to build, pass the returned value to [AddFileToBuild](iOS.Xcode.PBXProject.AddFileToBuild.html).


              


```
using UnityEngine;
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_AddFile
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Specify the file path you want to add to the Xcode project
        string filePath = Path.Combine(Application.dataPath, "Resources/InputFile.txt");

        // Add the file to the 'Resources' subfolder in the Xcode project
        pbxProject.AddFile(filePath, "Resources/InputFile.txt");        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
