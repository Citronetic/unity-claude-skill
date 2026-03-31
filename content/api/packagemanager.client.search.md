This version of Unity is unsupported.



# [Client](PackageManager.Client.html).Search




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










## Declaration

public static [PackageManager.Requests.SearchRequest](PackageManager.Requests.SearchRequest.html) Search(string packageIdOrName);






## Declaration

public static [PackageManager.Requests.SearchRequest](PackageManager.Requests.SearchRequest.html) Search(string packageIdOrName,
bool offlineMode);






### Parameters



| Parameter | Description |
| --- | --- |
| packageIdOrName | The name or ID of the package. ArgumentException is thrown if packageIdOrName is null or empty. |
| offlineMode | Specifies whether or not the Package Manager requests the latest information about the project's packages from the remote Unity package registry. When offlineMode is true, the PackageInfo object returned by the Package Manager contains information obtained from the local package cache, which could be out of date. |





### Returns



**SearchRequest**
        A [SearchRequest](PackageManager.Requests.SearchRequest.html) instance, which you can use to get the array of [PackageInfo](PackageManager.PackageInfo.html) objects representing the packages matching the search criteria from the `SearchRequest.Result` property.





### Description



Searches for packages in the Unity Package Registry. Returns a [SearchRequest](PackageManager.Requests.SearchRequest.html) object that provides access to matching packages.





This operation issues a request to the main Unity package registry.

                    `Search()` is an asynchronous operation. Before the operation is complete, you can use the `SearchRequest` instance to monitor the asynchronous operation.


**Note:** Make sure any other Client operations complete before calling this method. For more information, refer to the note on the [Client](PackageManager.Client.html) class reference page.


              


```
using UnityEngine;
using UnityEditor.PackageManager;
using UnityEditor.PackageManager.Requests;
[ExecuteInEditMode]
public class PackageManagerClientSearchExample : MonoBehaviour
{
    SearchRequest m_SearchRequest;

    void Start()
    {
        Debug.Log("Client.Search example...");
        m_SearchRequest = Client.Search("com.unity.textmeshpro");
    }
    void Update()
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



          - [SearchRequest](PackageManager.Requests.SearchRequest.html)

          - [PackageInfo](PackageManager.PackageInfo.html)

          - [Client](PackageManager.Client.html)




            
