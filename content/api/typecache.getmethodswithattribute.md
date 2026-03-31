This version of Unity is unsupported.



# [TypeCache](TypeCache.html).GetMethodsWithAttribute




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

public static [TypeCache.MethodCollection](TypeCache.MethodCollection.html) GetMethodsWithAttribute();






## Declaration

public static [TypeCache.MethodCollection](TypeCache.MethodCollection.html) GetMethodsWithAttribute(Type attrType);






## Declaration

public static [TypeCache.MethodCollection](TypeCache.MethodCollection.html) GetMethodsWithAttribute(string assemblyName);






## Declaration

public static [TypeCache.MethodCollection](TypeCache.MethodCollection.html) GetMethodsWithAttribute(Type attrType,
string assemblyName);






### Parameters



| Parameter | Description |
| --- | --- |
| attrType | Attribute type. |
| assemblyName | Optional assembly name. |





### Returns



**MethodCollection**
        Returns an unordered [MethodInfo](Profiling.FrameDataView.MethodInfo.html) collection of methods marked with the **T** attribute. If assemblyName is specified, returns only methods defined in this assembly.





### Description



Retrieves an unordered collection of methods marked with the **T** attribute.





This method provides fast access to all methods loaded from a given assembly or all Unity domain assemblies and marked with a specific attribute. Methods marked with ancestors of the specified attribute are also included in the result. The order of results is undefined.


              


```
using UnityEditor;
using System.Collections.Generic;public class Example
{
    static void ScanInitializeOnLoadMethods()
    {
        var extractedMethods = TypeCache.GetMethodsWithAttribute<InitializeOnLoadMethodAttribute>();
        foreach (var m in extractedMethods)
        {
            if (m.IsPrivate)
                continue;
            //...
        }        for (int i = 0; i < extractedMethods.Count; ++i)
        {
            if (extractedMethods[i].IsPublic)
                continue;
            //...
        }
    }
}
```





**Note:** The returned [MethodCollection](TypeCache.MethodCollection.html) is read-only and thread-safe. The order of [MethodInfo](Profiling.FrameDataView.MethodInfo.html) in the collection is undefined.


            
