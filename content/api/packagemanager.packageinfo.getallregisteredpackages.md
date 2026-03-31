This version of Unity is unsupported.



# [PackageInfo](PackageManager.PackageInfo.html).GetAllRegisteredPackages




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

public static PackageInfo[] GetAllRegisteredPackages();






### Returns



**PackageInfo[]**
        The array of [PackageInfo](PackageManager.PackageInfo.html) instances describing each package.





### Description



Retrieves information about all packages that are currently loaded.





          - The results include all packages in the current project, regardless of the package source.

          - This method returns cached information, which might not reflect recent changes.

          - This method is more efficient than [Client.List](PackageManager.Client.List.html) for quick package checks.




              


```
using UnityEngine;
using UnityEditor.PackageManager;
[ExecuteInEditMode]
public class PackageManagerRegisteredExample : MonoBehaviour
{
    void Start()
    {
        Debug.Log("GetAllRegisteredPackages example...");
        ListRegisteredPackages();
    }    void ListRegisteredPackages()
    {
        PackageInfo[] packages = PackageInfo.GetAllRegisteredPackages();

        Debug.Log($"Found {packages.Length} registered packages:");

        foreach (var package in packages)
        {
            Debug.Log($"- {package.name}" +
                $"\n  Version: {package.version}" +
                $"\n  Source: {package.source}");
        }
    }
}
```





**Related information**



          - [Client.List](PackageManager.Client.List.html)

          - [PackageSource](PackageManager.PackageSource.html)

          - [PackageInfo](PackageManager.PackageInfo.html)




            
