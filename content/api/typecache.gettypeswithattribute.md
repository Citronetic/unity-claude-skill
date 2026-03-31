This version of Unity is unsupported.



# [TypeCache](TypeCache.html).GetTypesWithAttribute




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

public static [TypeCache.TypeCollection](TypeCache.TypeCollection.html) GetTypesWithAttribute();






## Declaration

public static [TypeCache.TypeCollection](TypeCache.TypeCollection.html) GetTypesWithAttribute(Type attrType);






## Declaration

public static [TypeCache.TypeCollection](TypeCache.TypeCollection.html) GetTypesWithAttribute(string assemblyName);






## Declaration

public static [TypeCache.TypeCollection](TypeCache.TypeCollection.html) GetTypesWithAttribute(Type attrType,
string assemblyName);






### Parameters



| Parameter | Description |
| --- | --- |
| attrType | Attribute type. |
| assemblyName | Optional assembly name. |





### Returns



**TypeCollection**
        Returns an unordered collection of types. If assemblyName is specified, returns only types defined in this assembly.





### Description



Retrieves an unordered collection of types marked with the **T** attribute.





This method provides fast access to all classes loaded from a given assembly or all Unity domain assemblies and marked with a specific attribute. Types marked with ancestors of the specified attribute are also included in the result. The order of results is undefined.


              


```
using UnityEditor;public class Example
{
    static void ScanTypesWithAttribute()
    {
        var extractedTypes = TypeCache.GetTypesWithAttribute<CustomEditor>();
        foreach (var m in extractedTypes)
        {
            //...
        }
    }
}
```





**Note:** The returned [TypeCollection](TypeCache.TypeCollection.html) is read-only and thread-safe. The order of types in the collection is undefined.


            
