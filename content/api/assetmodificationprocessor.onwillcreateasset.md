This version of Unity is unsupported.



# [AssetModificationProcessor](AssetModificationProcessor.html).OnWillCreateAsset(string)




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



Unity calls this method when it is about to create an Asset you haven't imported (for example, *.meta* files).


              


```
using UnityEngine;public class CustomAssetModificationProcessor : UnityEditor.AssetModificationProcessor
{
    static void OnWillCreateAsset(string path)
    {
        Debug.Log("Asset is being created at: " + path);
    }
}
```


            
