This version of Unity is unsupported.



# RunBeforeAssemblyAttribute





class in
          UnityEditor.Callbacks


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



Add this attribute to a callback method to indicate that this callback must be run before any callbacks that are part of the specified assembly.





To define dependencies for a callback, use the following attributes:



          - [RunAfterClassAttribute](Callbacks.RunAfterClassAttribute.html), [RunBeforeClassAttribute](Callbacks.RunBeforeClassAttribute.html)

          - [RunAfterAssemblyAttribute](Callbacks.RunAfterAssemblyAttribute.html), [RunBeforeAssemblyAttribute](Callbacks.RunBeforeAssemblyAttribute.html)

          - [RunAfterPackageAttribute](Callbacks.RunAfterPackageAttribute.html), [RunBeforePackageAttribute](Callbacks.RunBeforePackageAttribute.html)





When the callback is invoked, Unity generates a dependency graph and uses topological sorting to ensure that all dependencies are run in sequence based on their dependencies. If callbacks dependencies are not present in the project then the instruction will be ignored during the generation of the dependency graph.

**Note:** Defining callback dependencies is currently only supported by the [AssetPostprocessor.OnPostprocessAllAssets](AssetPostprocessor.OnPostprocessAllAssets.html) callback.


              


```
using UnityEditor;
using UnityEditor.Callbacks;
using UnityEngine;// This example shows how to ensure that a callback is called before the Addressables assembly has been called.
class MyPostprocessor : AssetPostprocessor
{
    [RunBeforeAssembly("Unity.Addressables.Editor")]
    static void OnPostprocessAllAssets(string[] importedAssets, string[] deletedAssets, string[] movedAssets, string[] movedFromAssetPaths)
    {
        Debug.Log("MyAllPostprocessor");
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| assemblyName | The name of the assembly that should be called after this callback. |





### Constructors



| Constructor | Description |
| --- | --- |
| RunBeforeAssemblyAttribute | Add this attribute to a callback method to indicate that this callback must be run before any callbacks that are part of the specified assembly. |


            
