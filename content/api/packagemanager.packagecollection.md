This version of Unity is unsupported.



# PackageCollection





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



A collection class that represents all packages in a Unity project, providing enumeration and error handling capabilities for package management operations.





Implements IEnumerable <[PackageInfo](PackageManager.PackageInfo.html)> interface.

The PackageCollection class serves as a container for [PackageInfo](PackageManager.PackageInfo.html) objects representing all packages in a Unity project.
PackageCollection information is typically obtained as the result of a [Client.List](PackageManager.Client.List.html)() operation. Use the PackageCollection to iterate through packages and check for collection-level errors that might occur during package resolution.


              


```
using UnityEditor.PackageManager;
using UnityEditor.PackageManager.Requests;
using UnityEngine;public class PackageExample
{
    void ListAllPackages()
    {
        ListRequest request = Client.List();

        while(!request.IsCompleted) {}        if (request.Status == StatusCode.Success)
        {
            PackageCollection packages = request.Result;

            // Check for collection-level errors
            if (packages.error != null)
            {
                Debug.LogError($"Collection error: {packages.error}");
                return;
            }            // Enumerate through packages
            foreach (PackageInfo package in packages)
            {
                Debug.Log($"Found package: {package.name} @ {package.version}");
            }
        }
    }
}
```





**Remarks**



          - After the PackageCollection is created, it's immutable.

          - Package enumeration order isn't guaranteed.

          - Collection-level errors indicate issues with the overall package resolution, not with individual packages.

          - The collection can contain direct dependencies and transitive dependencies.

          - Use in conjunction with [Client.List](PackageManager.Client.List.html)() to get an up-to-date view of project packages.





**Related information**



          - [PackageInfo](PackageManager.PackageInfo.html)

          - [Client.List](PackageManager.Client.List.html)

          - [ListRequest](PackageManager.Requests.ListRequest.html)







### Properties



| Property | Description |
| --- | --- |
| error | The error associated with the package collection. |


            
