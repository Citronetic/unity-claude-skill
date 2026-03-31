This version of Unity is unsupported.



# [SearchProvider](Search.SearchProvider.html).fetchPropositions




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












                    public Func<SearchContext,SearchPropositionOptions,IEnumerable<SearchProposition>> fetchPropositions;






### Description



Handler used to enumerate search propositions when the user is using TAB to auto-complete a query.


              


```
IEnumerable<SearchProposition> FetchPropositions(SearchContext context, SearchPropositionOptions options)
{
  foreach (var f in myFilters)
    yield return new SearchProposition(f.name, f.name, f.label);
}
```


            
