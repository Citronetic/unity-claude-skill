This version of Unity is unsupported.



# SearchSelectorAttribute





class in
          UnityEditor.Search


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



Search selector attribute used to define how a custom value can be selected from a search item.





Here's an example to select the number of line of code of text assets.
> select{p: *.cs, @path, @loc}.


              


```
[SearchSelector("loc", provider: "asset")]
static object SelectLineOfCode(SearchSelectorArgs args)
{
    TextAsset textAsset = args.current.ToObject<TextAsset>();
    if (textAsset)
        return textAsset.text.Split('\n').Length;    return null;
}
```





### Properties



| Property | Description |
| --- | --- |
| cacheable | Set the cacheable property if you do not want the search backend to pull cached values from the property database. |


            
