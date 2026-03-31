This version of Unity is unsupported.



# ConverterGroups





class in
          UnityEngine.UIElements



/



Implemented in:[UnityEngine.UIElementsModule](UnityEngine.UIElementsModule.html)


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



Provides a set of static methods to register and use converter groups and registers a set of global converters.
 [ConverterGroup](UIElements.ConverterGroup.html).
 [DataBinding](UIElements.DataBinding.html).





### Static Methods



| Method | Description |
| --- | --- |
| RegisterConverterGroup | Registers a converter group by ID. Converter groups can be applied on a binding using local converters. |
| RegisterGlobalConverter | Registers a global UI conversion delegate that will be used when converting data between a data source and a
 UI control. This delegate will be used both when converting data from and to UI. |
| TryConvert | Converts the specified value from TSource to TDestination using the registered global converters. |
| TryGetConverterGroup | Retrieves a converter group by ID. |
| TrySetValueGlobal | Sets the value of a property at the given path to the given value, using the global converters. |


            
