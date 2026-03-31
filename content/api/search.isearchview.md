This version of Unity is unsupported.



# ISearchView





interface in
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



Search view interface used by the search context to execute UI operations.





### Properties



| Property | Description |
| --- | --- |
| context | Returns the current view search context. |
| currentGroup | Indicates the current group that is selected by the user. |
| displayMode | Indicates how the data is displayed in the UI. |
| filterCallback | Callback used to filter items shown in the list. |
| itemIconSize | Defines the size of items in the search view. |
| multiselect | Allows multi-selection of items in the list/grid of items. If false, a user can only select a single item. |
| position | Returns the absolute position of the Search window. |
| results | Returns the list of all search results. |
| searchInProgress | Indicates that the search view is currently running a query and it has not yet completed. |
| selectCallback | Callback used to override a default Search behavior. |
| selection | Returns the selected items in the view. |
| state | Returns the view model state of the Search Window. |
| trackingCallback | Callback used to override the tracking behavior. |





### Public Methods



| Method | Description |
| --- | --- |
| AddSelection | Adds new items to the current selection. |
| Close | Closes the search view. |
| ExecuteAction | Executes a Search action on a given list of items. |
| ExecuteSelection | Execute the default action of the active selection. |
| Focus | Make sure the Search window is now selected to receive input from a user. |
| FocusSearch | Focus the search text field control. |
| IsPicker | Indicates if the search view is being used as an advanced search picker. |
| Refresh | Triggers a refresh of the search view and refetches all the search items from enabled search providers. |
| Repaint | Requests the search view to repaint itself. |
| SelectSearch | Puts focus in the SearchView text field AND selects all the text inside the text field (if any). |
| SetColumns | Sets the search view property table columns. |
| SetSearchText | Sets the search query text. |
| SetSelection | Updates the search view with a new selection. |
| ShowItemContextualMenu | Shows a contextual menu for the specified item. |


            
