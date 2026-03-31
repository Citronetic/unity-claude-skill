This version of Unity is unsupported.



# [SearchUtils](Search.SearchUtils.html).CreateGroupProvider




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

public static [Search.SearchProvider](Search.SearchProvider.html) CreateGroupProvider([Search.SearchProvider](Search.SearchProvider.html) templateProvider,
string groupId,
int groupPriority,
bool cacheProvider);






### Parameters



| Parameter | Description |
| --- | --- |
| templateProvider | Search provider template to copy. |
| groupId | New group id. This id is also used as the display name for the group tab if displayed in the ISearchView. |
| groupPriority | Priority used to order the group tab in the ISearchView. |
| cacheProvider | Ask the system to cache the provider in case the function gets called with the same ID later. |





### Returns



**SearchProvider**
        A new search provider that can be used temporarily for a given search session.





### Description



Copy of a search provider to create a new group copy.





This can be useful to base a new search provider on an existing one simply by replacing a few handlers. Note that this search provider will not be globally available, in example with [SearchService.GetProvider](Search.SearchService.GetProvider.html).


              


```
static SearchProvider CreateDecalProvider()
{
    var assetProvider = SearchService.GetProvider("asset");
    var decalProvider = SearchUtils.CreateGroupProvider(assetProvider, "Decals", 0, true);
    decalProvider.fetchPropositions = EnumerateDecalPropositions;
    return decalProvider;
}
```


            
