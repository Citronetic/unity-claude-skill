This version of Unity is unsupported.



# [HierarchySearchFilter](Unity.Hierarchy.HierarchySearchFilter.html).ToOp




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

public static [Unity.Hierarchy.HierarchySearchFilterOperator](Unity.Hierarchy.HierarchySearchFilterOperator.html) ToOp(string op);






### Parameters



| Parameter | Description |
| --- | --- |
| op | The textual operator. For example: =, &lt;=, :, and .... |





### Returns



**HierarchySearchFilterOperator**
        The `HierarchySearchFilterOperator` that matches the parsed string. For example, this function parses the string "=" and converts it to `HierarchySearchFilterOperator.Equal`.





### Description



Converts a textual value to its operator value if possible.


            
