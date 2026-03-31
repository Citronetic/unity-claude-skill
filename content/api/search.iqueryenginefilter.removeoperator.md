This version of Unity is unsupported.



# [IQueryEngineFilter](Search.IQueryEngineFilter.html).RemoveOperator




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

public [Search.IQueryEngineFilter](Search.IQueryEngineFilter.html) RemoveOperator(string op);






### Parameters



| Parameter | Description |
| --- | --- |
| op | The operator identifier. |





### Returns



**IQueryEngineFilter**
        The current filter.





### Description



Remove a custom operator specific to the filter.





This removes a custom operator that is specific to this filter. When removed, it will no longer override the default operators of the [QueryEngine](Search.QueryEngine_1.html).


            
