This version of Unity is unsupported.



# AuthorInfo





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



Contains information about the author of a package, including their name, email, and URL.





**Notes:**



          - Author information is included in the package's `package.json` file.

          - Email and URL are optional fields and might be null.

          - A package can have only one author, therefore, use contributors for additional credits.




              


```
using System;
using UnityEngine;
using UnityEditor.PackageManager;
using UnityEditor.PackageManager.Requests;[ExecuteInEditMode]
public class PackageAuthorInfoExample : MonoBehaviour
{
    ListRequest m_ListRequest;

    void Start()
    {
        Debug.Log("Listing packages and getting their author info...");
        m_ListRequest = Client.List();
    }    void Update()
    {
        if (m_ListRequest != null && m_ListRequest.IsCompleted)
        {
            if (m_ListRequest.Status == StatusCode.Success)
            {
                foreach (var package in m_ListRequest.Result)
                {
                    if (package.author != null &&
                        (!string.IsNullOrWhiteSpace(package.author.name)
                            || !string.IsNullOrWhiteSpace(package.author.email)
                            || !string.IsNullOrWhiteSpace(package.author.url)
                            )
                        )
                    {
                        Debug.Log($"Package: {package.name}");
                        Debug.Log($"- Author: {package.author.name}");

                        if (!string.IsNullOrEmpty(package.author.email))
                            Debug.Log($"- Email: {package.author.email}");

                        if (!string.IsNullOrEmpty(package.author.url))
                            Debug.Log($"- Website: {package.author.url}");
                    }
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

          - [Package Manifest](../Manual/upm-manifestPkg.html)







### Properties



| Property | Description |
| --- | --- |
| email | The email address of the author (optional). |
| name | The name of the author. |
| url | The url address of the author (optional). |


            
