This version of Unity is unsupported.



# VisualElementStyleSheetSet





struct in
          UnityEngine.UIElements



/



Implemented in:[UnityEngine.UIElementsModule](UnityEngine.UIElementsModule.html)


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



This structure manipulates the set of [StyleSheet](UIElements.StyleSheet.html) objects attached to the owner [VisualElement](UIElements.VisualElement.html).





[VisualElementStyleSheetSet](UIElements.VisualElementStyleSheetSet.html) instances can't be created directly.
 Use the [VisualElement.styleSheets](UIElements.VisualElement-styleSheets.html) property accessor to work with the style sheets of an element.





### Properties



| Property | Description |
| --- | --- |
| count | Number of style sheets attached to the owner element. |
| this[int] | Reads the value at the specified index in the list of StyleSheet objects attached of the element |





### Public Methods



| Method | Description |
| --- | --- |
| Add | Adds a style sheet for the owner element. |
| Clear | Removes all style sheets for the owner element. |
| Contains | Looks for the specified StyleSheet |
| Equals | Compares instances of the VisualElementStyleSheetSet struct for equality. |
| Insert | Adds a style sheet for the owner element at a specified index |
| Remove | Removes a style sheet for the owner element. |





### Operators



| Operator | Description |
| --- | --- |
| operator != | Compares instances of the VisualElementStyleSheetSet struct for inequality. |
| operator == | Compares instances of the VisualElementStyleSheetSet struct for equality. |


            
