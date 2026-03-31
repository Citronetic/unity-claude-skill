This version of Unity is unsupported.



# [SearchAction](Search.SearchAction.html).enabled




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












                    public Func<IReadOnlyCollection<SearchItem>,bool> enabled;






### Description



Callback used to check if the action is enabled based on the current context.


              


```
new SearchAction("scene", "toggle_cast_shadows", new GUIContent("Toggle Cast Shadows", null, "Toggle Cast Shadows on a Mesh"))
{
    // Only enable this action if any of the selected items are actually a GameObject with a MeshRenderer.
    enabled = items =>
    {
        foreach (var searchItem in items)
        {
            var go = searchItem.ToObject<GameObject>();
            if (!go)
                continue;
            var mesh = go.GetComponent<MeshRenderer>();
            if (mesh)
                return true;
        }
        return false;
    },
    // Handler for multiple items: (used when multi selection is used in the Search Window).
    execute = (items) =>
    {
        foreach (var searchItem in items)
        {
            var go = searchItem.ToObject<GameObject>();
            if (!go)
                continue;
            var mesh = go.GetComponent<MeshRenderer>();
            if (!mesh)
                continue;
            mesh.shadowCastingMode = mesh.shadowCastingMode == ShadowCastingMode.Off ? ShadowCastingMode.On : ShadowCastingMode.Off;
        }
    }
},
```


            
