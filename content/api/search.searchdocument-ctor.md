This version of Unity is unsupported.



# [SearchDocument](Search.SearchDocument.html).SearchDocument Constructor




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

public SearchDocument([Search.SearchDocument](Search.SearchDocument.html) doc,
int score);






## Declaration

public SearchDocument(string id,
string name,
string source,
int score);






## Declaration

public SearchDocument([Search.SearchDocument](Search.SearchDocument.html) doc,
string path);










### Parameters



| Parameter | Description |
| --- | --- |
| id | Document unique ID in the search index. |
| doc | Source document to copy properties from. |
| score | Document score used for sorting. |
| index | Document position in the search index. |
| path | Document path (i.e. asset path or transform path) if any. |
| name | Document name (for example, asset path or transform path) if any. |
| source | Document contained source path or ID. This is usually defined for nested objects with a prefab or a scene. |





### Description



Create a new SearchDocument.


            
