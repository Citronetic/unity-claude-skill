This version of Unity is unsupported.



# [IQueryEngineFilter](Search.IQueryEngineFilter.html).ClearMetaInfo




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

public [Search.IQueryEngineFilter](Search.IQueryEngineFilter.html) ClearMetaInfo();






### Returns



**IQueryEngineFilter**
        The current filter.





### Description



Removes all additional information specific to the filter.


              


```
filter.ClearMetaInfo();
var filtersWithMetaInfo = queryEngine.GetAllFilters().Where(f => f.metaInfo.Count > 0);
Debug.Assert(!filtersWithMetaInfo.Contains(filter), "Filter \"id\" should not have any meta info.");
```


            
