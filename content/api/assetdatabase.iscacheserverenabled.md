This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).IsCacheServerEnabled




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

public static bool IsCacheServerEnabled();






### Returns



**bool**
        Returns true when the Cache Server is enabled. Returns false otherwise.





### Description



Checks whether the Cache Server is enabled in Project Settings.


              


```
using UnityEngine;
using UnityEditor;public class AssetDatabaseExamples : MonoBehaviour{
    [MenuItem("AssetDatabase/Debugging Connection to the Cache Server")]
    static void DebuggingConnectionToTheCacheServer()
    {
        //This will Enable Cache Server in Project Settings
        EditorSettings.cacheServerMode = CacheServerMode.Enabled;
        Debug.Log("Is Cache Server Enabled? - " + AssetDatabase.IsCacheServerEnabled());        var cacheServerIP = "10.37.44.195";
        ushort cacheServerPort = 10443;        if (AssetDatabase.IsConnectedToCacheServer() == false)
        {
            if (AssetDatabase.CanConnectToCacheServer(cacheServerIP, cacheServerPort) == false)
            {
                Debug.Log("Cache server is not available, check IP address and Port Number");
            }            else
            {
                Debug.Log("Cache server is available, but not connected now. Set correct IP and Port Number in Project Settings");
            }
        }        else
        {
            Debug.Log("Cache Server is connected");
            Debug.Log("Cache Server IP: " + AssetDatabase.GetCacheServerAddress());
            Debug.Log("Cache Server Port Number: " + AssetDatabase.GetCacheServerPort());
        }
    }
}
```


            
