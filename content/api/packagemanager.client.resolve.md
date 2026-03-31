This version of Unity is unsupported.



# [Client](PackageManager.Client.html).Resolve




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

public static void Resolve();






### Description



Forces the Package Manager to resolve the project's packages, reinstalling any altered or missing package and removing extraneous packages.





Forces the Package Manager to resolve the project's packages to ensure they are up-to-date and unchanged. If the packages are already up-to-date, no event is raised.


**Note:** Make sure any other Client operations complete before calling this method. For more information, refer to the note on the [Client](PackageManager.Client.html) class reference page.


              


```
using UnityEngine;
using UnityEditor.PackageManager;
using UnityEditor;
[ExecuteInEditMode]
public class PackageManagerClientResolveExample : MonoBehaviour
{
    void Start()
    {
        Debug.Log("Client.Resolve example...");        // Optionally listen for package events, raised if packages are getting added or removed
        Events.registeringPackages += OnPackagesRegistering;
        Events.registeredPackages += OnPackagesRegistered;        ResolvePackages();
    }    void ResolvePackages()
    {
        // Trigger resolution
        Client.Resolve();
    }    void OnPackagesRegistering(PackageRegistrationEventArgs args)
    {    }    void OnPackagesRegistered(PackageRegistrationEventArgs args)
    {    }
}
```


            
