This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).ReplaceFile




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

public void ReplaceFile(string fileGuid,
string path,
[iOS.Xcode.PBXSourceTree](iOS.Xcode.PBXSourceTree.html) source);






### Parameters



| Parameter | Description |
| --- | --- |
| fileGuid | The GUID of the file reference. |
| path | The physical path to the new file on the filesystem. |
| source | The source tree the path is relative to. By default it's PBXSourceTree.Source. The PBXSourceTree.Group tree is not supported. |





### Description



Replaces a specified file with a new file.





The path to the specified file is replaced and the GUID of the old file is preserved.


              


```
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_ReplaceFile
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get the target GUID
        string targetGuid = pbxProject.GetUnityMainTargetGuid();        // Get the GUID of the existing file you want to replace
        string existingFilePath = "Resources/oldExampleFile.txt";
        string existingFileGuid = pbxProject.FindFileGuidByProjectPath(existingFilePath);        // Add the new file and get the GUID
        string newFilePath = "path/to/your/newExampleFile.txt";
        string newFileGuid = pbxProject.AddFile(newFilePath, "Resources/newExampleFile.txt", PBXSourceTree.Source);        // Replace the existing file with the new file
        pbxProject.ReplaceFile(existingFileGuid, newFileGuid);

        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
