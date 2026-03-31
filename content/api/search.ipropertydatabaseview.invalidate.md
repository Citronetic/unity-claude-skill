This version of Unity is unsupported.



# [IPropertyDatabaseView](Search.IPropertyDatabaseView.html).Invalidate(in PropertyDatabaseRecordKey)




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



















### Parameters



| Parameter | Description |
| --- | --- |
| recordKey | A record key. |





### Description



Invalidates a single property record so it is no longer retrievable.


              


```
using (var view = propertyDatabase.GetView())
{
    // Store a property.
    var propertyRecordKey = view.CreateRecordKey("path/to/my/asset", "m_Color");
    view.Store(propertyRecordKey, new Color(1, 0, 1));

    // Invalidate the property.
    view.Invalidate(propertyRecordKey);

    // The invalidated property can no longer be retrieved.
    if (view.TryLoad(propertyRecordKey, out object propertyValue))
        Assert.Fail("TryLoad should have failed to retrieve the record.");
}
```





Additional resources: [IPropertyDatabaseView.CreateRecordKey](Search.IPropertyDatabaseView.CreateRecordKey.html).




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
using (var view = propertyDatabase.GetView())
{
    // Store multiple properties of a document.
    var document = "path/to/my/asset";
    view.Store(document, "prop1", "value1");
    view.Store(document, "prop2", "value2");

    // Invalidate the entire document.
    view.Invalidate(document);

    // The invalidated document can no longer be retrieved.
    if (view.TryLoad(view.CreateDocumentKey(document), out IEnumerable<object> documentValues))
        Assert.Fail("TryLoad should have failed to retrieve the document values.");
}
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
using (var view = propertyDatabase.GetView())
{
    // Store multiple properties of a document.
    var documentKey = view.CreateDocumentKey("path/to/my/asset");
    view.Store(documentKey, view.CreatePropertyHash("prop1"), "value1");
    view.Store(documentKey, view.CreatePropertyHash("prop2"), "value2");

    // Invalidate the entire document by its key.
    view.Invalidate(documentKey);

    // The invalidated document can no longer be retrieved.
    if (view.TryLoad(documentKey, out IEnumerable<object> documentKeyValues))
        Assert.Fail("TryLoad should have failed to retrieve the document values.");
}
```





Additional resources: [IPropertyDatabaseView.CreateDocumentKey](Search.IPropertyDatabaseView.CreateDocumentKey.html).


            
