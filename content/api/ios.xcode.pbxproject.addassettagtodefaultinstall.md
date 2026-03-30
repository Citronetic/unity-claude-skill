This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).AddAssetTagToDefaultInstall




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

public void AddAssetTagToDefaultInstall(string targetGuid,
string tag);






### Parameters



| Parameter | Description |
| --- | --- |
| targetGuid | The GUID of the target, such as the one returned by TargetGuidByName. |
| tag | The name of the asset tag. |





### Description



Adds the asset tag to the list of tags to download during initial installation.





**Note**: The function does nothing if there are no files that use the given asset tag across the project.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.iOS.Xcode;
using UnityEditor.Callbacks;
using System.IO;public class Sample_AddAssetTagToDefaultInstall
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get GUID for the Main target
        string mainTargetGuid = pbxProject.GetUnityMainTargetGuid();        // Add the Asset Tag to list of tags to be downloaded during initial installation
        // Note that the function does not add the asset tag if there are no files in the project using it
        pbxProject.AddAssetTagToDefaultInstall(mainTargetGuid, "exampleTag");        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
