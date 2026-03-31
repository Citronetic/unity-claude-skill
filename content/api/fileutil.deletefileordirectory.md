This version of Unity is unsupported.



# [FileUtil](FileUtil.html).DeleteFileOrDirectory




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

public static bool DeleteFileOrDirectory(string path);






### Description



Deletes a file or a directory given a path.





This function's path is relative to the project root folder but it can also accept absolute paths.

All file separators should be forward ones "/" (Unix style).


              


```
using UnityEngine;
using UnityEditor;public class DeleteFile : MonoBehaviour
{
    [MenuItem("Example/Delete Something")]
    static void DeleteSomething()
    {
        FileUtil.DeleteFileOrDirectory("yourPath/YourFileOrFolder");
    }
}
```


            
