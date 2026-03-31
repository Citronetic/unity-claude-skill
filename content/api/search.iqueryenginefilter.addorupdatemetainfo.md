This version of Unity is unsupported.



# [IQueryEngineFilter](Search.IQueryEngineFilter.html).AddOrUpdateMetaInfo




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

public [Search.IQueryEngineFilter](Search.IQueryEngineFilter.html) AddOrUpdateMetaInfo(string key,
string value);






### Parameters



| Parameter | Description |
| --- | --- |
| key | The key of the information. |
| value | The value of the information. |





### Returns



**IQueryEngineFilter**
        The current filter.





### Description



Add or update additional information specific to the filter.





You can use this function to add additional information on the filter.


              


```
// Add a description to the filter
var descriptionKey = "desc";
var descriptionValue = "This filters the objects based on their id.";
var exampleKey = "example";
var exampleValue = "id>10 or id=2";
queryEngine.TryGetFilter("id", out var filter);
filter.AddOrUpdateMetaInfo(descriptionKey, descriptionValue)
    .AddOrUpdateMetaInfo(exampleKey, exampleValue);
```





You can then retrieve that information by accessing the [metaInfo](Search.IQueryEngineFilter-metaInfo.html) property directly.


              


```
var descriptionKey = "desc";
var allFilters = queryEngine.GetAllFilters();
var filtersWithDescription = allFilters.Where(f => f.metaInfo.ContainsKey(descriptionKey));
```





See [metaInfo](Search.IQueryEngineFilter-metaInfo.html) for a complete example.


            
