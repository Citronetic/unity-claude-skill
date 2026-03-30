This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).RemoveAssetTag




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

public void RemoveAssetTag(string tag);






### Parameters



| Parameter | Description |
| --- | --- |
| tag | The name of the asset tag. |





### Description



Removes an asset tag.





Removes the given asset tag from the list of configured asset tags for all files on all targets, the list of asset tags configured for initial installation and the list of known asset tags in the Xcode project.


              


```
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_RemoveAssetTag
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Remove 'exampleTag' asset tag for all files on all targets in the Xcode project
        pbxProject.RemoveAssetTag("exampleTag");

        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
