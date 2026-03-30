This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).BuildConfigNames




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

public IEnumerable<string> BuildConfigNames();






### Returns



**IEnumerable<string>**
        An array of build config names.





### Description



Returns the names of the build configurations available in the project.





The number and names of the build configurations is a project-wide setting. Each target has the same number of build configurations and the names of these build configurations is the same. In other words, [BuildConfigByName](iOS.Xcode.PBXProject.BuildConfigByName.html) will succeed for all targets in the project and all build configuration names returned by this function.


              


```
using UnityEngine;
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_BuildConfigNames
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);
        PBXProject pbxProject = new PBXProject();
        pbxProject.ReadFromFile(projectPath);        // Retrieve Build Config names for the Xcode project
        var configs = pbxProject.BuildConfigNames();        foreach (string configName in configs)
        {
            //Do something with the congfig names
            Debug.Log("Config: " + configName);
        }        // Apply changes to the pbxproj file
        pbxProject.WriteToFile(projectPath);
    }
}
```


            
