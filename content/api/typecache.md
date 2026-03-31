This version of Unity is unsupported.



# TypeCache





class in
          UnityEditor


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



Provides methods for fast type extraction from assemblies loaded into the Unity Domain.





Use `TypeCache` to access attributes and derived types information. This cache allows arbitrary Editor code to achieve better performance, compared to using System.Reflection, by leveraging a native cached type information.

It is a common use case to extract types marked with a specific attribute, or for classes that extend or implement a specific type, when building or extending the Unity Editor.
Iterating types in the current domain is usually a slow operation that scales linearly based on the number of types.

To speed up type extraction, the Editor builds an acceleration table, on the native side, that contains information about type attributes and derived classes and interfaces.


              


```
using UnityEditor;
using System;
using System.Collections.Generic;
using System.Linq;public class VolumeComponent {}public class Example
{
    static List<Type> s_VolumeComponents;
    static Example()
    {
        s_VolumeComponents = TypeCache.GetTypesDerivedFrom<VolumeComponent>().ToList();
    }
}
```





### Static Methods



| Method | Description |
| --- | --- |
| GetFieldsWithAttribute | Retrieves an unordered collection of fields marked with the T attribute. |
| GetMethodsWithAttribute | Retrieves an unordered collection of methods marked with the T attribute. |
| GetTypesDerivedFrom | Retrieves an unordered collection of types derived from the T type. |
| GetTypesWithAttribute | Retrieves an unordered collection of types marked with the T attribute. |


            
