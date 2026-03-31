This version of Unity is unsupported.



# [ParsedQuery<T0>](Search.ParsedQuery_1.html).Test




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

public bool Test(T element);






### Parameters



| Parameter | Description |
| --- | --- |
| element | A single test object. |





### Returns



**bool**
        True if the object passes the query, returns false otherwise.





### Description



Tests the query on a single object. Returns true if the test passes.


              


```
using System.Collections.Generic;
using UnityEditor;
using UnityEditor.Search;
using UnityEngine;

static class Example_ParsedQuery_Test
{
    static List<MyObjectType> s_Data;

    [MenuItem("Examples/ParsedQuery/Test")]
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

        // Test if a single element passes the query.
        var query = queryEngine.ParseQuery("id=1");
        var success = query.Test(s_Data[0]);
        Debug.Assert(!success, $"Test 1 should not pass the test.");
        success = query.Test(s_Data[1]);
        Debug.Assert(success, $"Test 2 should pass the test.");
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


            
