This version of Unity is unsupported.



# [Client](PackageManager.Client.html).Remove




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

public static [PackageManager.Requests.RemoveRequest](PackageManager.Requests.RemoveRequest.html) Remove(string packageName);






### Parameters



| Parameter | Description |
| --- | --- |
| packageName | The name of the package to remove from the project.  ArgumentException is thrown if packageName is null or empty. |





### Returns



**RemoveRequest**
        A [RemoveRequest](PackageManager.Requests.RemoveRequest.html) instance, which you can use to get the success or failure of the Remove operation.





### Description



Removes a package dependency from the project. Removing a dependency often leads to changing installed packages, but only after the Package Manager constructs a dependency graph to solve any version conflicts.





`Remove()` is an asynchronous operation. Before the operation completes, you can use the `RemoveRequest` instance to monitor the asynchronous operation.

**Note:** Make sure any other Client operations have completed before calling this method. For more information, refer to the note on the [Client](PackageManager.Client.html) class reference page.

 For more information, refer to [Dependency and resolution](../Manual/upm-dependencies.html).


              


```
using UnityEngine;
using UnityEditor.PackageManager;
using UnityEditor.PackageManager.Requests;
[ExecuteInEditMode]
public class PackageManagerClientRemoveExample : MonoBehaviour
{
    RemoveRequest m_RemoveRequest;

    void Start()
    {
        Debug.Log("Client.Remove example...");
        m_RemoveRequest = Client.Remove("com.unity.textmeshpro");
    }    void Update()
    {
        if (m_RemoveRequest != null && m_RemoveRequest.IsCompleted)
        {
            if (m_RemoveRequest.Status == StatusCode.Success)
            {
                Debug.Log("Package removed successfully");
            }
            else
            {
                Debug.LogError($"Remove failed: {m_RemoveRequest.Error.message}");
            }
            m_RemoveRequest = null;
        }
    }
}
```


            
