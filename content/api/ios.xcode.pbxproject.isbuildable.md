This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).IsBuildable




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

public static bool IsBuildable(string ext);






### Parameters



| Parameter | Description |
| --- | --- |
| ext | The file extension. Note: A leading . is not necessary but is accepted. |





### Returns



**bool**
        Returns true if the file can be built.





### Description



Checks if a file with the given extension can be built by Xcode.





**Note**: Returns true if the extension is not known by PBXProject.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_IsBuildable
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {
        // Specify file extension you want to check
        string extension = "txt";        // Check if the file extension can be built by Xcode
        bool isBuildable = PBXProject.IsBuildable(extension);
        Debug.Log("Extension " + extension + " " + (isBuildable ? "is" : "is not") + " buildable by Xcode");
    }
}
```


            
