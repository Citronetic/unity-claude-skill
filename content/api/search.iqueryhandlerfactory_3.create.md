This version of Unity is unsupported.



# [IQueryHandlerFactory<T0,T1,T2>](Search.IQueryHandlerFactory_3.html).Create




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

public TQueryHandler Create([Search.QueryGraph](Search.QueryGraph.html) graph,
ICollection<QueryError> errors);






### Parameters



| Parameter | Description |
| --- | --- |
| graph | A graph representing a query. |
| errors | A collection of errors. Use this to report errors when needed. |





### Returns



**TQueryHandler**
        An IQueryHandler.





### Description



Implement this function to create a new query handler for a specific query graph.


            
