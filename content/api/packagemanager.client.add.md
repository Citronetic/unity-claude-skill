This version of Unity is unsupported.



# [Client](PackageManager.Client.html).Add




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

public static [PackageManager.Requests.AddRequest](PackageManager.Requests.AddRequest.html) Add(string identifier);






### Parameters



| Parameter | Description |
| --- | --- |
| identifier | A string representing the package to be added:

                - To install a specific version of a package, use a package identifier ("name@version"). This is the only way to install a pre-release version.
                - To install the latest compatible (released) version of a package, specify only the package name.
                - To install a git package, specify a git url.
                - To install a local package, specify a value in the format "file:/path/to/package/folder".
                - To install a local tarball package, specify a value in the format "file:/path/to/package-file.tgz".

                ArgumentException is thrown if identifier is null or empty. |





### Returns



**AddRequest**
        An [AddRequest](PackageManager.Requests.AddRequest.html) instance, which you can use to get the [PackageInfo](PackageManager.PackageInfo.html) representing the package that was added to the project from the `AddRequest.Result` property.





### Description



Adds a package dependency to the project. Requesting a new or different dependency often leads to changing installed packages, but only after the Package Manager constructs a dependency graph to solve any version conflicts.





`Add()` is an asynchronous operation. Before the operation is complete, you can use the `AddRequest` instance to monitor the asynchronous operation.

**Note:** Make sure any other Client operations complete before calling this method. For more information, refer to the note on the [Client](PackageManager.Client.html) class reference page.

For more information, refer to [Dependency and resolution](../Manual/upm-dependencies.html).


              


```
using System;
using UnityEngine;
using UnityEditor.PackageManager;
using UnityEditor.PackageManager.Requests;
[ExecuteInEditMode]
public class PackageManagerClientAddExample : MonoBehaviour
{
    AddRequest m_AddRequest;
    const string k_ValidPackageName = "com.unity.textmeshpro";

    void Start()
    {
        Debug.Log("Adding a package via Client.Add...");
        m_AddRequest = Client.Add(k_ValidPackageName);
    }
    void Update()
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


            
