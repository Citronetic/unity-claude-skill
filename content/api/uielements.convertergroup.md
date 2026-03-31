This version of Unity is unsupported.



# ConverterGroup





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



A type to hold information about a conversion registry used locally on bindings.





You can apply converter groups on a [DataBinding](UIElements.DataBinding.html) in UXML with the `source-to-ui-converters` or
 `ui-to-source-converters` attributes or in C# script with the [DataBinding.ApplyConverterGroupToSource](UIElements.DataBinding.ApplyConverterGroupToSource.html) or
 [DataBinding.ApplyConverterGroupToUI](UIElements.DataBinding.ApplyConverterGroupToUI.html) methods.





### Properties



| Property | Description |
| --- | --- |
| description | Optional description for a converter group ID that may include information about what this group contains
 or is used for, to be displayed to users to assist while authoring. |
| displayName | Optional and alternative name for a converter group ID, to be displayed to users to assist while authoring. |
| id | The group id. |





### Constructors



| Constructor | Description |
| --- | --- |
| ConverterGroup | Creates a ConverterGroup. |





### Public Methods



| Method | Description |
| --- | --- |
| AddConverter | Adds a converter to the group. |
| TryConvert | Converts the specified value from TSource to TDestination using only the converter group. |
| TrySetValue | Sets the value of a property at the given path to the given value, using this converter group or the global ones. |


            
