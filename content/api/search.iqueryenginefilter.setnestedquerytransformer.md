This version of Unity is unsupported.



# [IQueryEngineFilter](Search.IQueryEngineFilter.html).SetNestedQueryTransformer




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

public void SetNestedQueryTransformer(Func<TNestedQueryData,TRhs> transformer);






### Parameters



| Parameter | Description |
| --- | --- |
| transformer | The transformer function. |





### Description



Sets the filter's nested query transformer function. This function takes the result of a nested query and extracts the necessary data to compare with the filter.


            
