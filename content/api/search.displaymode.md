This version of Unity is unsupported.



# DisplayMode





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



Options for setting the display mode to use for a search view.


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Search;

static class Example_ISearchView_displayMode
{
    [MenuItem("Examples/ISearchView/displayMode")]
    public static void Run()
    {
        // SearchService can open a SearchView.
        var view = SearchService.ShowContextual("asset");

        // You can assign DisplayMode as iconSizeValue...
        view.itemIconSize = (float)DisplayMode.List;

        // ... and this will update displayMode
        Debug.Assert(view.displayMode == DisplayMode.List);
    }
}
```





### Properties



| Property | Description |
| --- | --- |
| None | Unspecified ISearchView display mode. |
| Compact | Display as a compact list view. |
| List | Display as a list view. |
| Grid | Display as a grid of icons of various sizes. |
| Table | Display search results in a table. |


            
