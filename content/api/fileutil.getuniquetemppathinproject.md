This version of Unity is unsupported.



# [FileUtil](FileUtil.html).GetUniqueTempPathInProject




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

public static string GetUniqueTempPathInProject();






### Description



Returns a unique path in the Temp folder within your current project.





The returned path is relative to the project folder.

The returned path is of a form `Temp/UnityTempFile-`*uniqueID*, where `uniqueID` is guaranteed to be
unique over space and time.

You can use it to create temporary files/folders and be sure that
you are not overriding somebody else's files, plus you don't have to
keep track of the unique IDs yourself.


              


```
using UnityEngine;
using UnityEditor;public class GetUniqueTempPath : MonoBehaviour
{
    [MenuItem("Example/Get Unique Temp Path")]
    static void GetUniqueTempPathInProject()
    {
        Debug.Log(FileUtil.GetUniqueTempPathInProject());
    }
}
```


            
