This version of Unity is unsupported.



# [SearchExpressionRuntime](Search.SearchExpressionRuntime.html).Push




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

public IDisposable Push([Search.SearchExpression](Search.SearchExpression.html) searchExpression,
IEnumerable<SearchExpression> args);






## Declaration

public IDisposable Push([Search.SearchItem](Search.SearchItem.html) item);










### Parameters



| Parameter | Description |
| --- | --- |
| searchExpression | Expression to evaluate. |
| args | Parameters passed to the expression to evaluate. |
| flags | Exeution Flags used to add to the flags specified in the expression being evaluated. |
| item | Push a new yielded item in the current evaluation frame. |





### Returns



**IDisposable**
        Returns a new disposable Scope. When out this scope is disposed the newly created SearchExpressionContext will be removed from the frames.





### Description



Push a new [SearchExpression](Search.SearchExpression.html) with its arguments to be evaluated. This is useful if a user defined evaluator needs to generate a new Context of evaluation.


            
