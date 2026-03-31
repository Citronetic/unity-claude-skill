This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).cacheServerConnectionChanged




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



















### Parameters



| Parameter | Description |
| --- | --- |
| value | Use CacheServerConnectionChangedParameters for this event. |





### Description



Unity raises this event when Cache Server connection is changed.


              


```
using UnityEngine;
using UnityEditor;public class CacheServerConnectionChangedExample
{
    [MenuItem("AssetDatabase/Correct connection to the Cache Server")]
    static void CorrectChangeCacheServer()
    {
        var correctEndpoint = "192.168.1.210:8080";
        EditorSettings.cacheServerEndpoint = correctEndpoint;
        AssetDatabase.RefreshSettings();
    }    [MenuItem("AssetDatabase/Wrong connection to the Cache Server")]
    static void WrongChangeCacheServer()
    {
        var invalidEndpoint = "Invalid IP Address";
        EditorSettings.cacheServerEndpoint = invalidEndpoint;
        AssetDatabase.RefreshSettings();
    }    [InitializeOnLoadMethod]
    static void OncacheServerConnectionChanged()
    {
        AssetDatabase.cacheServerConnectionChanged += ConsoleLog;
    }    static void ConsoleLog(CacheServerConnectionChangedParameters param)
    {
        Debug.Log("Connection Changed");
    }
}
```


            
