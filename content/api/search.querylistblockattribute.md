This version of Unity is unsupported.



# QueryListBlockAttribute





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



This attribute can be used on a class deriving from [QueryListBlock](Search.QueryListBlock.html) to display in query builder mode a special block that will propose a fixed set of values when clicked.





The following example shows how to display a custom list block for the `shader` filter block.


              


```
[QueryListBlock("Decal", "Shader", "shader")]
class ShaderDecalBlockList : QueryListBlock
{
    public ShaderDecalBlockList(IQuerySource source, string id, string value, QueryListBlockAttribute attr)
        : base(source, id, value, attr)
    {
    }

    public override IEnumerable<SearchProposition> GetPropositions(SearchPropositionFlags flags = SearchPropositionFlags.None)
    {
        var shaderIcon = EditorGUIUtility.Load("Shader Icon") as Texture2D;
        yield return new SearchProposition(category: null, "HDRP Decal", "Decal", icon: shaderIcon);
        yield return new SearchProposition(category: null, "URP Decal", "DecalURP", icon: shaderIcon);
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| category | Category. |
| id | Filter id of the block. |
| ids | A set of IDs for which the list block will be displayed. |
| name | Displayed name of the block. |
| op | Default operator assigned to the filter when the value changes. |
| type | The list block type is used to get the the icon to be displayed instead of the block name. |





### Constructors



| Constructor | Description |
| --- | --- |
| QueryListBlockAttribute | Register a list block for a given filter. |


            
