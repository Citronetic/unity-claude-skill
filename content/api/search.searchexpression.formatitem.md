This version of Unity is unsupported.



# [SearchExpression](Search.SearchExpression.html).FormatItem




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

public static string FormatItem([Search.SearchContext](Search.SearchContext.html) ctx,
[Search.SearchItem](Search.SearchItem.html) item,
string formatString);






### Parameters



| Parameter | Description |
| --- | --- |
| ctx | SearchContext that yielded the SearchItem. |
| item | SearchItem to select value from. |
| formatString | Format string that mayh contain selectors. |





### Returns



**string**
        Returns a string where selectors have been replaced by the selected values from a given SearchItem.





### Description



Take a format string and replace all selectors in it with the selected values obtained from a [SearchItem](Search.SearchItem.html).


              


```
[Description("Convert arguments to a string allowing you to format the result.")]
[SearchExpressionEvaluator(SearchExpressionType.Selector | SearchExpressionType.Text, SearchExpressionType.Iterable | SearchExpressionType.Literal | SearchExpressionType.Variadic)]
[SearchExpressionEvaluatorSignatureOverload(SearchExpressionType.Iterable | SearchExpressionType.Literal | SearchExpressionType.Variadic)]
public static IEnumerable<SearchItem> FormatItems(SearchExpressionContext c)
{
    var skipCount = 0;
    if (SearchExpression.GetFormatString(c.args[0], out var formatStr))
        skipCount++;
    var items = c.args.Skip(skipCount).SelectMany(e => e.Execute(c));
    var dataSet = SearchExpression.ProcessValues(items, null, item => SearchExpression.FormatItem(c.search, item, formatStr));
    return dataSet;
}
```


            
