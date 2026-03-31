This version of Unity is unsupported.



# Client





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



Use the Unity Package Manager Client class to manage the packages used in a project.





**Note:** You can call the Client methods only in sequence. If you try to add or remove multiple packages at the same time, the outcome is nondeterministic. For example, if you call the [Remove](PackageManager.Client.Remove.html) method on a package while a `Remove` operation is already in progress or queued, your call might overwrite the current operation and handle only the latest `Remove` operation.


              


```
using UnityEngine;
using UnityEditor.PackageManager;
using UnityEditor.PackageManager.Requests;
[ExecuteInEditMode]
public class PackageManagerClientExample : MonoBehaviour
{
    ListRequest m_ListRequest;

    void Start()
    {
        Debug.Log("Listing packages with package manager client...");
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
                    Debug.Log($"{package.name}");
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

          - [Request](PackageManager.Requests.Request.html)

          - [Error](PackageManager.Error.html)

          - [StatusCode](PackageManager.StatusCode.html)







### Static Properties



| Property | Description |
| --- | --- |
| LogLevel | Gets or sets the log level that the Package Manager uses when logging to the Editor.log and upm.log files. Defaults to LogLevel.Info. |





### Static Methods



| Method | Description |
| --- | --- |
| Add | Adds a package dependency to the project. Requesting a new or different dependency often leads to changing installed packages, but only after the Package Manager constructs a dependency graph to solve any version conflicts. |
| AddAndRemove | Adds package dependencies to the project and removes package dependencies from the project. Requesting different dependencies often leads to changing installed packages, but only after the Package Manager constructs a dependency graph to solve any version conflicts. For more information, see Dependency and resolution.

                Calling this function is much more efficient than calling the Add and Remove functions several times because for this function, the Package Manager only has to solve the dependency list once, instead of constructing a new dependency graph after each call. |
| ClearCache | Empties the package cache. |
| Embed | Embeds a package inside the project. |
| List | Lists the packages the project depends on. |
| Pack | Creates a GZip tarball file from a package folder. The format and content of the file is the same as if the package was published to a package registry. |
| Remove | Removes a package dependency from the project. Removing a dependency often leads to changing installed packages, but only after the Package Manager constructs a dependency graph to solve any version conflicts. |
| Resolve | Forces the Package Manager to resolve the project's packages, reinstalling any altered or missing package and removing extraneous packages. |
| Search | Searches for packages in the Unity Package Registry. Returns a SearchRequest object that provides access to matching packages. |
| SearchAll | Searches for all discoverable packages compatible with the current Unity version. |


            
