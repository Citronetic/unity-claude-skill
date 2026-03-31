This version of Unity is unsupported.



# SearchColumn Constructor




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

public SearchColumn(string path,
[GUIContent](GUIContent.html) content,
[Search.SearchColumnFlags](Search.SearchColumnFlags.html) options);






## Declaration

public SearchColumn(string path,
string selector,
[GUIContent](GUIContent.html) content,
[Search.SearchColumnFlags](Search.SearchColumnFlags.html) options);






## Declaration

public SearchColumn(string path,
string selector,
string provider,
[GUIContent](GUIContent.html) content,
[Search.SearchColumnFlags](Search.SearchColumnFlags.html) options);






### Parameters



| Parameter | Description |
| --- | --- |
| path | Serialization path of the column. |
| content | Content to render the column header. |
| options | Column flags. |
| selector | Selector used to fetch the field data of a search item. See SearchSelectorAttribute. |
| provider | Column provider used to manage the column. See SearchColumnProviderAttribute. |





### Description



Creates a new search column.


            
