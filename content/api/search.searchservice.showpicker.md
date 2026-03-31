This version of Unity is unsupported.



# [SearchService](Search.SearchService.html).ShowPicker




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

public static [Search.ISearchView](Search.ISearchView.html) ShowPicker([Search.SearchContext](Search.SearchContext.html) context,
Action<SearchItem,bool> selectHandler,
Action<SearchItem> trackingHandler,
Func<SearchItem,bool> filterHandler,
IEnumerable<SearchItem> subset,
string title,
float itemSize,
float defaultWidth,
float defaultHeight,
[Search.SearchFlags](Search.SearchFlags.html) flags);






### Parameters



| Parameter | Description |
| --- | --- |
| context | Search context to start with. |
| selectHandler | Callback invoked when an item is selected. |
| trackingHandler | Callback invoked when an item is clicked without it being the final selection. |
| filterHandler | Callback invoked to filter search item results to display. |
| title | Topic to search. |
| itemSize | Initial result view item size. |
| defaultWidth | Initial width of the window. |
| defaultHeight | Initial height of the window. |
| subset | Initial set of items to be searched. |
| flags | Options defining how the query is performed. |





### Returns



**ISearchView**
        Creates a new search window.





### Description



Open a search item picker window.




---








## Declaration

public static [Search.ISearchView](Search.ISearchView.html) ShowPicker([Search.SearchViewState](Search.SearchViewState.html) viewState);






### Parameters



| Parameter | Description |
| --- | --- |
| viewState | Search view state used to open the Search Picker window. |





### Returns



**ISearchView**
        Creates a new search window.





### Description



Open a Search Picker window.





This example shows how to open a custom search picker to pick a decal material.


              


```
using UnityEditor;
using UnityEditor.Search;
using UnityEngine;
using UnityEngine.Search;

static class Example_SearchService_ShowPicker
{
    [MenuItem("Examples/SearchService/ShowPicker")]
    public static void Run()
    {
        var context = SearchService.CreateContext("asset", "t:material");
        var viewState = new SearchViewState(context,
            SearchViewFlags.GridView |
            SearchViewFlags.OpenInBuilderMode |
            SearchViewFlags.DisableSavedSearchQuery)
        {
            windowTitle = new GUIContent("Material Selector"),
            title = "Material",
            selectHandler = SelectHandler,
            trackingHandler = TrackingHandler,
            position = SearchUtils.GetMainWindowCenteredPosition(new Vector2(600, 400))
        };
        SearchService.ShowPicker(viewState);
    }

    static void SelectHandler(SearchItem searchItem, bool canceled)
    {
        Debug.Log($"Selected {searchItem} (canceled: {canceled})");
    }

    static void TrackingHandler(SearchItem searchItem)
    {
        Debug.Log($"Tracking {searchItem}");
    }
}
```


            
