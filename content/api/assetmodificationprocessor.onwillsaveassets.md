This version of Unity is unsupported.



# [AssetModificationProcessor](AssetModificationProcessor.html).OnWillSaveAssets(string[])




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



















### Description



This is called by Unity when it is about to write serialized assets or Scene files to disk.





If it is implemented, it allows you to override which files are written by returning an array
containing a subset of the pathnames which have been passed by Unity.  Note that this function is static.


              


```
using UnityEngine;
using UnityEditor;
using System.Collections;public class FileModificationWarning : AssetModificationProcessor
{
    static string[] OnWillSaveAssets(string[] paths)
    {
        Debug.Log("OnWillSaveAssets");
        foreach (string path in paths)
            Debug.Log(path);
        return paths;
    }
}
```


            
