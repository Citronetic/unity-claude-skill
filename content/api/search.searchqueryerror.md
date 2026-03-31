This version of Unity is unsupported.



# SearchQueryError





class in
          UnityEditor.Search


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



Represents a query parsing error.





This class is only used in the context of [SearchProviders](Search.SearchProvider.html), when performing a search. It allows a [SearchProvider](Search.SearchProvider.html) to report error during the parsing of the search query. Here is an example of a [SearchProvider](Search.SearchProvider.html) that uses a [QueryEngine](Search.QueryEngine_1.html) and reports parsing errors:


              


```
public IEnumerable<T> Search(SearchContext context, SearchProvider provider, IEnumerable<T> subset = null)
{
    const bool useFastYielding = true;
    var query = m_QueryEngine.ParseQuery(context.searchQuery, useFastYielding);
    if (!query.valid)
    {
        if (reportError)
            context.AddSearchQueryErrors(query.errors.Select(e => new SearchQueryError(e, context, provider)));
        return Enumerable.Empty<T>();
    }

    m_DoFuzzyMatch = query.HasToggle("fuzzy");
    // Do not filter all the valid objects now. The filtering will be done when the objects are actually pulled.
    // Since the search can be done asynchronously, the state of the objects can change in between iterations.
    IEnumerable<T> validObjects = FilterValidObjectsOnPull(subset ?? m_Objects, useFastYielding);
    return query.Apply(validObjects, false);
}
```





In the previous example, the function "Search" would be called by the provider's [fetchItem](Search.SearchProvider.fetchItem.html).

In the Search window, the errors are shown when there is no result available.
[Image: image].





### Properties



| Property | Description |
| --- | --- |
| context | The context in which this error was logged. |
| index | Index where the error occurred. |
| length | Length of the block that was being parsed. |
| provider | Which search provider logged this error. |
| reason | The reason for the error. |
| type | The type of query error. |





### Constructors



| Constructor | Description |
| --- | --- |
| SearchQueryError | Creates a new SearchQueryError. |


            
