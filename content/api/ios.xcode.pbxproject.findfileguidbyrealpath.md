This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).FindFileGuidByRealPath




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

public string FindFileGuidByRealPath(string path,
[iOS.Xcode.PBXSourceTree](iOS.Xcode.PBXSourceTree.html) sourceTree);






## Declaration

public string FindFileGuidByRealPath(string path);






### Parameters



| Parameter | Description |
| --- | --- |
| path | The physical path of the file. |
| sourceTree | The source tree path is relative to. The PBXSourceTree.Group tree is not supported. |





### Returns



**string**
        The GUID of the file if the search succeeded. Returns null if not successful.





### Description



Finds a file with the given physical path in the project.





The version without source tree argument matches paths of all known files. Use this overload with care.


              


```
using UnityEngine;
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_FindFileGuidByRealPath
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get the GUID by using it's real path and print it to the Console
        string filePath = "Path/To/ExampleFile.txt";
        string fileGuid = pbxProject.FindFileGuidByRealPath(filePath);
        Debug.Log("File GUID: " + fileGuid);        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
