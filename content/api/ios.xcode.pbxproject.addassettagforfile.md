This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).AddAssetTagForFile




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

public void AddAssetTagForFile(string targetGuid,
string fileGuid,
string tag);






### Parameters



| Parameter | Description |
| --- | --- |
| targetGuid | The GUID of the target, such as the one returned by TargetGuidByName. |
| fileGuid | The GUID of the file. |
| tag | The name of the asset tag. |





### Description



Adds an asset tag for the given file.





The asset tags identify resources that are downloaded via On Demand Resources functionality. A request for a specific tag initiates the download of all files, configured for that tag.


              


```
using UnityEngine;
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_AddAssetTagForFile
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get the main target GUID
        string mainTargetGuid = pbxProject.GetUnityMainTargetGuid();        // Add the file you want to specify the Tag for to the Xcode project
        string filePath = Path.Combine(Application.dataPath, "Resources/InputFile.txt");
        string fileGuid = pbxProject.AddFile(filePath, "Resources/InputFile.txt");
        pbxProject.AddFileToBuild(mainTargetGuid, fileGuid);        // Add the Asset Tag for that file
        pbxProject.AddAssetTagForFile(mainTargetGuid, fileGuid, "exampleTag");

        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
