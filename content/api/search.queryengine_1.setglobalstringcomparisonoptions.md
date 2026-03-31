This version of Unity is unsupported.



# [QueryEngine<T0>](Search.QueryEngine_1.html).SetGlobalStringComparisonOptions




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

public void SetGlobalStringComparisonOptions(stringComparison stringComparison);






### Parameters



| Parameter | Description |
| --- | --- |
| stringComparison | String comparison options. |





### Description



Sets global string comparison options. Used for word matching and filter handling (unless overridden by filter).





Calling this function will set the global string comparison options used for word and filter matching:


              


```
// Set the global string comparison options (default is OrdinalIgnoreCase)
queryEngine.SetGlobalStringComparisonOptions(StringComparison.Ordinal);
```





See [QueryEngine.AddOperatorHandler](Search.QueryEngine_1.AddOperatorHandler.html) for a complete example.


            
