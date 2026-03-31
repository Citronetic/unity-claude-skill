This version of Unity is unsupported.



# [IQueryEngineFilter](Search.IQueryEngineFilter.html).metaInfo




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












                    public IReadOnlyDictionary<string,string> metaInfo;






### Description



Additional information specific to the filter.





You can add and remove any additional information on a filter at any given time. This information is not used by the [QueryEngine](Search.QueryEngine_1.html) and does not affect the filtering in any way. Use to provide a way to store pertinent information related to a filter that you can fetch at a later time.


              


```
using System.Collections.Generic;
using System.Linq;
using UnityEditor;
using UnityEditor.Search;
using UnityEngine;

static class Example_IQueryEngineFilter_AddMetaInfo
{
    static List<MyObjectType> s_Data;

    static QueryEngine<MyObjectType> SetupQueryEngine()
    {
        // Set up the query engine
        var queryEngine = new QueryEngine<MyObjectType>();

        // Add a filter for MyObjectType.id that supports all operators
        queryEngine.AddFilter("id", myObj => myObj.id);

        // Add a description to the filter
        var descriptionKey = "desc";
        var descriptionValue = "This filters the objects based on their id.";
        var exampleKey = "example";
        var exampleValue = "id>10 or id=2";
        queryEngine.TryGetFilter("id", out var filter);
        filter.AddOrUpdateMetaInfo(descriptionKey, descriptionValue)
            .AddOrUpdateMetaInfo(exampleKey, exampleValue);

        return queryEngine;
    }

    [MenuItem("Examples/IQueryEngineFilter/AddMetaInfo")]
    public static void RunExample()
    {
        var queryEngine = SetupQueryEngine();

        var descriptionKey = "desc";
        var allFilters = queryEngine.GetAllFilters();
        var filtersWithDescription = allFilters.Where(f => f.metaInfo.ContainsKey(descriptionKey));

        queryEngine.TryGetFilter("id", out var filter);
        Debug.Assert(filter != null, "Filter \"id\" should not be null.");
        Debug.Assert(filtersWithDescription.Contains(filter), "Filter \"id\" should have a description.");

        // For the sake of the documentation, redefine a new description key.
        var descriptionMetaInfoKey = "desc";
        filter.RemoveMetaInfo(descriptionMetaInfoKey);

        filtersWithDescription = allFilters.Where(f => f.metaInfo.ContainsKey(descriptionMetaInfoKey));
        Debug.Assert(!filtersWithDescription.Contains(filter), "Filter \"id\" should not have a description.");

        filter.ClearMetaInfo();
        var filtersWithMetaInfo = queryEngine.GetAllFilters().Where(f => f.metaInfo.Count > 0);
        Debug.Assert(!filtersWithMetaInfo.Contains(filter), "Filter \"id\" should not have any meta info.");
    }

    /// <summary>
    /// Custom type. This is the type of objects that will be searched by the QueryEngine.
    /// </summary>
    class MyObjectType
    {
        public int id { get; set; }
        public string name { get; set; }
        public Vector2 position { get; set; }
        public bool active { get; set; }

        public MyObjectType()
        {
            id = 0;
            name = "";
            position = Vector2.zero;
            active = false;
        }

        public override string ToString()
        {
            return $"({id}, {name}, ({position.x}, {position.y}), {active})";
        }
    }
}
```


            
