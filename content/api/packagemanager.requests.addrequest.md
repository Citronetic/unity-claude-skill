This version of Unity is unsupported.



# AddRequest





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



Represents an asynchronous request to add a package to the project.





The PackageManager [Client](PackageManager.Client.html) class returns an AddRequest instance when you call the [Client.Add](PackageManager.Client.Add.html) method to add a package to your project. Use this object to determine when the request is complete and to access the result.

                Once the request comsplete, you can retrieve the [PackageInfo](PackageManager.PackageInfo.html) instance from the Result property.


              


```
using UnityEngine;
using UnityEditor.PackageManager;
using UnityEditor.PackageManager.Requests;
[ExecuteInEditMode]
public class PackageManagerAddExample : MonoBehaviour
{
    AddRequest m_AddRequest;

    void Start()
    {
        Debug.Log("Client.Add example...");
        m_AddRequest = Client.Add("com.unity.textmeshpro");
    }    void Update()
    {
        if (m_AddRequest != null && m_AddRequest.IsCompleted)
        {
            if (m_AddRequest.Status == StatusCode.Success)
            {
                var package = m_AddRequest.Result;
                Debug.Log($"Added package: {package.name}" +
                    $"\nVersion: {package.version}" +
                    $"\nDisplay name: {package.displayName}");
            }
            else
            {
                Debug.LogError($"Add failed: {m_AddRequest.Error.message}");
            }
            m_AddRequest = null;
        }
    }
}
```





**Related information**



          - [Client.Add](PackageManager.Client.Add.html)

          - [PackageCollection](PackageManager.PackageCollection.html)

          - [Request<T0>](PackageManager.Requests.Request_1.html)

          - [PackageInfo](PackageManager.PackageInfo.html)







### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| Error | The error returned by the request, if any. |
| IsCompleted | Whether the request is complete. |
| Status | The request status. |
| Result | A property that provides access to the result of a completed Package Manager request operation. |












            
