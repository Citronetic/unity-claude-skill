This version of Unity is unsupported.



# [PackageManagerExtensions](PackageManager.UI.PackageManagerExtensions.html).RegisterExtension




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

public static void RegisterExtension([PackageManager.UI.IPackageManagerExtension](PackageManager.UI.IPackageManagerExtension.html) extension);






### Parameters



| Parameter | Description |
| --- | --- |
| extension | A Package Manager UI extension. |





### Description



Registers a new Package Manager UI extension.





The example creates an extension button called Log Package Info. The button will appear in the Package Manager details header, and will log the package name and version when pressed.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.PackageManager.UI;
using UnityEngine.UIElements;
using PackageInfo = UnityEditor.PackageManager.PackageInfo;[InitializeOnLoad]
public static class PackageManagerUIExtension
{
    static PackageManagerUIExtension()
    {
        // Register UI extension when Unity starts
        PackageManagerExtensions.RegisterExtension(new CustomPackageManagerExtension());
    }
}// Inherit from IPackageManagerExtension to create your own extension class.
public class CustomPackageManagerExtension : IPackageManagerExtension
{
    private string selectedPackageName = "";
    private Button extensionButton;
    // Create the button.
    public VisualElement CreateExtensionUI()
    {
        extensionButton = new Button(() =>
        {
            if (!string.IsNullOrEmpty(selectedPackageName))
            {
                Debug.Log($"Package Name: {selectedPackageName}");
            }
            else
            {
                Debug.LogWarning("No package selected.");
            }
        })
        {
            text = "Log Package Name"
        };
        return extensionButton;
    }

    // Called when selecting a package (Uses package name)
    public void OnPackageSelectionChange(PackageInfo packageInfo)
    {
        if (packageInfo == null)
        {
            extensionButton.visible = false;
            selectedPackageName = "";
            return;
        }

        extensionButton.visible = true;
        selectedPackageName = packageInfo.name;
        Debug.Log($"Selected Package: {selectedPackageName}");
    }

    public void OnPackageAddedOrUpdated(PackageInfo packages) { }
    public void OnPackageRemoved(PackageInfo packages) { }
}
```


            
