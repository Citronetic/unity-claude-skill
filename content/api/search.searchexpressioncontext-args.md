This version of Unity is unsupported.



# [SearchExpressionContext](Search.SearchExpressionContext.html).args




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












                    public SearchExpression[] args;






### Description



Arguments of passed to the [SearchExpression](Search.SearchExpression.html) being evaluated.


              


```
[SearchExpressionEvaluator(SearchExpressionType.Iterable | SearchExpressionType.Variadic)]
[SearchExpressionEvaluatorSignatureOverload(SearchExpressionType.Number, SearchExpressionType.Iterable | SearchExpressionType.Variadic)]
[Description("Extract and returns the X first results for each expression.")]
public static IEnumerable<SearchItem> TakeXFirst(SearchExpressionContext c)
{
    var argIndex = 0;
    var takeNumber = 1;
    if (c.args[0].types.HasFlag(SearchExpressionType.Number))
    {
        ++argIndex;
        takeNumber = Math.Max((int)(c.args[0].GetNumberValue(takeNumber)), 0);
    }

    for ( ; argIndex < c.args.Length; ++argIndex)
    {
        var iterable = c.args[argIndex].Execute(c);
        var taken = 0;
        foreach (var item in iterable)
        {
            if (item == null)
                yield return null;
            else
            {
                yield return item;
                ++taken;
                if (taken == takeNumber)
                {
                    c.Break();
                    break;
                }
            }
        }
    }
}
```


            
