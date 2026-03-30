This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).AddTarget




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

public string AddTarget(string name,
string ext,
string type);






### Parameters



| Parameter | Description |
| --- | --- |
| name | The name of the new target. |
| ext | The file extension of the target artifact. Note: Adding a leading . isn't necessary, but is accepted. |
| type | The type of the target. For example,
com.apple.product-type.app-extension or com.apple.product-type.application.watchapp2. |





### Returns



**string**
        The GUID of the new target.





### Description



Creates a new native target.





Target-specific build configurations are automatically created for each known build configuration name. Note, that this is a requirement that follows from the structure of Xcode projects, not an implementation detail of this function.
The function creates a product file reference in the `Products` project folder which refers to the target artifact built via this target.


              


```
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_AddTarget
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Add a new Target to the project by specifying its name, extension and target type
        // You can later use the returned targetGuid to modify the target
        string targetGuid = pbxProject.AddTarget("exampleTarget", "app", "com.apple.product-type.bundle");        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
