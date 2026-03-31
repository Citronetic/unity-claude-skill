This version of Unity is unsupported.



# Request<T0>





class in
          UnityEditor.PackageManager.Requests



/



Inherits from:[PackageManager.Requests.Request](PackageManager.Requests.Request.html)


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



Tracks the state of an asynchronous Unity Package Manager (Upm) server operation that returns a non-empty response.





A generic base class for Package Manager operations that return a result of type T. This class extends the base Request class to provide type-safe access to operation results.

**Notes:**



          - Access `Result` only after checking `IsCompleted` and `Status`.

          - Common type parameters include [PackageInfo](PackageManager.PackageInfo.html), [PackageCollection](PackageManager.PackageCollection.html), and [PackageInfo](PackageManager.PackageInfo.html)[].




              


```
using UnityEngine;
using UnityEditor.PackageManager;
using UnityEditor.PackageManager.Requests;[ExecuteInEditMode]
public class TypedRequestExample : MonoBehaviour
{
    Request<PackageInfo[]> m_GenericRequest;

    void Start()
    {
        Debug.Log("Searching packages with a typed request...");
        m_GenericRequest = Client.Search("com.unity.textmeshpro");
    }
    void Update()
    {
        if (m_GenericRequest != null && m_GenericRequest.IsCompleted)
        {
            if (m_GenericRequest.Status == StatusCode.Success)
            {
                var packages = m_GenericRequest.Result;

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
                Debug.LogError($"Search failed: {m_GenericRequest.Error.message}");
            }
            m_GenericRequest = null;
        }
    }
}
```





**Related information**



          - [PackageInfo](PackageManager.PackageInfo.html)

          - [Client](PackageManager.Client.html)

          - [StatusCode](PackageManager.StatusCode.html)

          - [Request](PackageManager.Requests.Request.html)







### Properties



| Property | Description |
| --- | --- |
| Result | A property that provides access to the result of a completed Package Manager request operation. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| Error | The error returned by the request, if any. |
| IsCompleted | Whether the request is complete. |
| Status | The request status. |












            
