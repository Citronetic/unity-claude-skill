This version of Unity is unsupported.



# [AssetModificationProcessor](AssetModificationProcessor.html).FileModeChanged(string[],FileMode)




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



Unity calls this method when file mode has been changed for one or more files.





Array of strings specifies changed files. [FileMode](VersionControl.FileMode.html) specifies new file mode. This method must be static if implemented.


              


```
using UnityEngine;
using UnityEditor.VersionControl;class CustomAssetModificationProcessor : UnityEditor.AssetModificationProcessor
{
    static void FileModeChanged(string[] paths, FileMode mode)
    {
        Debug.Log($"{nameof(FileModeChanged)} ({mode}):");
        foreach (var path in paths)
            Debug.Log(path);
    }
}
```


            
