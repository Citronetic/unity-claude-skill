This version of Unity is unsupported.



# [Sample](PackageManager.UI.Sample.html).FindByPackage




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

public static IEnumerable<Sample> FindByPackage(string packageName,
string packageVersion);






### Parameters



| Parameter | Description |
| --- | --- |
| packageName | The name of the package. |
| packageVersion | The version of the package. |





### Returns



**IEnumerable<Sample>**
        Returns a list of found samples. Returns an empty list if no samples were found.





### Description



Finds a list of samples in a package based on a specific version.





The example creates an Editor menu item called Example. When you select Example > Import Sample, a window opens with the default packageName and an "Import Sample" button.


              


```
using UnityEditor;
using UnityEditor.PackageManager.UI;
using System.Linq;
using UnityEngine;
public class SampleImporter : EditorWindow
{
    // Change this to the package you want to import the sample from.
    private string packageName = "com.unity.timeline";
    private bool showSamples = false;    [MenuItem("Example/Import Sample")]
    public static void ShowWindow()
    {
        GetWindow<SampleImporter>("Sample Importer");
    }
    private void OnGUI()
    {
        GUILayout.Label("Import Sample from Package", EditorStyles.boldLabel);
        packageName = EditorGUILayout.TextField("Package Name", packageName);
        // This part adds an action function to the button.
        if (GUILayout.Button("Show Samples"))
        {
            showSamples = true;
        }

        if(showSamples)
            ShowSamples(packageName);
    }
    private void ShowSamples(string packageName)
    {
        // Setting the version to null automatically takes the recommended or latest package version.
        // You can optionally import a specific version of the package by replacing "null" by the specific version of that package.
        // Get all samples from the package.
        var samples = Sample.FindByPackage(packageName, null);
        // If nothing is returned, then this package doesn't contain samples.
        if (samples == null || !samples.Any())
        {
            GUILayout.Label($"No samples found for package: {packageName}", EditorStyles.boldLabel);
            return;
        }
        foreach (var sample in samples)
        {
            GUILayout.Label($"Found sample: {sample.displayName}");
            // Give the option to import the sample if it isn't in the project.
            // If the sample is already in the project, only show a message in the Example window.
            if (!sample.isImported)
            {
                GUILayout.Label($"Sample '{sample.displayName}' is not imported.");
            }
            else
            {
                GUILayout.Label($"Sample '{sample.displayName}' is imported.");
            }
        }
    }
}
```


            
