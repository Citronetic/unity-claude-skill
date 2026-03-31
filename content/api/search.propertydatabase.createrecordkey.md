This version of Unity is unsupported.



# [PropertyDatabase](Search.PropertyDatabase.html).CreateRecordKey




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

public static [Search.PropertyDatabaseRecordKey](Search.PropertyDatabaseRecordKey.html) CreateRecordKey(string documentId,
string propertyPath);






### Parameters



| Parameter | Description |
| --- | --- |
| documentId | A document identifier. |
| propertyPath | A property path or name. |





### Returns



**PropertyDatabaseRecordKey**
        The record key.





### Description



Creates a record key from a document identifier and a property path.





Additional resources: [PropertyDatabaseRecordKey](Search.PropertyDatabaseRecordKey.html), [PropertyDatabase.Store](Search.PropertyDatabase.Store.html), [PropertyDatabase.TryLoad](Search.PropertyDatabase.TryLoad.html) and [PropertyDatabase.Invalidate](Search.PropertyDatabase.Invalidate.html).




---








## Declaration

public static [Search.PropertyDatabaseRecordKey](Search.PropertyDatabaseRecordKey.html) CreateRecordKey(string documentId,
[Hash128](Hash128.html) propertyHash);






### Parameters



| Parameter | Description |
| --- | --- |
| documentId | A document identifier. |
| propertyHash | A property hash. |





### Returns



**PropertyDatabaseRecordKey**
        The record key.





### Description



Creates a record key from a document identifier and a property hash.





Additional resources: [PropertyDatabaseRecordKey](Search.PropertyDatabaseRecordKey.html), [PropertyDatabase.CreatePropertyHash](Search.PropertyDatabase.CreatePropertyHash.html), [PropertyDatabase.Store](Search.PropertyDatabase.Store.html), [PropertyDatabase.TryLoad](Search.PropertyDatabase.TryLoad.html) and [PropertyDatabase.Invalidate](Search.PropertyDatabase.Invalidate.html).




---








## Declaration

public static [Search.PropertyDatabaseRecordKey](Search.PropertyDatabaseRecordKey.html) CreateRecordKey(ulong documentKey,
[Hash128](Hash128.html) propertyPathHash);






### Parameters



| Parameter | Description |
| --- | --- |
| documentKey | A document key. |
| propertyPathHash | A property hash. |





### Returns



**PropertyDatabaseRecordKey**
        The record key.





### Description



Creates a record key from a document key and a property hash.





Additional resources: [PropertyDatabaseRecordKey](Search.PropertyDatabaseRecordKey.html), [PropertyDatabase.CreateDocumentKey](Search.PropertyDatabase.CreateDocumentKey.html), [PropertyDatabase.CreatePropertyHash](Search.PropertyDatabase.CreatePropertyHash.html), [PropertyDatabase.Store](Search.PropertyDatabase.Store.html), [PropertyDatabase.TryLoad](Search.PropertyDatabase.TryLoad.html) and [PropertyDatabase.Invalidate](Search.PropertyDatabase.Invalidate.html).




---








## Declaration

public static [Search.PropertyDatabaseRecordKey](Search.PropertyDatabaseRecordKey.html) CreateRecordKey(string propertyPath);






### Parameters



| Parameter | Description |
| --- | --- |
| propertyPath | A property path or name. |





### Returns



**PropertyDatabaseRecordKey**
        The record key.





### Description



Creates a record key from a property path.





The document identifier will be considered as null and the document key will be 0.

Additional resources: [PropertyDatabaseRecordKey](Search.PropertyDatabaseRecordKey.html), [PropertyDatabase.Store](Search.PropertyDatabase.Store.html), [PropertyDatabase.TryLoad](Search.PropertyDatabase.TryLoad.html) and [PropertyDatabase.Invalidate](Search.PropertyDatabase.Invalidate.html).




---








## Declaration

public static [Search.PropertyDatabaseRecordKey](Search.PropertyDatabaseRecordKey.html) CreateRecordKey([Hash128](Hash128.html) propertyHash);






### Parameters



| Parameter | Description |
| --- | --- |
| propertyHash | A property hash. |





### Returns



**PropertyDatabaseRecordKey**
        The record key.





### Description



Creates a record key from a property hash.





The document identifier will be considered as null and the document key will be 0.

Additional resources: [PropertyDatabaseRecordKey](Search.PropertyDatabaseRecordKey.html), [PropertyDatabase.CreatePropertyHash](Search.PropertyDatabase.CreatePropertyHash.html), [PropertyDatabase.Store](Search.PropertyDatabase.Store.html), [PropertyDatabase.TryLoad](Search.PropertyDatabase.TryLoad.html) and [PropertyDatabase.Invalidate](Search.PropertyDatabase.Invalidate.html).


            
