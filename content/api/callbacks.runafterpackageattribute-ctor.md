This version of Unity is unsupported.



# RunAfterPackageAttribute Constructor




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















## Declaration

public RunAfterPackageAttribute(string packageName);






### Parameters



| Parameter | Description |
| --- | --- |
| packageName | The name of the package that should be run before this callback. |





### Description



Add this attribute to a callback method to mark that this callback must be run after any callbacks that are part of the specified package.





To define dependencies for a callback, use the following attributes:



          - [RunAfterClassAttribute](Callbacks.RunAfterClassAttribute.html), [RunBeforeClassAttribute](Callbacks.RunBeforeClassAttribute.html)

          - [RunAfterAssemblyAttribute](Callbacks.RunAfterAssemblyAttribute.html), [RunBeforeAssemblyAttribute](Callbacks.RunBeforeAssemblyAttribute.html)

          - [RunAfterPackageAttribute](Callbacks.RunAfterPackageAttribute.html), [RunBeforePackageAttribute](Callbacks.RunBeforePackageAttribute.html)





When the callback is invoked, Unity generates a dependency graph and uses topological sorting to ensure that all dependencies are run in sequence based on their dependencies. If callbacks dependencies are not present in the project then the instruction will be ignored during the generation of the dependency graph.

**Note:** Defining callback dependencies is currently only supported by the [AssetPostprocessor.OnPostprocessAllAssets](AssetPostprocessor.OnPostprocessAllAssets.html) callback.


              


```
using UnityEditor;
using UnityEditor.Callbacks;// This will be run between the Addressables and Localization packages.
class Example : AssetPostprocessor
{
    [RunAfterPackage("com.unity.addressables")]
    [RunBeforePackage("com.unity.localization")]
    static void OnPostprocessAllAssets(string[] importedAssets, string[] deletedAssets, string[] movedAssets, string[] movedFromAssetPaths)
    {
    }
}
```


            
