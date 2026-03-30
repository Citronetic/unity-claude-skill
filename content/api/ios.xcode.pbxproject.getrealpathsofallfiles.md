This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).GetRealPathsOfAllFiles




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

public IReadOnlyList<string> GetRealPathsOfAllFiles([iOS.Xcode.PBXSourceTree](iOS.Xcode.PBXSourceTree.html) sourceTree);






### Parameters



| Parameter | Description |
| --- | --- |
| sourceTree | The source tree the path is relative to. The default source tree is PBXSourceTree.Source. This does not support the PBXSourceTree.Group. |





### Returns



**IReadOnlyList<string>**
        Returns paths of all project files that use relative location.





### Description



Return a list of all known files.


              


```
using UnityEngine;
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;
using System.Linq;public class Sample_GetRealPathsOfAllFiles
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Get real paths of all project files that use relative location
        string[] filePaths = pbxProject.GetRealPathsOfAllFiles(PBXSourceTree.Source).ToArray();

        // Print all paths to console for debugging
        foreach (string path in filePaths)
        {
            Debug.Log(path);
        }
    }
}
```


            
