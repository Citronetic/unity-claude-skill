This version of Unity is unsupported.



# [ParsedQuery<T0>](Search.ParsedQuery_1.html).returnPayloadIfEmpty




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












                    public bool returnPayloadIfEmpty;






### Description



Boolean. Indicates if the original payload should be returned when the query is empty.





If set to true, returns the original payload when the query is empty. If set to false, returns an empty array.


              


```
using System.Collections.Generic;
using System.Linq;
using UnityEditor;
using UnityEditor.Search;
using UnityEngine;

static class Example_ParsedQuery_returnPayloadIfEmpty
{
    static List<MyObjectType> s_Data;

    [MenuItem("Examples/ParsedQuery/returnPayloadIfEmpty")]
    public static void RunExample()
    {
        // Set up the query engine
        var queryEngine = new QueryEngine<MyObjectType>();
        queryEngine.AddFilter("id", myObj => myObj.id);
        queryEngine.SetSearchDataCallback(myObj => new[] { myObj.id.ToString(), myObj.name });

        s_Data = new List<MyObjectType>()
        {
            new MyObjectType { id = 0, name = "Test 1", position = new Vector2(0, 0), active = false },
            new MyObjectType { id = 1, name = "Test 2", position = new Vector2(0, 1), active = true }
        };

        // When setting "returnPayloadIfEmpty" to true, empty queries
        // will return the same data set that was passed as input. Otherwise,
        // it will return an empty set.
        var query = queryEngine.ParseQuery("");
        var filteredData = query.Apply(s_Data).ToList();
        Debug.Assert(filteredData.Count == s_Data.Count, "Filtered data should have the same number of items as the input to the query.");
        for (var i = 0; i < filteredData.Count; ++i)
        {
            Debug.Assert(filteredData[i] == s_Data[i], $"Filtered data at index {i} should be the same as the input.");
        }
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


            
