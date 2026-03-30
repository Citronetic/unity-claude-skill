This version of Unity is unsupported.



# [ISelectorEngine](SearchService.ISelectorEngine.html).SelectObject




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

public bool SelectObject([SearchService.ISearchContext](SearchService.ISearchContext.html) context,
Action<Object,bool> onObjectSelectorClosed,
Action<Object> onObjectSelectedUpdated);






### Parameters



| Parameter | Description |
| --- | --- |
| context | The search context. |
| onObjectSelectorClosed | Callback to call when the selector window is closed. The callback takes two arguments. The first argument is the selected object, or null for none. The second is a boolean that indicates whether the operation was cancelled or not. |
| onObjectSelectedUpdated | Callback to call when the selection in the window changes. This callback takes one argument: the selected object, or null for none. |





### Returns



**bool**
        True if the search engine handles the object select operation, false otherwise. If false is returned, the default object selector is used instead.





### Description



This function is called when a window must be opened to perform a search and select operation.





If the function returns false, the default selector is used instead.


            
