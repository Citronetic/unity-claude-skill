This version of Unity is unsupported.



# [ISearchList](Search.ISearchList.html).Select




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

public IEnumerable<TResult> Select(Func<SearchItem,TResult> selector);






### Parameters



| Parameter | Description |
| --- | --- |
| selector | Function used to select what gets returned in the new enumerable list. |





### Returns



**IEnumerable<TResult>**
        New enumerable list.





### Description



Enumerate search items and transform them while they are being fetched.


            
