This version of Unity is unsupported.



# [IPropertyDatabaseView](Search.IPropertyDatabaseView.html).Store




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

public bool Store(string documentId,
string propertyPath,
object value);






### Parameters



| Parameter | Description |
| --- | --- |
| documentId | A document identifier. |
| propertyPath | A property path or name. |
| value | The value of the property. |





### Returns



**bool**
        True if the store operation succeeded, false if not.





### Description



Stores a document property.


              


```
// Store a property of a document, like a property of an asset.
using (var view = propertyDatabase.GetView())
{
    var stored = view.Store("path/to/my/asset", "m_Color", new Color(1, 0, 1));
    if (!stored)
        Debug.LogWarning("Property m_Color did not store.");
}
```




---








## Declaration

public bool Store(ulong documentKey,
[Hash128](Hash128.html) propertyHash,
object value);






### Parameters



| Parameter | Description |
| --- | --- |
| documentKey | A document key. |
| propertyHash | A property hash. |
| value | The value of the property. |





### Returns



**bool**
        True if the store operation succeeded, false if not.





### Description



Stores a document property with a precomputed document key and property hash.


              


```
// Store a property of a document, with the document id and property hash already computed.
using (var view = propertyDatabase.GetView())
{
    var documentId = view.CreateDocumentKey("path/to/my/asset");
    var propertyHash = view.CreatePropertyHash("m_Size");
    var stored = view.Store(documentId, propertyHash, 42);
    if (!stored)
        Debug.LogWarning("Property m_Size did not store.");
}
```





Additional resources: [IPropertyDatabaseView.CreateDocumentKey](Search.IPropertyDatabaseView.CreateDocumentKey.html) and [IPropertyDatabaseView.CreatePropertyHash](Search.IPropertyDatabaseView.CreatePropertyHash.html).




---












### Parameters



| Parameter | Description |
| --- | --- |
| recordKey | A record key. |
| value | The value of the property. |





### Returns



**void**
        True if the store operation succeeded, false if not.





### Description



Stores a document property with a precomputed record key.


              


```
// Store a property with an already computed record key.
using (var view = propertyDatabase.GetView())
{
    var recordKey = view.CreateRecordKey("path/to/my/asset", "prop1");
    var stored = view.Store(recordKey, 123);
    if (!stored)
        Debug.LogWarning("Property prop1 did not store.");
}
```





Additional resources: [IPropertyDatabaseView.CreateRecordKey](Search.IPropertyDatabaseView.CreateRecordKey.html).




---








## Declaration

public bool Store([Hash128](Hash128.html) propertyHash,
object value);






### Parameters



| Parameter | Description |
| --- | --- |
| propertyHash | A property hash. |
| value | The value of the property. |





### Returns



**bool**
        True if the store operation succeeded, false if not.





### Description



Stores a property with a precomputed property hash.





The document identifier is considered null and the document key will be 0.


              


```
// Store a property without any document.
using (var view = propertyDatabase.GetView())
{
    var stored = view.Store(view.CreatePropertyHash("documentPrefix"), "myDocs_");
    if (!stored)
        Debug.LogWarning("Property documentPrefix did not store.");
}
```





Additional resources: [IPropertyDatabaseView.CreatePropertyHash](Search.IPropertyDatabaseView.CreatePropertyHash.html).


            
