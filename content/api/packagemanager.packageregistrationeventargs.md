This version of Unity is unsupported.



# PackageRegistrationEventArgs





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



Provides information about package registration changes that occur during Package Manager operations.





This class contains details about packages being added, removed, or updated in the project.

**Remarks**



          - Use this class with [Events.registeringPackages](PackageManager.Events-registeringPackages.html) and [Events.registeredPackages](PackageManager.Events-registeredPackages.html) events.

          - The `changedFrom` and `changedTo` collections must be iterated together to maintain package correspondence. They are guaranteed to match in length and ordering.

          - All collections are read-only and can't be modified.

          - Package information in these collections represents the state at the time of the event.

          - The `PackageRegistrationEventArgs` might contain empty collections if no packages were added, removed, or changed.

          - You can use this class to monitor package changes.




              


```
using System;
using UnityEditor.PackageManager;
using UnityEngine;[ExecuteInEditMode]
public class PackageRegistrationExample: MonoBehaviour
{
    void Start()
    {
        SubscribeToPackageEvents();
    }    void OnDestroy()
    {
        Cleanup();
    }    void SubscribeToPackageEvents()
    {
        // Subscribe to the event before packages change
        Debug.Log("Subscribing to registeringPackages");
        Events.registeringPackages += OnPackagesRegistering;
    }    void OnPackagesRegistering(PackageRegistrationEventArgs args)
    {
        // Log added packages
        foreach (var package in args.added)
        {
            Debug.Log($"Adding package: {package.displayName} ({package.version})");
        }        // Log removed packages
        foreach (var package in args.removed)
        {
            Debug.Log($"Removing package: {package.displayName} ({package.version})");
        }        // Log package updates
        using var changes = args.changedFrom.GetEnumerator();
        using var targets = args.changedTo.GetEnumerator();

        while (changes.MoveNext() && targets.MoveNext())
        {
            var oldPackage = changes.Current;
            var newPackage = targets.Current;
            Debug.Log($"Updating {oldPackage?.displayName} from {oldPackage?.version} to {newPackage?.version}");
        }
    }    void Cleanup()
    {
        // Unsubscribe from the event when finished
        Debug.Log("Unsubscribing to registeringPackages");
        Events.registeringPackages -= OnPackagesRegistering;
    }
}
```





**Related information**



          - [Events](PackageManager.Events.html)

          - [Events.registeringPackages](PackageManager.Events-registeringPackages.html)

          - [Events.registeredPackages](PackageManager.Events-registeredPackages.html)

          - [PackageInfo](PackageManager.PackageInfo.html)

          - [Client](PackageManager.Client.html)







### Properties



| Property | Description |
| --- | --- |
| added | A collection of PackageInfo entries to add during the Package Manager registration process. |
| changedFrom | A collection of PackageInfo entries describing packages to be overridden by another version during the Package Manager registration process. |
| changedTo | A collection of PackageInfo entries describing packages that will override a previously registered version during the Package Manager registration process. |
| removed | A collection of PackageInfo entries to remove during the Package Manager registration process. |


            
