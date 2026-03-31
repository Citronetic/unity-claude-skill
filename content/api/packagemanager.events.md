This version of Unity is unsupported.



# Events





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



An interface for accessing the package manager events. Use these events to monitor package changes in your Unity project.





The registeringPackages event fires before any package changes occur.
The registeredPackages event fires after all changes are complete.
Both events provide a [PackageRegistrationEventArgs](PackageManager.PackageRegistrationEventArgs.html) parameter which contains details about the changes.
Events are usually reset during domain reloads, so register your handlers using `[InitializeOnLoad]`.


              


```
using UnityEditor;
using UnityEditor.PackageManager;
using UnityEngine;[InitializeOnLoad]
public class PackageChangeMonitor
{
    static PackageChangeMonitor()
    {
        // Register for package change events
        Events.registeringPackages += OnPackagesRegistering;
        Events.registeredPackages += OnPackagesRegistered;
    }    private static void OnPackagesRegistering(PackageRegistrationEventArgs args)
    {
        // Called before packages are changed
        if (args.added.Count > 0)
            Debug.Log($"About to add {args.added.Count} packages");

        if (args.removed.Count > 0)
            Debug.Log($"About to remove {args.removed.Count} packages");
    }    private static void OnPackagesRegistered(PackageRegistrationEventArgs args)
    {
        // Called after packages have changed
        foreach (var package in args.added)
            Debug.Log($"Added package: {package.name} ({package.version})");

        foreach (var package in args.removed)
            Debug.Log($"Removed package: {package.name}");
    }
}
```





**Related information**



          - [PackageRegistrationEventArgs](PackageManager.PackageRegistrationEventArgs.html)

          - [PackageInfo](PackageManager.PackageInfo.html)

          - [Client](PackageManager.Client.html)







### Events



| Event | Description |
| --- | --- |
| registeredPackages | Event raised after applying changes to the registered packages list. |
| registeringPackages | Event raised before applying changes to the registered packages list. |


            
