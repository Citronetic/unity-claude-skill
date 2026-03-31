This version of Unity is unsupported.



# [IQueryEngineFilter](Search.IQueryEngineFilter.html).RemoveMetaInfo




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

public [Search.IQueryEngineFilter](Search.IQueryEngineFilter.html) RemoveMetaInfo(string key);






### Parameters



| Parameter | Description |
| --- | --- |
| key | The key of the information. |





### Returns



**IQueryEngineFilter**
        The current filter.





### Description



Remove information on the filter.





You can use this function to remove additional information that is no longer needed.


              


```
var descriptionMetaInfoKey = "desc";
filter.RemoveMetaInfo(descriptionMetaInfoKey);
```





See [metaInfo](Search.IQueryEngineFilter-metaInfo.html) for a complete example.


            
