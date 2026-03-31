This version of Unity is unsupported.



# [FileUtil](FileUtil.html).MoveFileOrDirectory




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

public static void MoveFileOrDirectory(string source,
string dest);






### Description



Moves a file or a directory from a given path to another path.





This function's path is relative to the project root folder but it can also accept absolute paths.

All file separators should be forward ones "/".

Make sure to include the name of the files or directories at the end of the `dest` argument.


              


```
using UnityEngine;
using UnityEditor;public class MoveFile : MonoBehaviour
{
    [MenuItem("Example/Move Something")]
    static void MoveSomething()
    {
        FileUtil.MoveFileOrDirectory("sourcepath/YourFileOrFolder", "destpath/YourFileOrFolder");
    }
}
```


            
