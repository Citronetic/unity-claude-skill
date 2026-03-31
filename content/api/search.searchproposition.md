This version of Unity is unsupported.



# SearchProposition





struct in
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



Search propositions are used to display choices to the user to add new filters to a search query.


              


```
static IEnumerable<SearchProposition> EnumerateDecalPropositions(SearchContext context, SearchPropositionOptions options)
{
    if (!options.flags.HasAny(SearchPropositionFlags.QueryBuilder))
        yield break;

    var shaderIcon = EditorGUIUtility.Load("Shader Icon") as Texture2D;
    yield return new SearchProposition(category: "Affects", label: "Base Color", replacement: "affectalbedo=1", icon: shaderIcon);
    yield return new SearchProposition(category: "Affects", label: "Normal", replacement: "affectnormal=1", icon: shaderIcon);
    yield return new SearchProposition(category: "Affects", label: "Metal", replacement: "affectmetal=1", icon: shaderIcon);
    yield return new SearchProposition(category: "Affects", label: "Ambient Occlusion", replacement: "affectao=1", icon: shaderIcon);
    yield return new SearchProposition(category: "Affects", label: "Smoothness", replacement: "affectsmoothness=1", icon: shaderIcon);
    yield return new SearchProposition(category: "Affects", label: "Emission", replacement: "affectemission=1", icon: shaderIcon);
}
```





### Properties



| Property | Description |
| --- | --- |
| data | The data field can hold any user data that the user can retrieve later to determine the nature of the proposition. |





### Constructors



| Constructor | Description |
| --- | --- |
| SearchProposition | Create a new search proposition. |


            
