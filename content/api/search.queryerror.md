This version of Unity is unsupported.



# QueryError





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



A QueryError holds the definition of a query parsing error.





QueryErrors are obtained when parsing a query through the function [QueryEngine.Parse](Search.QueryEngine_1.Parse.html). See [QueryEngine](Search.QueryEngine_1.html) for an example where we recover parsing errors when a query is invalid.





### Properties



| Property | Description |
| --- | --- |
| index | Index where the error happened. |
| length | Length of the block that was being parsed. |
| reason | Reason why the parsing failed. |





### Constructors



| Constructor | Description |
| --- | --- |
| QueryError | Construct a new QueryError. |


            
