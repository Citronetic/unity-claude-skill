This version of Unity is unsupported.



# [SearchService](Search.SearchService.html).ShowWindow




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

public static [Search.ISearchView](Search.ISearchView.html) ShowWindow([Search.SearchContext](Search.SearchContext.html) context,
string topic,
float defaultWidth,
float defaultHeight,
bool saveFilters,
bool reuseExisting,
bool multiselect,
bool dockable);






### Parameters



| Parameter | Description |
| --- | --- |
| context | Search context to start with. |
| topic | Topic to search. |
| saveFilters | True if user search provider filters should be saved for next search session. |
| reuseExisting | True if the active providers should be saved for the next session. |
| multiselect | True if the search supports multi-selection. |
| defaultWidth | Initial width of the window. |
| defaultHeight | Initial height of the window. |
| dockable | If true, creates a dockable search window (that is closed when an item is activated). If false, it creates a dropdown (borderless, undockable and unmovable) version of the search window. |





### Returns



**ISearchView**
        Returns the search view window instance.





### Description



Creates a new search window.


              


```
using UnityEditor;
using UnityEditor.Search;

static class Example_SearchService_ShowWindow
{
    [MenuItem("Examples/SearchService/ShowWindowEmpty")]
    public static void Run1()
    {
        SearchService.ShowWindow()
            .SetSearchText(string.Empty);
    }

    [MenuItem("Examples/SearchService/ShowWindowWithSearchText")]
    public static void Run2()
    {
        SearchService.ShowWindow(SearchService.CreateContext("m: Profiler"));
    }

    [MenuItem("Examples/SearchService/ShowWindowCustomTopic")]
    public static void Run3()
    {
        SearchService.ShowWindow(topic: "My Things")
            .SetSearchText(string.Empty);
    }

    [MenuItem("Examples/SearchService/ShowPopupWindow")]
    public static void Run4()
    {
        SearchService.ShowWindow(defaultWidth: 1300, defaultHeight: 700, dockable: false);
    }
}
```




---








## Declaration

public static [Search.ISearchView](Search.ISearchView.html) ShowWindow([Search.SearchViewState](Search.SearchViewState.html) viewState);






### Parameters



| Parameter | Description |
| --- | --- |
| viewState | Search view state used to open the Search window. |





### Returns



**ISearchView**
        Returns the search view window instance.





### Description



Creates a new search window.


              


```
using UnityEditor;
using UnityEditor.Search;
using UnityEngine.Search;static class SearchWindows
{
    [MenuItem("Search/Views/Simple Search Bar 1")] public static void SearchViewFlags1() => CreateWindow(SearchViewFlags.None);
    [MenuItem("Search/Views/Simple Search Bar 2")] public static void SearchViewFlags2() => CreateWindow(SearchViewFlags.EnableSearchQuery);
    [MenuItem("Search/Views/Simple Search Bar 3")] public static void SearchViewFlags3() => CreateWindow(SearchViewFlags.DisableInspectorPreview);
    [MenuItem("Search/Views/Simple Search Bar 4")] public static void SearchViewFlags4() => CreateWindow(SearchViewFlags.EnableSearchQuery | SearchViewFlags.DisableInspectorPreview);    static void CreateWindow(SearchViewFlags flags)
    {
        var searchContext = SearchService.CreateContext(string.Empty);
        var viewArgs = new SearchViewState(searchContext, SearchViewFlags.CompactView | flags) { title = flags.ToString() };
        SearchService.ShowWindow(viewArgs);
    }
}
```


            
