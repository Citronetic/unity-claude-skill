This version of Unity is unsupported.



# PackageSource





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



This enumeration indicates the source from which a package was installed.





          - The source information can help you determine how a package was installed and how it can be updated.

          - You can modify embedded and local packages.




              


```
using System;
using UnityEngine;
using UnityEditor.PackageManager;
using UnityEditor.PackageManager.Requests;[ExecuteInEditMode]
public class PackageSourceExample : MonoBehaviour
{
    ListRequest m_ListRequest;

    void Start()
    {
        Debug.Log("Listing packages and getting their source...");
        m_ListRequest = Client.List();
    }    void Update()
    {
        if (m_ListRequest != null && m_ListRequest.IsCompleted)
        {
            if (m_ListRequest.Status == StatusCode.Success)
            {
                foreach (var package in m_ListRequest.Result)
                {
                    Debug.Log($"{package.name}: {package.source}");
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



          - [PackageInfo](PackageManager.PackageInfo.html)

          - [Client.List](PackageManager.Client.List.html)

          - [Client](PackageManager.Client.html)

          - [Embedded dependencies](../Manual/upm-embed.html)







### Properties



| Property | Description |
| --- | --- |
| Unknown | The package source is unknown. |
| Registry | The package is from a registry. |
| BuiltIn | The package is built-in and part of Unity. |
| Embedded | The package is embedded in the Unity project. |
| Local | The package is referenced by a local path. |
| Git | The package is referenced directly by a Git URL. |
| LocalTarball | The package is referenced by a local path pointing to a GZip tarball file. |


            
