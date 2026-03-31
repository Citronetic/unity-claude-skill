This version of Unity is unsupported.



# SearchExpressionRuntime





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



Encapsulate all the runtime data needed to evaluate a root expression and all its parameters. This class contains the [SearchContext](Search.SearchContext.html) that created the root [SearchExpression](Search.SearchExpression.html) and all the stack frames needed to evaluate all the nested [SearchExpression](Search.SearchExpression.html).





### Properties



| Property | Description |
| --- | --- |
| current | Current SearchExpressionContext corresponding to the stack frame being evaluated. |
| frames | The stack of all SearchExpressionContext being evaluated. |
| items | The stack of SearchItems that have been yielded by each execution frame. |
| search | Initial SearchContext contaning the text that was used to parse the initial root SearchExpression. |
| valid | Is the current runtime valid. This means are there any SearchExpressionContext being evaluated. |





### Public Methods



| Method | Description |
| --- | --- |
| Push | Push a new SearchExpression with its arguments to be evaluated. This is useful if a user defined evaluator needs to generate a new Context of evaluation. |
| ToString | Get a string representation of the current SearchExpressionRuntime. |


            
