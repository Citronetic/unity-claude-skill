This version of Unity is unsupported.



# [EditorSettings](EditorSettings.html).projectGenerationUserExtensions




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












                    public static string[] projectGenerationUserExtensions;






### Description



Controls list of extensions of files that will be included in the c# .csproj projects that Unity generates.





Use this if you have certain file formats that you'd like to add to the .csproj files for convenient editing. This setting takes a semicolon-separated string of extensions. Leading dots are optional. This setting is specific to a project.


              


```
using UnityEngine;
using UnityEditor;public class Example
{
    [MenuItem("TryMe/SetExtensions")]
    static void Doit()
    {
        EditorSettings.projectGenerationUserExtensions = new[] { "txt", "xml", ".cs", "myfunkyformat"};
    }
}
```


            
