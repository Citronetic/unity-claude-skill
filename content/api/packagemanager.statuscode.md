This version of Unity is unsupported.



# StatusCode





enumeration


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



This enumeration represents the status of a Package Manager operation.





          - Always check the status code before accessing operation results.

          - When status is `Failure`, examine the [Error](PackageManager.Error.html) property for details.

          - Operations remain `InProgress` until the `IsCompleted` property is `true`.




              


```
using System;
using UnityEngine;
using UnityEditor.PackageManager;
using UnityEditor.PackageManager.Requests;[ExecuteInEditMode]
public class PackageManagerStatusCodeExample : MonoBehaviour
{
    AddRequest m_AddRequest;
    const string k_ValidPackageName = "com.unity.textmeshpro";

    void Start()
    {
        Debug.Log("Checking StatusCode during a request...");
        m_AddRequest = Client.Add(k_ValidPackageName);
    }    void Update()
    {
        if (m_AddRequest != null)
        {
            switch (m_AddRequest.Status)
            {
                case StatusCode.InProgress:
                    Debug.Log("Operation in progress...");
                    return;

                case StatusCode.Success:
                    Debug.Log($"Successfully installed {k_ValidPackageName}");
                    m_AddRequest = null;
                    break;

                case StatusCode.Failure:
                    Debug.LogError($"Operation failed: {m_AddRequest.Error.message}");
                    m_AddRequest = null;
                    break;
            }
        }
    }
}
```





**Related information**



          - [Client](PackageManager.Client.html)

          - [Error](PackageManager.Error.html)

          - [Request](PackageManager.Requests.Request.html)







### Properties



| Property | Description |
| --- | --- |
| InProgress | Package manager operation is in progress. |
| Success | Package manager operation completed successfully. |
| Failure | Package manager operation failed. |


            
