This version of Unity is unsupported.



# [TypeCache](TypeCache.html).GetTypesDerivedFrom




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

public static [TypeCache.TypeCollection](TypeCache.TypeCollection.html) GetTypesDerivedFrom();






## Declaration

public static [TypeCache.TypeCollection](TypeCache.TypeCollection.html) GetTypesDerivedFrom(Type parentType);






## Declaration

public static [TypeCache.TypeCollection](TypeCache.TypeCollection.html) GetTypesDerivedFrom(string assemblyName);






## Declaration

public static [TypeCache.TypeCollection](TypeCache.TypeCollection.html) GetTypesDerivedFrom(Type parentType,
string assemblyName);






### Parameters



| Parameter | Description |
| --- | --- |
| parentType | Type of a class or interface. |
| assemblyName | Optional assembly name. |





### Returns



**TypeCollection**
        Returns an unordered collection of derived types. If assemblyName is specified, returns only types defined in this assembly.





### Description



Retrieves an unordered collection of types derived from the **T** type.





This method provides fast access to all classes loaded from a given assembly or all Unity domain assemblies, which are derived from a specific class or implement a specific interface. Base class or interface can be a generic. The order of results is undefined.


              


```
using UnityEditor;public class Example
{
    static void ScanAssetPostprocessors()
    {
        var extractedTypes = TypeCache.GetTypesDerivedFrom<AssetPostprocessor>();
        foreach (var editors in extractedTypes)
        {
            //...
        }
    }
}
```





Or classes which implement a specific interface.


              


```
using UnityEditor;public interface IExampleInterface {}public class Example
{
    static void ScanInterfaceImplementers()
    {
        var extractedTypes = TypeCache.GetTypesDerivedFrom<IExampleInterface>();
        foreach (var editors in extractedTypes)
        {
            //...
        }
    }
}
```





**Note:** The returned [TypeCollection](TypeCache.TypeCollection.html) is read-only and thread-safe. The order of types in the collection is undefined.


            
