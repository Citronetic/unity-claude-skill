This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).importPackageCompleted




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



















### Description



Callback raised whenever a package import successfully completes.


              


```
using UnityEditor;
using UnityEngine;[InitializeOnLoad]
public class AssetDatabaseExamples
{
    static AssetDatabaseExamples()
    {
        AssetDatabase.importPackageStarted += OnImportPackageStarted;
        AssetDatabase.importPackageCompleted += OnImportPackageCompleted;
        AssetDatabase.importPackageFailed += OnImportPackageFailed;
        AssetDatabase.importPackageCancelled += OnImportPackageCancelled;
    }    private static void OnImportPackageCancelled(string packageName)
    {
        Debug.Log($"Cancelled the import of package: {packageName}");
    }    private static void OnImportPackageCompleted(string packagename)
    {
        Debug.Log($"Imported package: {packagename}");
    }    private static void OnImportPackageFailed(string packagename, string errormessage)
    {
        Debug.Log($"Failed importing package: {packagename} with error: {errormessage}");
    }    private static void OnImportPackageStarted(string packagename)
    {
        Debug.Log($"Started importing package: {packagename}");
    }
}
```


            
