This version of Unity is unsupported.



# [PropertyDatabase](Search.PropertyDatabase.html).Invalidate




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

public void Invalidate(ref [Search.PropertyDatabaseRecordKey](Search.PropertyDatabaseRecordKey.html) recordKey);






### Parameters



| Parameter | Description |
| --- | --- |
| recordKey | A record key. |





### Description



Invalidates a single property record so it is no longer retrievable.


              


```
// Store a property.
var propertyRecordKey = PropertyDatabase.CreateRecordKey("path/to/my/asset", "m_Color");
propertyDatabase.Store(propertyRecordKey, new Color(1, 0, 1));

// Invalidate the property.
propertyDatabase.Invalidate(propertyRecordKey);

// The invalidated property can no longer be retrieved.
if (propertyDatabase.TryLoad(propertyRecordKey, out object propertyValue))
    Assert.Fail("TryLoad should have failed to retrieve the record.");
```





Additional resources: [PropertyDatabase.CreateRecordKey](Search.PropertyDatabase.CreateRecordKey.html).




---








## Declaration

public void Invalidate(string documentId);






### Parameters



| Parameter | Description |
| --- | --- |
| documentId | A document identifier. |





### Description



Invalidates all the properties stored for an entire document.


              


```
// Store multiple properties of a document.
var document = "path/to/my/asset";
propertyDatabase.Store(document, "prop1", "value1");
propertyDatabase.Store(document, "prop2", "value2");

// Invalidate the entire document.
propertyDatabase.Invalidate(document);

// The invalidated document can no longer be retrieved.
if (propertyDatabase.TryLoad(PropertyDatabase.CreateDocumentKey(document), out IEnumerable<object> documentValues))
    Assert.Fail("TryLoad should have failed to retrieve the document values.");
```




---








## Declaration

public void Invalidate(ulong documentKey);






### Parameters



| Parameter | Description |
| --- | --- |
| documentKey | A document key. |





### Description



Invalidates all the properties stored for an entire document.


              


```
// Store multiple properties of a document.
var documentKey = PropertyDatabase.CreateDocumentKey("path/to/my/asset");
propertyDatabase.Store(documentKey, PropertyDatabase.CreatePropertyHash("prop1"), "value1");
propertyDatabase.Store(documentKey, PropertyDatabase.CreatePropertyHash("prop2"), "value2");

// Invalidate the entire document by its key.
propertyDatabase.Invalidate(documentKey);

// The invalidated document can no longer be retrieved.
if (propertyDatabase.TryLoad(documentKey, out IEnumerable<object> documentKeyValues))
    Assert.Fail("TryLoad should have failed to retrieve the document values.");
```





Additional resources: [PropertyDatabase.CreateDocumentKey](Search.PropertyDatabase.CreateDocumentKey.html).


            
