This version of Unity is unsupported.



# [SearchService](Search.SearchService.html).OrderedProviders




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












                    public static IEnumerable<SearchProvider> OrderedProviders;






### Description



Returns the list of search providers sorted by priority.


              


```
// Print providers by their search priority when a query is executed.
foreach (var provider in SearchService.OrderedProviders)
    Debug.Log($"[{provider.priority}] {provider.name} ({provider.id})");
```


            
