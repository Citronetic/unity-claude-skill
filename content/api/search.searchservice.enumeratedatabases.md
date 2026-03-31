This version of Unity is unsupported.



# [SearchService](Search.SearchService.html).EnumerateDatabases




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

public static IEnumerable<ISearchDatabase> EnumerateDatabases();






### Returns



**IEnumerable<ISearchDatabase>**
        Search database interfaces.





### Description



Enumerate search databases.





Most of the search databases are asset and scene indexes.


              


```
static string EnsureDecalPropertyIndexing()
{
    var materialDb = SearchService.EnumerateDatabases().FirstOrDefault(IsIndexingMaterialProperties);
    if (materialDb != null)
        return materialDb.name;

    if (!EditorUtility.DisplayDialog("Create decal material index",
        "Your project does not contain an index with decal material properties." +
        "\n\n" +
        "Do you want to create one now?", "Yes", "No"))
        return null;

    var dbName = "Decals";
    SearchService.CreateIndex(dbName,
        IndexingOptions.Properties | IndexingOptions.Dependencies |
        IndexingOptions.Types | IndexingOptions.Keep,
        roots: null,
        includes: new string[] { ".mat" },
        excludes: null,
        (name, path, finished) =>
        {
            Debug.Log($"Material index {name} created at {path}");
            finished();
        });
    return dbName;
}

static bool IsIndexingMaterialProperties(ISearchDatabase db)
{
    if (string.Equals(db.name, "Materials", StringComparison.OrdinalIgnoreCase))
        return true;
    return (db.indexingOptions & IndexingOptions.Properties) == IndexingOptions.Properties
        && (db.includePatterns.Count == 0 || db.includePatterns.Contains(".mat"));
}
```


            
