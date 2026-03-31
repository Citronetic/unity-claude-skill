This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).GetCacheServerNamespacePrefix




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

public static string GetCacheServerNamespacePrefix();






### Returns



**string**
        Returns the Namespace prefix for the Cache Server.





### Description



Gets the Cache Server Namespace prefix set in Editor Settings.





Note: If you set a new value for the Namespace prefix your new settings are not applied until you call AssetDatabase.RefreshSettings(). However, this method will return the value you have set regardless of whether you have applied the setting or no.


              


```
using UnityEngine;
using UnityEditor;public class AssetDatabaseExamples : MonoBehaviour{
    [MenuItem("AssetDatabase/Set Cache Server Project Settings")]
    static void SetCacheServerProjectSettings()
    {
        EditorSettings.cacheServerMode = CacheServerMode.Enabled;
        Debug.Log("Is Cache Server enabled? - " + AssetDatabase.IsCacheServerEnabled());        EditorSettings.cacheServerEndpoint = "192.168.31.210:10443";
        Debug.Log("Cache Server IP and Port number: " + AssetDatabase.GetCacheServerAddress() + ":" + AssetDatabase.GetCacheServerPort());        EditorSettings.cacheServerEnableAuth = false;
        EditorSettings.cacheServerEnableTls = false;        EditorSettings.cacheServerEnableDownload = true;
        Debug.Log("Is Cache Server download enabled? - " + AssetDatabase.GetCacheServerEnableDownload());        EditorSettings.cacheServerEnableUpload = true;
        Debug.Log("Is Cache Server upload enabled? - " + AssetDatabase.GetCacheServerEnableUpload());        EditorSettings.cacheServerNamespacePrefix = "default";
        Debug.Log("Cache Server Namespace prefix: " + AssetDatabase.GetCacheServerNamespacePrefix());        //This command is required to apply changes to some of the EditorSettings properties above
        AssetDatabase.RefreshSettings();
    }
}
```


            
