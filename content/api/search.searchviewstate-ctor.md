This version of Unity is unsupported.



# SearchViewState Constructor




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

public SearchViewState([Search.SearchContext](Search.SearchContext.html) context);






## Declaration

public SearchViewState([Search.SearchContext](Search.SearchContext.html) context,
[Search.SearchViewFlags](Search.SearchViewFlags.html) flags);






### Parameters



| Parameter | Description |
| --- | --- |
| context | Initial search context. |
| flags | Initial search view flags. |





### Description



Create search view flags used to create a new Search window.





See [SearchService.ShowWindow](Search.SearchService.ShowWindow.html).




---








## Declaration

public SearchViewState([Search.SearchContext](Search.SearchContext.html) context,
[Search.SearchTable](Search.SearchTable.html) tableConfig,
[Search.SearchViewFlags](Search.SearchViewFlags.html) flags);






### Parameters



| Parameter | Description |
| --- | --- |
| context | Initial search context. |
| tableConfig | Initial search table configuration. |
| flags | Initial search view flags. |





### Description



Creates a search view that will be opened in table view.




---








## Declaration

public SearchViewState([Search.SearchContext](Search.SearchContext.html) context,
Action<Object,bool> selectObjectHandler,
Action<Object> trackingObjectHandler,
string typeName,
Type filterType);






### Parameters



| Parameter | Description |
| --- | --- |
| context | Initial search context. |
| selectObjectHandler | Handler executed when the user has selected an object. |
| trackingObjectHandler | Handler executed when the user clicks on an item in the search view. |
| typeName | String type name used to filter items in the search results. This parameter can be defined if the concrete Type cannot be accessed. |
| filterType | Concrete type used to filter items in the search results. |





### Description



Creates a search view state that will be used to open a search picker using [SearchService.ShowPicker](Search.SearchService.ShowPicker.html).




---








## Declaration

public SearchViewState([Search.SearchContext](Search.SearchContext.html) context,
Action<SearchItem,bool> selectHandler);






### Parameters



| Parameter | Description |
| --- | --- |
| context | Initial search context. |
| selectHandler | Handler executed when the user has selected an search result. |





### Description



Creates a search view state that will be used to open a search picker using [SearchService.ShowPicker](Search.SearchService.ShowPicker.html).


            
