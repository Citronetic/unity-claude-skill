This version of Unity is unsupported.



# [PBXProject](iOS.Xcode.PBXProject.html).IsKnownExtension




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

public static bool IsKnownExtension(string ext);






### Parameters



| Parameter | Description |
| --- | --- |
| ext | The file extension. The leading . is not necessary but is accepted. |





### Returns



**bool**
        Returns true of the extension is known.





### Description



Checks if files with the given extension are known to PBXProject.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Callbacks;
using UnityEditor.iOS.Xcode;public class Sample_IsKnownExtension
{
    [PostProcessBuild]
    public static void OnPostprocessBuild(BuildTarget buildTarget, string pathToBuiltProject)
    {
        // Specify file extension you want to check
        string extension = "txt";        // Check if the file extension is known to PBXProject
        bool isKnown = PBXProject.IsKnownExtension(extension);
        Debug.Log("Extension " + extension + " " + (isKnown ? "is" : "is not") + " known to PBXProject");
    }
}
```


            
