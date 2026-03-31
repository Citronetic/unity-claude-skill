This version of Unity is unsupported.



# QueryEngineFilterAttribute





class in
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



Base attribute class used to define a custom filter on a QueryEngine.
All filter types supported by QueryEngine.AddFilter are supported by this attribute.





For a usage example, see [QueryEngine.AddFiltersFromAttribute](Search.QueryEngine_1.AddFiltersFromAttribute.html).





### Properties



| Property | Description |
| --- | --- |
| comparisonOptions | String comparison options. |
| overridesStringComparison | Flag indicating if the filter overrides the global string comparison options.
Set to true when the comparisonOptions are used. |
| paramTransformerFunction | Name of the parameter transformer function to use with this filter.
Tag the parameter transformer function with the appropriate ParameterTransformer attribute. |
| supportedOperators | List of supported operator tokens. Null for all operators. |
| token | The identifier of the filter. Typically what precedes the operator in a filter (i.e. "id" in "id>=2"). |
| useParamTransformer | Flag indicating if this filter uses a parameter transformer function.
Set to true when paramTransformerFunction is used. |
| useRegularExpressionToken | Indicates if the filter uses a regular expression token or not. |





### Constructors



| Constructor | Description |
| --- | --- |
| QueryEngineFilterAttribute | Create a filter with the corresponding token and supported operators. |


            
