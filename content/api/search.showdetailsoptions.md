This version of Unity is unsupported.



# ShowDetailsOptions





enumeration


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



Defines what details are shown in the preview inspector panel for the search view.





[Image: image].


              


```
[SearchItemProvider]
internal static SearchProvider CreateProvider()
{
    return new SearchProvider(id, name)
    {
        filterId = "hex:",
        priority = 99999, // put example provider at a low priority
        showDetailsOptions = ShowDetailsOptions.Description | ShowDetailsOptions.Preview,
        fetchItems = (context, items, provider) =>
        {
            var expression = context.searchQuery;
            if (expression.Length == 6 && IsHex(expression))
            {
                expression = "#" + expression;
                items.Add(provider.CreateItem(context, expression, GetColorName(expression),
                    "Look at this " + GetColorName(expression) + " color!",
                    CreateTextureFromColor(expression, 64, 64), null));
            }
            return null;
        },
        fetchPreview = (item, context, size, options) =>
        {
            return CreateTextureFromColor(item.id, (int)size.x, (int)size.y);
        },
    };
}
```





### Properties



| Property | Description |
| --- | --- |
| None | No options are defined. |
| Preview | Show a large preview. |
| Inspector | Show an embedded inspector for the selected object. |
| Actions | Shows selected item possible actions. |
| Description | Show an extended item description. |
| ListView | Indicates that this search provider wants to display its items in a list view if possible. |
| DefaultGroup | Indicates that the provider will always be displayed as a group (tab) even if the result set is empty. |
| InspectorWithoutHeader | Show an embedded inspector for the selected object. Won't show the editor header. |
| Default | Default set of options used when SearchProvider.showDetails is set to true. |


            
