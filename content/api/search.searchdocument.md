This version of Unity is unsupported.



# SearchDocument





struct in
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



Represents a searchable document that has been indexed.





### Properties



| Property | Description |
| --- | --- |
| id | Document unique ID in the search index. |
| name | Readable name of the document. |
| score | Document base relevance score. |
| source | Original source from which the document was indexed. The source is usually the container asset, i.e. prefab, Unity scene or the imported asset itself. |
| valid | If true the document is considered valid. |





### Constructors



| Constructor | Description |
| --- | --- |
| SearchDocument | Create a new SearchDocument. |





### Public Methods



| Method | Description |
| --- | --- |
| CompareTo | Compare this document against another document. |
| Equals | Compare this document against another document. |
| ToString | Returns the document ID string. |


            
