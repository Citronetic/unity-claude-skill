This version of Unity is unsupported.



# UQueryState<T0>





struct in
          UnityEngine.UIElements



/



Implemented in:[UnityEngine.UIElementsModule](UnityEngine.UIElementsModule.html)


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



Query object containing all the selection rules. The object can be saved and rerun later without re-allocating memory.





### Public Methods



| Method | Description |
| --- | --- |
| AtIndex | Selects the nth element matching all the criteria, or null if not enough elements were found. |
| First | The first element matching all the criteria, or null if none was found. |
| ForEach | Invokes function on all elements matching the query. |
| GetEnumerator | Allows traversing the results of the query with foreach without creating GC allocations. |
| Last | The last element matching all the criteria, or null if none was found. |
| RebuildOn | Creates a new QueryState with the same selection rules, applied on another VisualElement. |
| ToList | Adds all elements satisfying selection rules to the list. |


            
