This version of Unity is unsupported.



# PropertyDatabaseRecordKey





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



The key of a record that is stored in the [PropertyDatabase](Search.PropertyDatabase.html).





A key is a numerical value that represents a description of the property being stored in the [PropertyDatabase](Search.PropertyDatabase.html). It is composed of two parts, the document key and the property key.

The document key represents what document owns the property, and the property key represents the property itself. For example, if you wish to store the size of a file, the file would be the document and the size would be the property. You can use any value for your documents, as long as it is consistent when storing multiple properties of a single document. You can also not use a document, in which case the document key will be 0.

We provide multiple helper functions to help create record keys, see [PropertyDatabase.CreateRecordKey](Search.PropertyDatabase.CreateRecordKey.html), [PropertyDatabase.CreateDocumentKey](Search.PropertyDatabase.CreateDocumentKey.html) and [PropertyDatabase.CreatePropertyHash](Search.PropertyDatabase.CreatePropertyHash.html).





### Static Properties



| Property | Description |
| --- | --- |
| size | The size of the key, in bytes. |





### Properties



| Property | Description |
| --- | --- |
| documentKey | The key of the document owning the property. |
| propertyKey | The key of the property. |





### Constructors



| Constructor | Description |
| --- | --- |
| PropertyDatabaseRecordKey | Constructs a new record key. |





### Public Methods



| Method | Description |
| --- | --- |
| CompareTo | Compares the record key to another record key. |
| Equals | Tests equality with another record key. |
| GetHashCode | Gets the hashcode of the key. |





### Operators



| Operator | Description |
| --- | --- |
| operator != | The not equal operator. |
| operator < | The less than operator. |
| operator == | The equals operator. |
| operator > | The greater than operator. |


            
