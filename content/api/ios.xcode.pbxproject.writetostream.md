This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).WriteToStream




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

public void WriteToStream(TextWriter sw);






### Parameters



| Parameter | Description |
| --- | --- |
| sw | Text writer to write to. |





### Description



Writes the project contents to the specified text writer.


              


```
using UnityEditor;
using System.IO;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_WriteToStream
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {        // Stop processing if build target is not iOS
        if (buildTarget != BuildTarget.iOS)
            return;        // Initialize PBXProject
        string projectPath = PBXProject.GetPBXProjectPath(pathToBuiltProject);        PBXProject pbxProject = new PBXProject();        // Initialize PBXProject by reading project info from stream
        using (StreamReader sr = new StreamReader(projectPath))
        {
            pbxProject.ReadFromStream(sr);
        }

        // Get target GUID you want to make modifications on
        string mainTargetGuid = pbxProject.GetUnityMainTargetGuid();        // Modify the project, such as adding a build property
        pbxProject.AddBuildProperty(mainTargetGuid, "exampleProperty", "exampleValue");                   // Apply changes to the pbxproj file using WriteToStream
        using (StreamWriter sw = new StreamWriter(projectPath))
        {
            pbxProject.WriteToStream(sw);
        }
    }
}
```


            
