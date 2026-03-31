This version of Unity is unsupported.



# [QueryEngine<T0>](Search.QueryEngine_1.html).GetOperator




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

public [Search.QueryFilterOperator](Search.QueryFilterOperator.html) GetOperator(string op);






### Parameters



| Parameter | Description |
| --- | --- |
| op | The operator identifier. |





### Returns



**QueryFilterOperator**
        The global [QueryFilterOperator](Search.QueryFilterOperator.html).





### Description



Get a custom operator added on the [QueryEngine](Search.QueryEngine_1.html).





This method returns a [QueryFilterOperator](Search.QueryFilterOperator.html) that was added on the [QueryEngine](Search.QueryEngine_1.html). If the operator does not exist, the [QueryFilterOperator](Search.QueryFilterOperator.html) will be invalid (see [QueryFilterOperator.valid](Search.QueryFilterOperator-valid.html)).


              


```
// Get an operator based on its token and add some handlers on it.
var operatorToken = "%";
var operatorObject = queryEngine.GetOperator(operatorToken);
if (operatorObject.valid)
    operatorObject.AddHandler((float ev, float fv) => Math.Abs(ev % fv) < 0.0000001f);
```





See [AddOperator](Search.QueryEngine_1.AddOperator.html) for a complete example.


            
