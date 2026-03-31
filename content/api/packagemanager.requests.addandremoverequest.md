This version of Unity is unsupported.



# AddAndRemoveRequest





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



Represents an asynchronous request to add package dependencies to the project, remove package dependencies from the project, or both.





The PackageManager [Client](PackageManager.Client.html) class returns an AddAndRemoveRequest instance when you call the [Client.AddAndRemove](PackageManager.Client.AddAndRemove.html) method to add or remove package dependencies in the project. Use this object to determine when the request is complete and to access the result.

                After the request completes, you can retrieve the [PackageCollection](PackageManager.PackageCollection.html) instance from the Result property.


              


```
using UnityEngine;
using UnityEditor.PackageManager;
using UnityEditor.PackageManager.Requests;
[ExecuteInEditMode]
public class PackageManagerAddRemoveExample : MonoBehaviour
{
    AddAndRemoveRequest m_Request;

    void Start()
    {
        Debug.Log("Client.AddAndRemove example...");

        var packagesToAdd = new[]
        {
            "com.unity.textmeshpro",
            "com.unity.inputsystem"
        };

        var packagesToRemove = new[]
        {
            "com.unity.timeline"
        };

        m_Request = Client.AddAndRemove(packagesToAdd, packagesToRemove);
    }    void Update()
    {
        if (m_Request != null && m_Request.IsCompleted)
        {
            if (m_Request.Status == StatusCode.Success)
            {
                Debug.Log("Packages updated successfully:");
            }
            else
            {
                Debug.LogError($"Operation failed: {m_Request.Error.message}");
            }
            m_Request = null;
        }
    }
}
```





**Related information**



          - [Client.AddAndRemove](PackageManager.Client.AddAndRemove.html)

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












            
