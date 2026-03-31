This version of Unity is unsupported.



# [SearchUtils](Search.SearchUtils.html).GetHierarchyPath




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

public static string GetHierarchyPath([GameObject](GameObject.html) gameObject,
bool includeScene);






### Parameters



| Parameter | Description |
| --- | --- |
| gameObject | GameObject to extract a path from. |
| includeScene | If true, will append the scene name to the path. |





### Returns



**string**
        Returns the path of a GameObject.





### Description



Get the hierarchy path of a GameObject including the scene name if includeScene is set to true.


              


```
static string FetchDescription(SearchItem item, SearchContext context)
{
    var go = ObjectFromItem(item);
    return (item.description = SearchUtils.GetHierarchyPath(go));
}
```


            
