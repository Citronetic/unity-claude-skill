This version of Unity is unsupported.



# Request





class in
          UnityEditor.PackageManager.Requests


                  Leave feedback





Implements interfaces:[ISerializationCallbackReceiver](ISerializationCallbackReceiver.html)




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



Base class for all Package Manager asynchronous operations. Use this class to track the status and results of package operations, such as adding, removing, or updating packages.





          - All [Client](PackageManager.Client.html) (such as [Client.Add](PackageManager.Client.Add.html), [Client.Remove](PackageManager.Client.Remove.html), and [Client.List](PackageManager.Client.List.html)) return an object derived from the Request class.

          - Check the `IsCompleted` property to know when the operation is done.

          - Always check the `Status` property of the `Request` for a [StatusCode](PackageManager.StatusCode.html) of `Success` before accessing results to make sure the operation was successful.




              


```
using UnityEngine;
using UnityEditor.PackageManager;
using UnityEditor.PackageManager.Requests;[ExecuteInEditMode]
public class RequestExample : MonoBehaviour
{
    ListRequest m_Request;

    void Start()
    {
        Debug.Log("Requesting packages list...");
        m_Request = Client.List();
    }    void Update()
    {
        if (m_Request != null && m_Request.IsCompleted)
        {
            if (m_Request.Status == StatusCode.Success)
            {
                foreach (var package in m_Request.Result)
                {
                    Debug.Log($"Package: {package.name} ({package.version})");
                }
            }
            else
            {
                Debug.Log($"Package list request failed: {m_Request.Error}");
            }
            m_Request = null;
        }
    }
}
```





**Related information**



          - [Client](PackageManager.Client.html)

          - [PackageInfo](PackageManager.PackageInfo.html)

          - [Error](PackageManager.Error.html)

          - [StatusCode](PackageManager.StatusCode.html)







### Properties



| Property | Description |
| --- | --- |
| Error | The error returned by the request, if any. |
| IsCompleted | Whether the request is complete. |
| Status | The request status. |


            
