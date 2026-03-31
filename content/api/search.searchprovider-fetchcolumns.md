This version of Unity is unsupported.



# [SearchProvider](Search.SearchProvider.html).fetchColumns




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












                    public Func<SearchContext,IEnumerable<SearchItem>,IEnumerable<SearchColumn>> fetchColumns;






### Description



Handler used to enumerate search columns to be used in the Search Table view.





See [SearchColumnProviderAttribute](Search.SearchColumnProviderAttribute.html) if you need to define new column formats to display your custom values.


              


```
static IEnumerable<SearchColumn> FetchColumns(SearchContext context, IEnumerable<SearchItem> items)
{
    yield return new SearchColumn("Performance/Sample Count", "count", nameof(PerformanceMetric));
    yield return new SearchColumn("Performance/Peak Time", "peak", nameof(PerformanceMetric));
    yield return new SearchColumn("Performance/Average Time", "avg", nameof(PerformanceMetric));
    yield return new SearchColumn("Performance/Total Time", "total", nameof(PerformanceMetric));
}[SearchColumnProvider(nameof(PerformanceMetric))]
public static void PerformanceMetric(SearchColumn column)
{
    column.getter = args =>
    {
        switch (column.selector)
        {
            case "count": return EditorPerformanceTracker.GetSampleCount(args.item.id);
            case "peak": return EditorPerformanceTracker.GetPeakTime(args.item.id);
            case "avg": return EditorPerformanceTracker.GetAverageTime(args.item.id);
            case "total": return EditorPerformanceTracker.GetTotalTime(args.item.id);
            case "age": return EditorPerformanceTracker.GetTimestamp(args.item.id);
        }        return null;
    };    if (column.selector != "count")
    {
        column.drawer = args =>
        {
            GUI.Label(args.rect, GetTimeLabel((double)args.value, 0.5d, 2.0d), ItemSelectors.GetItemContentStyle(column));
            return args.value;
        };
    }
}
```


            
