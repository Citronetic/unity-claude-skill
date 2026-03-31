This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).RefreshSettings




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

public static void RefreshSettings();






### Description



Apply pending Editor Settings changes to the Asset pipeline.





Immediately applies any changes to the [EditorSettings](EditorSettings.html) properties for the cache server. If not called, then changes to these settings do not take effect until you restart the Editor.

                    List of the settings that require calling RefreshSettings to be applied:

                    • EditorSettings.cacheServerNamespacePrefix

                    • EditorSettings.cacheServerMode

                    • EditorSettings.cacheServerEndpoint

                    • EditorSettings.cacheServerEnableTls.


              


```
using UnityEngine;
                        using UnityEditor;                        public class AssetDatabaseExamples : MonoBehaviour                        {
                        [MenuItem("AssetDatabase/Set Cache Server Project Settings")]
                        static void SetCacheServerProjectSettings()
                        {
                        EditorSettings.cacheServerMode = CacheServerMode.Enabled;
                        Debug.Log("Is Cache Server enabled? - " + AssetDatabase.IsCacheServerEnabled());                        EditorSettings.cacheServerEndpoint = "192.168.31.210:10443";
                        Debug.Log("Cache Server IP and Port number: " + AssetDatabase.GetCacheServerAddress() + ":" + AssetDatabase.GetCacheServerPort());                        EditorSettings.cacheServerEnableAuth = false;
                        EditorSettings.cacheServerEnableTls = false;                        EditorSettings.cacheServerEnableDownload = true;
                        Debug.Log("Is Cache Server download enabled? - " + AssetDatabase.GetCacheServerEnableDownload());                        EditorSettings.cacheServerEnableUpload = true;
                        Debug.Log("Is Cache Server upload enabled? - " + AssetDatabase.GetCacheServerEnableUpload());                        EditorSettings.cacheServerNamespacePrefix = "default";
                        Debug.Log("Cache Server Namespace prefix: " + AssetDatabase.GetCacheServerNamespacePrefix());                        //This command is required to apply changes to some of the EditorSettings properties above
                        AssetDatabase.RefreshSettings();
                        }
                        }
```


            
