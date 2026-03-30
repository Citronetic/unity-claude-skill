This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).ReadFromFile




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

public void ReadFromFile(string path);






### Parameters



| Parameter | Description |
| --- | --- |
| path | Path of the file. |





### Description



Reads the project from a file identified by the given path.





Current contents of the project are discarded.


              


```
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_ReadFromFile
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject by specifying the project path
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();        // Read project information from the project file
        pbxProject.ReadFromFile(projectPath);        // Get target GUID you want to make modifications on
        string mainTargetGuid = pbxProject.GetUnityMainTargetGuid();        // Modify the project, such as adding a build property
        pbxProject.AddBuildProperty(mainTargetGuid, "exampleProperty", "exampleValue");

        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
