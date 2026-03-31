This version of Unity is unsupported.



# [SearchUtils](Search.SearchUtils.html).MatchSearchGroups




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

public static bool MatchSearchGroups([Search.SearchContext](Search.SearchContext.html) context,
string content,
bool ignoreCase);






### Parameters



| Parameter | Description |
| --- | --- |
| context | Search context containing the searchQuery that search tries to match. |
| content | String content that is tokenized and used to match the search query. |
| ignoreCase | Perform matching while ignoring letter casing. |





### Returns



**bool**
        If a match has occurred.





### Description



Helper function to match a string against the SearchContext. This will try to match the search query against each token of content (similar to the AddComponent menu workflow).


              


```
private static IEnumerable<SearchItem> SearchLogs(SearchContext context, SearchProvider provider)
{
    lock (s_Logs)
    {
        if (!s_Initialized)
        {
            s_Initialized = true;
            Application.logMessageReceived -= HandleLog;
            Application.logMessageReceived += HandleLog;
        }
        for (int logIndex = 0; logIndex < s_Logs.Count; ++logIndex)
            yield return SearchLogEntry(context, provider, s_Logs[logIndex]);
    }
}
```


            
