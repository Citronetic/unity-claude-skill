This version of Unity is unsupported.



# [QueryValidationOptions](Search.QueryValidationOptions.html).skipIncompleteFilters




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












                    public bool skipIncompleteFilters;






### Description



Boolean indicating if incomplete filters should be skipped.





If true, incomplete filters are skipped. If false and [validateFilters](Search.QueryValidationOptions-validateFilters.html) is true, incomplete filters will generate errors when parsed.


              


```
using System.Globalization;
using System.Linq;
using UnityEditor;
using UnityEditor.Search;
using UnityEngine;

static class Example_QueryValidationOptions_skipIncompleteFilters
{
    [MenuItem("Examples/QueryValidationOptions/skipIncompleteFilters")]
    public static void RunExample()
    {
        // Set up the query validation options with filter validation and incomplete filter skipping.
        var validationOptions = new QueryValidationOptions { validateFilters = true, skipIncompleteFilters = true};

        // Set up the query engine
        var queryEngine = new QueryEngine<MyObjectType>(validationOptions);
        queryEngine.AddFilter("id", myObj => myObj.id);
        queryEngine.AddFilter("dist", (myObj, paramPosition) =>
        {
            // Compute the distance from the position that was retrieved in the parameter transformer
            var vec = myObj.position - paramPosition;
            return vec.magnitude;
        }, paramStringValue =>
            {
                // Transform the parameter from a string to a usable Vector2
                if (paramStringValue.StartsWith("[") && paramStringValue.EndsWith("]"))
                {
                    paramStringValue = paramStringValue.Trim('[', ']');
                    var vectorTokens = paramStringValue.Split(',');
                    var vectorValues = vectorTokens.Select(token => float.Parse(token, CultureInfo.InvariantCulture.NumberFormat)).ToList();
                    return new Vector2(vectorValues[0], vectorValues[1]);
                }
                return Vector2.zero;
            }, new[] { "=", "!=", "<", ">", "<=", ">=" });
        queryEngine.SetSearchDataCallback(myObj => new[] { myObj.id.ToString(), myObj.name });

        var dataset = new[]
        {
            new MyObjectType() { id = 0, name = "Test 1" },
            new MyObjectType() { id = 10, name = "Test 2" }
        };

        // Parse a query with the filter "id". There shouldn't be any errors
        var query = queryEngine.ParseQuery("id>10");
        Debug.Assert(query.valid, $"Query \"{query.text}\" should be valid.");

        // Because the QueryEngine is skipping incomplete filters, we shouldn't get any errors for filters that are not completely written yet,
        // but we should still get results for filters that are known. If we would only set validateFilters
        // to false, this query would not yield any results since the generated filter node for the incomplete filter
        // would be an automatic return false for any elements of the filtered data set.
        query = queryEngine.ParseQuery("id<10 dist(");
        Debug.Assert(query.valid, $"Query \"{query.text}\" should be valid.");
        var filteredData = query.Apply(dataset).ToList();
        Debug.Assert(filteredData.Count == 1, $"There should be 1 item in the filtered list but found {filteredData.Count} items.");
        Debug.Assert(filteredData.Contains(dataset[0]), "Test 1 should be in the filtered list since its id is < 10");
    }

    class MyObjectType
    {
        public int id { get; set; }
        public string name { get; set; } = string.Empty;
        public Vector2 position { get; set; } = Vector2.zero;
        public bool active { get; set; }

        public override string ToString()
        {
            return $"({id}, {name}, ({position.x}, {position.y}), {active})";
        }
    }
}
```


            
