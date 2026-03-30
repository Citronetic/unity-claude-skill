This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).RemoveAssetTagForFile




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

public void RemoveAssetTagForFile(string targetGuid,
string fileGuid,
string tag);






### Parameters



| Parameter | Description |
| --- | --- |
| targetGuid | The GUID of the target, such as the one returned by TargetGuidByName. |
| fileGuid | The GUID of the file. |
| tag | The name of the asset tag. |





### Description



Removes an asset tag for the given file.





This function does nothing if the file isn't configured for building in the given target, or if the asset tag is not present in the list of asset tags configured for file. If the file was the last file referring to the given tag across the Xcode project, then the tag is removed from the list of known tags.


              


```
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_RemoveAssetTagForFile
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get main target GUID
        string mainTargetGuid = pbxProject.GetUnityMainTargetGuid();        // Get the file GUID
        string filePath = "Path/To/ExampleFile.txt";
        string fileGuid = pbxProject.FindFileGuidByProjectPath(filePath);        // Remove 'exampleTag' asset tag from the specified
        pbxProject.RemoveAssetTagForFile(mainTargetGuid, fileGuid, "exampleTag");        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
