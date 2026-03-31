This version of Unity is unsupported.



# DependencyInfo





struct in
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



Structure that contains information about a package's dependencies, including the package name and version requirements.





          - The `version` strings follow semantic versioning format.

          - The dependencies of a package are defined in its `package.json` file.




              


```
using UnityEngine;
using UnityEditor.PackageManager;
using UnityEditor.PackageManager.Requests;[ExecuteInEditMode]
public class PackageDependencyInfoExample : MonoBehaviour
{
    ListRequest m_ListRequest;

    void Start()
    {
        Debug.Log("Listing packages and getting their dependency info...");
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
                    if(package.dependencies == null || package.dependencies.Length == 0)
                    {
                        outputString += "\n- No dependencies";
                    }
                    else
                    {
                        foreach (var dependency in package.dependencies)
                        {
                            outputString += $"\n- {dependency.name} ({dependency.version})";
                        }
                    }
                    Debug.Log(outputString);
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

          - [Semantic Versioning](https://www.semver.org)







### Properties



| Property | Description |
| --- | --- |
| name | The name of the dependency. |
| version | The version of the dependency. |


            
