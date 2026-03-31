This version of Unity is unsupported.



# SceneQueryEngineFilterAttribute





class in
          UnityEditor.Search.Providers



/



Inherits from:[Search.QueryEngineFilterAttribute](Search.QueryEngineFilterAttribute.html)


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



Custom attribute is used to customize the search engine used by the scene search provider.





This sample shows to use the `SceneQueryEngineFilter` attribute to customize the search engine used by the scene search provider.

The scene search provider allows the user to search for scene objects using custom filters, such as `is:prefab prefab:modified`, etc.

The following example shows how you can add a property filter `lights>=1` to search meshes that are affected but one or more lights.


              


```
[SceneQueryEngineFilter("lights", new[] { "=", "!=", "<", ">", "<=", ">=" })]
internal static int? MeshRendererAffectedByLightsSceneFilter(GameObject go)
{
    if (!go.TryGetComponent<MeshRenderer>(out var meshRenderer))
        return null;

    if (!meshRenderer.isVisible)
        return null;

    var lightEffectCount = 0;
    var gp = go.transform.position;
    foreach (var light in Object.FindObjectsByType<Light>(FindObjectsSortMode.None))
    {
        if (!light.isActiveAndEnabled)
            continue;

        var lp = light.transform.position;

        var distance = Vector3.Distance(gp, lp);
        if (distance > light.range)
            continue;

        if (light.type == UnityEngine.LightType.Spot)
        {
            var da = Vector3.Dot(light.transform.forward, lp - gp);
            if (da > Mathf.Deg2Rad * light.spotAngle)
                continue;
        }

        lightEffectCount++;
    }

    return lightEffectCount;
}
```





### Constructors



| Constructor | Description |
| --- | --- |
| SceneQueryEngineFilterAttribute | Create a filter with the corresponding token and supported operators. |





### Inherited Members




### Properties

| Property | Description |
| --- | --- |
| comparisonOptions | String comparison options. |
| overridesStringComparison | Flag indicating if the filter overrides the global string comparison options.
Set to true when the comparisonOptions are used. |
| paramTransformerFunction | Name of the parameter transformer function to use with this filter.
Tag the parameter transformer function with the appropriate ParameterTransformer attribute. |
| supportedOperators | List of supported operator tokens. Null for all operators. |
| token | The identifier of the filter. Typically what precedes the operator in a filter (i.e. "id" in "id>=2"). |
| useParamTransformer | Flag indicating if this filter uses a parameter transformer function.
Set to true when paramTransformerFunction is used. |
| useRegularExpressionToken | Indicates if the filter uses a regular expression token or not. |












            
