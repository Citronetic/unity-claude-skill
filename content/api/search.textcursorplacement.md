This version of Unity is unsupported.



# TextCursorPlacement





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



Where to place the cursor in the text. (see [ISearchView.SetSearchText](Search.ISearchView.SetSearchText.html)).


              


```
[MenuItem("Examples/ISearchView/SetSearchText_WithCursorPosition")]
public static void SetSearchText_WithCursorPosition()
{
    var view = SearchService.ShowContextual("asset");
    view.SetSearchText("t:material", TextCursorPlacement.MoveLineStart);
}
```





### Properties



| Property | Description |
| --- | --- |
| None | Do not move the cursor. |
| MoveLineEnd | Move the cursor to the end of the line of text. |
| MoveLineStart | Move the cursor to the beginning of the line of text. |
| MoveToEndOfPreviousWord | Move the cursor to the end of the previous word. |
| MoveToStartOfNextWord | Move the cursor to the start of the previous word. |
| MoveWordLeft | Move the cursor one word to the left. |
| MoveWordRight | Move the cursor one word to the right. |
| MoveAutoComplete | Default cursor position (end of the line of text). |
| Default | Do not move the cursor. |


            
