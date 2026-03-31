This version of Unity is unsupported.



# AdvancedObjectSelectorValidatorAttribute





class in
          UnityEditor.SearchService


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



This attribute lets you register a custom advanced object selector validator.





An advanced object selector is an object selector that can be customized programatically to be opened on specific object fields, without modifying the object fields themselves. It also allows total control over the UI, so you can create your own search window if you wish to. There are two methods that need to be registered: the object selector handler and the validator. The handler opens the object selector, and the validator validates that the object selector can be opened for the current selection [context](SearchService.ObjectSelectorSearchContext.html). Here is an example using [Search](Search.SearchService.ShowPicker.html) to open a custom object selector only for materials:


              


```
using System;
using System.Linq;
using UnityEditor.Search;
using UnityEditor.SearchService;
using UnityEngine;

static class MaterialSelector
{
    const string MaterialSelectorId = "material_selector";
    static ISearchView s_SearchView;

    [AdvancedObjectSelectorValidator(MaterialSelectorId)]
    static bool HandleAdvancedObjectSelectorValidation(ObjectSelectorSearchContext context)
    {
        // This selector only works for assets.
        if ((context.visibleObjects & VisibleObjects.Assets) == 0)
            return false;

        // This selector only supports materials and their derived types.
        if (!OnlyMaterialTypes(context))
            return false;

        return true;
    }

    [AdvancedObjectSelector(MaterialSelectorId, "Material Selector", 10)]
    static void HandleAdvancedObjectSelector(AdvancedObjectSelectorEventType eventType, in AdvancedObjectSelectorParameters parameters)
    {
        switch (eventType)
        {
            case AdvancedObjectSelectorEventType.BeginSession:
                BeginSession(parameters);
                break;
            case AdvancedObjectSelectorEventType.EndSession:
                EndSession(parameters);
                break;
            case AdvancedObjectSelectorEventType.SetSearchFilter:
                SetSearchFilter(parameters);
                break;
            case AdvancedObjectSelectorEventType.OpenAndSearch:
                OpenSelector(parameters);
                break;
        };
    }

    static void BeginSession(in AdvancedObjectSelectorParameters parameters)
    {
        // Here you can cache some data if needed.
    }

    static void EndSession(in AdvancedObjectSelectorParameters parameters)
    {
        // Here you can clear the cached data if needed.
        // EndSession can be called in two ways:
        // 1. Naturally when the selectorClosedHandler is called upon closing the window (which you should do in your window if you don't use Search).
        // 2. Forcefully when a new session is started before the current one is finished.
        // In the second case, we need to close the window to avoid any issues since the ObjectSelector API does not support concurrent selectors.
        if ((parameters.context.endSessionModes & ObjectSelectorSearchEndSessionModes.CloseSelector) != 0)
        {
            s_SearchView?.Close();
        }

        s_SearchView = null;
    }

    static void SetSearchFilter(in AdvancedObjectSelectorParameters parameters)
    {
        // Here you can handle the request to set a new search filter.
        s_SearchView?.SetSearchText(parameters.searchFilter);
    }

    static void OpenSelector(in AdvancedObjectSelectorParameters parameters)
    {
        var selectContext = parameters.context;
        var selectorCloseHandler = parameters.selectorClosedHandler;
        var trackingHandler = parameters.trackingHandler;

        // This selector handles any kind of materials, but if a specific material type is passed
        // in the context, then only this type of material will be shown.
        var searchText = string.Join(" or ", selectContext.requiredTypeNames.Select(typeName => $"t={typeName}"));
        var searchContext = SearchService.CreateContext("asset", searchText);
        var viewState = SearchViewState.CreatePickerState("Material",
            searchContext,
            selectHandler: (item, canceled) => selectorCloseHandler(item?.ToObject(), canceled),
            trackingHandler: (item) => trackingHandler(item?.ToObject()), null);
        viewState.windowTitle = new GUIContent("Material Selector");
        viewState.position = SearchUtils.GetMainWindowCenteredPosition(new Vector2(600, 400));
        s_SearchView = SearchService.ShowPicker(viewState);
    }

    static bool OnlyMaterialTypes(ObjectSelectorSearchContext context)
    {
        var requiredTypes = context.requiredTypes.Zip(context.requiredTypeNames, (type, name) => new Tuple<Type, string>(type, name));
        return requiredTypes.All(typeAndName =>
        {
            return typeAndName.Item1 != null && typeof(Material).IsAssignableFrom(typeAndName.Item1) ||
                typeAndName.Item2.Contains("material", StringComparison.OrdinalIgnoreCase);
        });
    }
}
```





The signature of the method registered with the attribute [AdvancedObjectSelectorAttribute](SearchService.AdvancedObjectSelectorAttribute.html) must be the following:


              


```
static void HandleAdvancedObjectSelector(AdvancedObjectSelectorEventType eventType, in AdvancedObjectSelectorParameters parameters)
```





The signature of the method registered with the attribute [AdvancedObjectSelectorValidatorAttribute](SearchService.AdvancedObjectSelectorValidatorAttribute.html) must be the following:


              


```
static bool HandleAdvancedObjectSelectorValidation(ObjectSelectorSearchContext context)
```





**Note**: Those custom advanced object selectors are only active when the Object Selector Engine is set to "Advanced" (see **Preferences/Search** settings page).





### Constructors



| Constructor | Description |
| --- | --- |
| AdvancedObjectSelectorValidatorAttribute | Registers a method to act as an advanced object selector validator. |


            
