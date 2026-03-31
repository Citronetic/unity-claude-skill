This version of Unity is unsupported.



# [ObjectIndexer](Search.ObjectIndexer.html).IndexProperty




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

public void IndexProperty(int documentIndex,
string name,
string value,
bool saveKeyword,
bool exact);






### Parameters



| Parameter | Description |
| --- | --- |
| documentIndex | Document where the indexed word was found. |
| name | Key used to retrieve the value. |
| value | Value to add to the index. |
| saveKeyword | Define if we store this key in the keyword registry of the index. |
| exact | If exact is true, only the exact match of the value will be stored in the index (not the variations). |





### Description



Adds a property value to the index. A property is specified with a key and a string value. The value will be stored with multiple variations.





The following example indexes a new boolean property named `testismobilefriendly` that will be used to search textures that match `testismobilefriendly=true` or `testismobilefriendly=false`.


              


```
[CustomObjectIndexer(typeof(Texture2D))]
static void IndexMobileFriendlyTexture(CustomObjectIndexerTarget target, ObjectIndexer indexer)
{
    var texture = target.target as Texture2D;
    if (texture == null)
        return;

    bool isMobileFriendly = texture.width < 64 && texture.height < 64;

    // Important Notes:
    // Use IndexProperty<PropertyType, PropertyTypeOwner> to ensure testismobilefriendly is available in the QueryBuilder.
    // Prefix propertyname with something (ex: PropertyOwnerType) to have a unique property name that won't clash in the QueryBuilder
    // saveKeyword: false -> Ensure the index keyword list won't be polluted with the keyword VALUES.
    // exact: false -> Ensure that we support variations (incomplete values) when searching.
    indexer.IndexProperty<bool, Texture2D>(target.documentIndex, "Texture2D.testismobilefriendly", isMobileFriendly.ToString(), saveKeyword: false, exact: false);
}

[CustomObjectIndexer(typeof(Texture2D))]
static void CrashingIndexer(CustomObjectIndexerTarget target, ObjectIndexer indexer)
{
    if (enableCrashingIndexer)
        throw new System.Exception("Crash");
}
```





See [SearchIndexer.AddProperty](Search.SearchIndexer.AddProperty.html) for more information and examples about indexing properties.


            
