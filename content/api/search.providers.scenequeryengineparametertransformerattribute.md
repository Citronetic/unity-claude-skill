This version of Unity is unsupported.



# SceneQueryEngineParameterTransformerAttribute





class in
          UnityEditor.Search.Providers



/



Inherits from:[Search.QueryEngineParameterTransformerAttribute](Search.QueryEngineParameterTransformerAttribute.html)


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



















### Description



Attribute class that defines a custom parameter transformer function applied for a query running in a scene provider defined by a scene custom filter using [SceneQueryEngineFilterAttribute](Search.Providers.SceneQueryEngineFilterAttribute.html).


              


```
[SceneQueryEngineParameterTransformer]
static Vector3 DistanceParamHandler(string param)
{
    if (param == "selection")
    {
        var centerPoint = Selection.gameObjects.Select(go => go.transform.position).Aggregate((v1, v2) => v1 + v2);
        centerPoint /= Selection.gameObjects.Length;
        return centerPoint;
    }

    if (param.StartsWith("[") && param.EndsWith("]"))
    {
        param = param.Trim('[', ']');
        var vectorTokens = param.Split(',');
        var vectorValues = vectorTokens.Select(token => float.Parse(token, CultureInfo.InvariantCulture.NumberFormat)).ToList();
        while (vectorValues.Count < 3)
            vectorValues.Add(0f);
        return new Vector3(vectorValues[0], vectorValues[1], vectorValues[2]);
    }

    var obj = GameObject.Find(param);
    if (!obj)
        return Vector3.zero;
    return obj.transform.position;
}
```





Used with


              


```
[SceneQueryEngineFilter("dist", "DistanceParamHandler", new[] {"=", "!=", "<", ">", "<=", ">="})]
static float DistanceHandler(GameObject go, Vector3 p)
{
    return (go.transform.position - p).magnitude;
}
```





### Inherited Members














            
