This version of Unity is unsupported.



# ListRequest





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



Represents an asynchronous request to list the packages in the project.





The PackageManager [Client](PackageManager.Client.html) class returns a ListRequest instance when you call the [Client.List](PackageManager.Client.List.html) method to list the package dependencies of your project. Use this object to determine when the request is complete and to access the result.

                After the request completes, you can retrieve the [PackageCollection](PackageManager.PackageCollection.html) instance from the Result property.


              


```
using UnityEngine;
using UnityEditor.PackageManager;
using UnityEditor.PackageManager.Requests;
[ExecuteInEditMode]
public class ListRequestExample : MonoBehaviour
{
    ListRequest m_ListRequest;

    void Start()
    {
        Debug.Log("Listing packages...");
        m_ListRequest = Client.List();
    }
    void Update()
    {
        if (m_ListRequest != null && m_ListRequest.IsCompleted)
        {
            if (m_ListRequest.Status == StatusCode.Success)
            {
                foreach (var package in m_ListRequest.Result)
                {
                    Debug.Log($"{package.name}");
                }
            }
            else
            {
                Debug.Log($"Package list request failed: {m_ListRequest.Error}");
            }
            m_ListRequest = null;
        }
    }
}
```





**Related information**



          - [Client.List](PackageManager.Client.List.html)

          - [PackageCollection](PackageManager.PackageCollection.html)

          - [PackageInfo](PackageManager.PackageInfo.html)

          - [Request<T0>](PackageManager.Requests.Request_1.html)







### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| Error | The error returned by the request, if any. |
| IsCompleted | Whether the request is complete. |
| Status | The request status. |
| Result | A property that provides access to the result of a completed Package Manager request operation. |












            
