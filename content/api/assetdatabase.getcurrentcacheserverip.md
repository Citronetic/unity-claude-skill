This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).GetCurrentCacheServerIp




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

public static string GetCurrentCacheServerIp();






### Returns



**string**
        Returns a string representation of the current Cache Server IP address.





### Description



Gets the IP address of the Cache Server currently in use by the Editor.


              


```
using UnityEditor;
using UnityEngine;public class AssetDatabaseExamples : AssetPostprocessor
{
    static void OnPostprocessAllAssets(string[] importedAssets, string[] deletedAssets, string[] movedAssets, string[] movedFromAssetPaths)
    {
        //Throw a warning in the console if Cache Server IP is not set or could not be connected to
        if(AssetDatabase.GetCurrentCacheServerIp() == "")
            Debug.LogWarning("Cache Server IP is not set!");
    }
}
```


            
