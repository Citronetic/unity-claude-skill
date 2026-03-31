This version of Unity is unsupported.



# [SearchService](Search.SearchService.html).IsIndexReady




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

public static bool IsIndexReady(string name);






### Parameters



| Parameter | Description |
| --- | --- |
| name | Unique name of the index. This name usually matches the one displayed in the Search Index Manager or the one used to invoke SearchService.CreateIndex. |





### Returns



**bool**
        Returns true if the search index is ready to be used.





### Description



Indicates if a search index is ready to be used.





When a search index is ready to be used, you can use [SearchService.Request](Search.SearchService.Request.html) with `p: a:<name_of_the_index> filters...` to only search that index's data.


            
