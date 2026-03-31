This version of Unity is unsupported.



# [FileUtil](FileUtil.html).ReplaceDirectory




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

public static void ReplaceDirectory(string src,
string dst);






### Description



Replaces a directory.





Replaces the directory located at **dst** with the directory located at **src**.
if **dst** doesnt exists it copies the file. If **dst** exists
then it deletes it and copies the directory at **src** to **dst**
Additional resources: [FileUtil.ReplaceFile](FileUtil.ReplaceFile.html).


              


```
using UnityEngine;
using UnityEditor;public class ReplaceDir : MonoBehaviour
{
    [MenuItem("Example/Replace Directory")]
    static void ReplaceDirectory()
    {
        FileUtil.ReplaceDirectory("sourcepath/YourFolder", "destpath/YourNewFolder");
    }
}
```


            
