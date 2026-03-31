This version of Unity is unsupported.



# [ProjectSearchContext](SearchService.ProjectSearchContext.html).requiredTypes




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












                    public IEnumerable<Type> requiredTypes;






### Description



An IEnumerable of types that contains the type constraints for this search.





This IEnumerable can be null or empty. If it is not empty, but contains null values, you can find the required type for the search in the SearchService.Project.SearchContext.requiredTypeNames IEnumerable instead. Both IEnumerables contain the same number of elements, and map to each other one-to-one.


            
