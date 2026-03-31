This version of Unity is unsupported.



# [ISearchView](Search.ISearchView.html).SetSearchText




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

public void SetSearchText(string searchText,
[Search.TextCursorPlacement](Search.TextCursorPlacement.html) moveCursor);






## Declaration

public void SetSearchText(string searchText,
[Search.TextCursorPlacement](Search.TextCursorPlacement.html) moveCursor,
int cursorInsertPosition);






### Parameters



| Parameter | Description |
| --- | --- |
| searchText | Text displayed in the search view. |
| moveCursor | Position of the cursor after setting the search text. |





### Description



Sets the search query text.





[Image: image]
[Image: image].


              


```
using UnityEngine;
using UnityEditor;
using UnityEditor.Search;

static class Example_ISearchView_SetSearchText
{
    [MenuItem("Examples/ISearchView/SetSearchText")]
    public static void SetInitialText()
    {
        var view = SearchService.ShowContextual("asset");

        // Set the initial text of Search view. By default the whole text of the search query will be selected.
        view.SetSearchText("t:prefab");
        Debug.Assert(view.context.searchText == "t:prefab");
    }

    [MenuItem("Examples/ISearchView/SetSearchText_WithCursorPosition")]
    public static void SetSearchText_WithCursorPosition()
    {
        var view = SearchService.ShowContextual("asset");
        view.SetSearchText("t:material", TextCursorPlacement.MoveLineStart);
    }

}
```


            
