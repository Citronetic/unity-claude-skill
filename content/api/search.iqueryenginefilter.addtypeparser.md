This version of Unity is unsupported.



# [IQueryEngineFilter](Search.IQueryEngineFilter.html).AddTypeParser




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

public [Search.IQueryEngineFilter](Search.IQueryEngineFilter.html) AddTypeParser(Func<string,ParseResult<TFilterConstant>> parser);






### Parameters



| Parameter | Description |
| --- | --- |
| parser | Callback used to determine if a string can be converted into "TFilterConstant". Takes a string and returns a ParseResult object. This contains the success flag, and the actual converted value if it succeeded. |





### Returns



**IQueryEngineFilter**
        The current filter.





### Description



Add a type parser specific to the filter.





Add a type parser specific to the filter that parses a string and returns a custom type. Used by custom operator handlers. This type parser will only be used by this filter and will not affect other filters.


              


```
// Add a new type parser for Vector2 written as "[x, y]", but only for this filter.
// This type parser will not affect other filters.
queryEngine.TryGetFilter("p", out var filter);
filter.AddTypeParser(s =>
{
    // If the format requirement is not met, return a failure.
    if (!s.StartsWith("[") || !s.EndsWith("]"))
        return ParseResult<Vector2>.none;

    var trimmed = s.Trim('[', ']');
    var vectorTokens = trimmed.Split(',');
    var vectorValues = vectorTokens.Select(token => float.Parse(token, CultureInfo.InvariantCulture.NumberFormat)).ToList();
    if (vectorValues.Count != 2)
        return ParseResult<Vector2>.none;
    var vector = new Vector2(vectorValues[0], vectorValues[1]);

    // When the conversion succeeds, return a success.
    return new ParseResult<Vector2>(true, vector);
});
```





See [IQueryEngineFilter](Search.IQueryEngineFilter.html) for a complete example.


            
