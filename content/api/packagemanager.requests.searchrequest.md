This version of Unity is unsupported.



# SearchRequest





class in
          UnityEditor.PackageManager.Requests



/



Inherits from:[PackageManager.Requests.Request_1](PackageManager.Requests.Request_1.html)


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




                [Switch to Manual](../Manual/class-PackageManager.html)














### Description



Represents an asynchronous request to find a package.





The PackageManager [Client](PackageManager.Client.html) class returns a SearchRequest instance when you call the [Client.Search](PackageManager.Client.Search.html) method to find a package or the [Client.SearchAll](PackageManager.Client.SearchAll.html) method to find all discoverable packages. Use this object to determine when the request is complete and to access the result.

                After the request completes, you can retrieve the array of [PackageInfo](PackageManager.PackageInfo.html) instances from the Result property.


              


```
using UnityEngine;
using UnityEditor.PackageManager;
using UnityEditor.PackageManager.Requests;
[ExecuteInEditMode]
public class PackageManagerSearchExample : MonoBehaviour
{
    SearchRequest m_SearchRequest;

    void Start()
    {
        Debug.Log("SearchRequest example...");
        m_SearchRequest = Client.Search("com.unity.textmeshpro");
    }    void Update()
    {
        if (m_SearchRequest != null && m_SearchRequest.IsCompleted)
        {
            if (m_SearchRequest.Status == StatusCode.Success)
            {
                var packages = m_SearchRequest.Result;

                if (packages.Length > 0)
                {
                    var package = packages[0];
                    Debug.Log($"Found package: {package.name}" +
                        $"\nVersion: {package.version}" +
                        $"\nDescription: {package.description}");
                }
                else
                {
                    Debug.Log("No packages found");
                }
            }
            else
            {
                Debug.LogError($"Search failed: {m_SearchRequest.Error.message}");
            }
            m_SearchRequest = null;
        }
    }
}
```





**Related information**



          - [Client.Search](PackageManager.Client.Search.html)

          - [PackageCollection](PackageManager.PackageCollection.html)

          - [Request<T0>](PackageManager.Requests.Request_1.html)

          - [PackageInfo](PackageManager.PackageInfo.html)







### Properties



| Property | Description |
| --- | --- |
| PackageIdOrName | The package id or name used in this search operation. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| Error | The error returned by the request, if any. |
| IsCompleted | Whether the request is complete. |
| Status | The request status. |
| Result | A property that provides access to the result of a completed Package Manager request operation. |












            
