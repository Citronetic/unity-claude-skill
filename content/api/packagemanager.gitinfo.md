This version of Unity is unsupported.



# GitInfo





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



Identifies a specific revision for a [Git package](../Manual/upm-git.html) using a Git commit hash.





          - Available only for packages installed from Git repositories.

          - The hash property always contains the full commit hash.

          - The revision property can contain a branch name, tag, or commit hash, depending on how the package was installed.




              


```
using System;
using UnityEngine;
using UnityEditor.PackageManager;
using UnityEditor.PackageManager.Requests;[ExecuteInEditMode]
public class PackageGitInfoExample : MonoBehaviour
{
    ListRequest m_ListRequest;

    void Start()
    {
        Debug.Log("Listing packages and looking for a git package...");
        m_ListRequest = Client.List();
    }    void Update()
    {
        if (m_ListRequest != null && m_ListRequest.IsCompleted)
        {
            if (m_ListRequest.Status == StatusCode.Success)
            {
                foreach (var package in m_ListRequest.Result)
                {
                    if (package.git != null)
                    {
                        Debug.Log($"Git package found: {package.name}");
                        Debug.Log($"- Repository: {package.repository.url}");
                        Debug.Log($"- Revision: {package.git.revision}");
                        Debug.Log($"- Commit Hash: {package.git.hash}");
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

          - [Package Manager Git URLs](../Manual/upm-git.html)







### Properties



| Property | Description |
| --- | --- |
| hash | Returns the resolved Git commit hash for the requested revision for this package. |
| revision | Returns the requested Git revision for the Git package. |


            
