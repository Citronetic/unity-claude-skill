This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).GetAllAssetBundleNames




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

public static string[] GetAllAssetBundleNames();






### Returns



**string[]**
        Array of asset bundle names.





### Description



Return all the AssetBundle names in the asset database.


              


```
using UnityEditor;
using UnityEngine;public class GetAssetBundleNames
{
    [MenuItem("Assets/Get Asset Bundle names")]
    static void GetNames()
    {
        var names = AssetDatabase.GetAllAssetBundleNames();
        foreach (string name in names)
            Debug.Log("Asset Bundle: " + name);
    }
}
```


            
