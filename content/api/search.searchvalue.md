This version of Unity is unsupported.



# SearchValue





struct in
          UnityEditor.Search


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



[SearchValue](Search.SearchValue.html) is used to extend a [QueryEngine](Search.QueryEngine.html) with custom type parsers and filter operators to search results by value.





A [SearchValue](Search.SearchValue.html) is a structure that can hold a value of any type defined in [SearchValue.ValueType](Search.SearchValue.ValueType.html).
You can use this structure to add filtering capabilities to any [QueryEngine](Search.QueryEngine.html) for all the types supported in [SearchValue.ValueType](Search.SearchValue.ValueType.html). See [SearchValue.SetupEngine](Search.SearchValue.SetupEngine.html) for more details.





### Static Properties



| Property | Description |
| --- | --- |
| invalid | Represent an invalid search value. |





### Properties



| Property | Description |
| --- | --- |
| boolean | Boolean value. |
| floatNumber | Number value. |
| text | Text representation of the value. |
| type | Indicates the concrete type of the search value. |
| valid | Indicates if the search value is valid. |





### Static Methods



| Method | Description |
| --- | --- |
| SetupEngine | Extend a QueryEngine to work with SearchValues. |


            
