This version of Unity is unsupported.



# [Events](PackageManager.Events.html).registeredPackages




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














### Parameters



| Parameter | Description |
| --- | --- |
| value | A PackageRegistrationEventArgs structure describing the modifications to the registered packages list. |





### Description



Event raised after applying changes to the registered packages list.





This event triggers after the asset database refresh completes, which occurs after scripts compile and the domain reloads, if necessary. When you add, update, or remove a package that contains code, a [domain reload](../Manual/domain-reloading.html) occurs, which resets registered event handlers. To ensure that your event handler is called, use [InitializeOnLoadAttribute](InitializeOnLoadAttribute.html) or [InitializeOnLoadMethodAttribute](InitializeOnLoadMethodAttribute.html) to register the event handler after the domain reload occurs but before the event triggers.
 **Note:** There is no guarantee that the [AssetPostprocessor](AssetPostprocessor.html) will finish by the time this event is raised, so don't rely on the execution order for post-processing events.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.PackageManager;[ExecuteInEditMode]
public class PackageRegistrationExample : MonoBehaviour
{
    static PackageRegistrationExample()
    {
        Events.registeredPackages += OnPackagesRegistered;
    }

    void Start()
    {
        Client.Add("com.unity.textmeshpro");
    }    static void OnPackagesRegistered(PackageRegistrationEventArgs args)
    {
        // Report added packages
        if (args.added.Count > 0)
        {
            Debug.Log("Packages added:");
            foreach (var package in args.added)
            {
                Debug.Log($"- {package.name} ({package.version})");
            }
        }        // Report removed packages
        if (args.removed.Count > 0)
        {
            Debug.Log("Packages removed:");
            foreach (var package in args.removed)
            {
                Debug.Log($"- {package.name}");
            }
        }        // Report changed packages
        for (int i = 0; i < args.changedFrom.Count; i++)
        {
            var oldPackage = args.changedFrom[i];
            var newPackage = args.changedTo[i];
            Debug.Log($"Package updated: {oldPackage.name}" +
                $"\nFrom: {oldPackage.version}" +
                $"\nTo: {newPackage.version}");
        }
    }
}
```





**Related information**



          - [Events.registeringPackages](PackageManager.Events-registeringPackages.html)

          - [PackageRegistrationEventArgs](PackageManager.PackageRegistrationEventArgs.html)

          - [Client.Add](PackageManager.Client.Add.html)




            
