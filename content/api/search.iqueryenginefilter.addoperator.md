This version of Unity is unsupported.



# [IQueryEngineFilter](Search.IQueryEngineFilter.html).AddOperator




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

public [Search.QueryFilterOperator](Search.QueryFilterOperator.html) AddOperator(string op);






### Parameters



| Parameter | Description |
| --- | --- |
| op | The operator identifier. |





### Returns



**QueryFilterOperator**
        The added, or existing, [QueryFilterOperator](Search.QueryFilterOperator.html).





### Description



Add a custom filter operator specific to the filter.





Custom operators defined on a filter take precedence over operators defined globally on the [QueryEngine](Search.QueryEngine_1.html). This is useful if you wish to have a custom operator only for a specific filter, or if you wish to override the default behavior of a built-in operator for a specific filter. If the operator already exists, the existing operator is returned.


              


```
// Override global operators with specific operator handlers for this filter
filter.AddOperator("=").AddHandler((Vector2 ev, Vector2 fv) => ev == fv);
filter.AddOperator("!=").AddHandler((Vector2 ev, Vector2 fv) => ev != fv);
```





See [IQueryEngineFilter](Search.IQueryEngineFilter.html) for a complete example.


            
