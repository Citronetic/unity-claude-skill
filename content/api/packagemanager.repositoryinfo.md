This version of Unity is unsupported.



# RepositoryInfo





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



Information about a repository that contains the source code of a package, including the repository type and URL.





          - This information is used mostly with Git repositories.

          - All the properties can be null, for example when the repository information is not provided.




              


```
using UnityEngine;
using UnityEditor.PackageManager;
using UnityEditor.PackageManager.Requests;[ExecuteInEditMode]
public class PackageRepositoryInfoExample : MonoBehaviour
{
    ListRequest m_ListRequest;

    void Start()
    {
        Debug.Log("Listing packages and getting their repository info...");
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
                    var outputString = $"Dependencies for {package.name}:";
                    if (package.repository != null)
                    {
                        Debug.Log($"Repository info for {package.name}:" +
                            $"\n- Type: {package.repository.type}" +
                            $"\n- URL: {package.repository.url}" +
                            (string.IsNullOrEmpty(package.repository.revision) ? "" : $"\n- Revision: {package.repository.revision}"));
                    }
                }
            }
            m_ListRequest = null;
        }
    }
}
```





**Related information**



          - [PackageInfo](PackageManager.PackageInfo.html)

          - [GitInfo](PackageManager.GitInfo.html)

          - [Package Manifest](../Manual/upm-manifestPkg.html)







### Properties



| Property | Description |
| --- | --- |
| path | The relative path to the package root in the repository, if it is different from the repository root. |
| revision | The revision id corresponding to the package version. |
| type | The type of the repository, e.g. git. |
| url | The url to the source code repository. |


            
