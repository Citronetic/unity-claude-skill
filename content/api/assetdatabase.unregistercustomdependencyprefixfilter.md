This version of Unity is unsupported.



# [AssetDatabase](AssetDatabase.html).UnregisterCustomDependencyPrefixFilter




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

public static uint UnregisterCustomDependencyPrefixFilter(string prefixFilter);






### Parameters



| Parameter | Description |
| --- | --- |
| prefixFilter | Prefix filter for the custom dependencies to unregister. |





### Returns



**uint**
        Number of custom dependencies removed.





### Description



Removes custom dependencies that match the prefixFilter.


              


```
using UnityEngine;
using UnityEditor;
using UnityEngine.Assertions;
public class CustomDependenciesExample
{
    public static void AddAndRemoveCustomDependencies()
    {
        // Example to to illustrate how UnregisterCustomDependencyPrefixFilter works. Not a useful scenario.
        AssetDatabase.RegisterCustomDependency("MyDependencySystem/DepA", Hash128.Compute("Hello"));
        AssetDatabase.RegisterCustomDependency("MyDependencySystem/DepB", Hash128.Compute("World"));        var unregistered = AssetDatabase.UnregisterCustomDependencyPrefixFilter("MyDependencySystem/");
        Assert.AreEqual(2, unregistered);
    }
}
```


            
