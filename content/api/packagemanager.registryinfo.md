This version of Unity is unsupported.



# RegistryInfo





class in
          UnityEditor.PackageManager


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



Contains information about the package registry from which a package was installed, including the registry name and URL.





          - You can get a `RegistryInfo` instance from the `registry` property of a [PackageInfo](PackageManager.PackageInfo.html) object.

          - Each package in your project tracks which registry it came from.

          - Custom scoped registries can be configured in your project settings.

          - The default Unity registry cannot be removed or modified.




              


```
using System;
using UnityEngine;
using UnityEditor.PackageManager;
using UnityEditor.PackageManager.Requests;[ExecuteInEditMode]
public class RegistryInfoExample : MonoBehaviour
{
    ListRequest m_ListRequest;

    void Start()
    {
        Debug.Log("Listing packages and getting their registry info...");
        m_ListRequest = Client.List();
    }    void Update()
    {
        if (m_ListRequest != null && m_ListRequest.IsCompleted)
        {
            if (m_ListRequest.Status == StatusCode.Success)
            {
                foreach (var package in m_ListRequest.Result)
                {
                    Debug.Log($"Registry info for {package.name}:\n" +
                        $"- Registry name: {package.registry.name}\n" +
                        $"- Registry URL: {package.registry.url}\n" +
                        $"- Is default registry: {package.registry.isDefault}");
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

          - [Scoped Registry Configuration](../Manual/upm-scoped.html)







### Properties



| Property | Description |
| --- | --- |
| isDefault | Whether this is the default, Unity registry or one of the scoped registries configured in the project manifest. |
| name | The registry name. |
| url | The registry URL. |


            
