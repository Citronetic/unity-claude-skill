This version of Unity is unsupported.



# SearchItemOptions





enumeration


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



















### Description



Indicates how the search item description needs to be formatted when presented to the user.


              


```
private static SearchItem SearchLogEntry(SearchContext context, SearchProvider provider, LogEntry logEntry)
{
    if (!SearchUtils.MatchSearchGroups(context, logEntry.msgLowerCased, true))
        return null;

    var logItem = provider.CreateItem(context, logEntry.id, ~logEntry.lineNumber, logEntry.msg, null, null, logEntry);
    logItem.options = SearchItemOptions.Ellipsis | SearchItemOptions.RightToLeft | SearchItemOptions.Highlight;
    return logItem;
}
```





### Properties



| Property | Description |
| --- | --- |
| None | Uses default description. |
| Ellipsis | If the description is longer than the width of the search view, truncates the description and adds an ellipsis. |
| RightToLeft | If the description is longer than the search view, keeps the last characters. |
| Highlight | Highlights parts of the description that match the Search Query. |
| FuzzyHighlight | Highlights parts of the description that match the Fuzzy Search Query. |
| Compacted | Uses Label instead of description for shorter display. |
| AlwaysRefresh | Indicates that the item will always be refreshed. |
| FullDescription | The item description that is displayed in full mode. This is usually the case when the description is displayed in the Preview Inspector as opposed to the Result View. |
| CustomAction | Indicates that the item is used as a built-in or custom user action that should always be displayed on top of result views. |


            
