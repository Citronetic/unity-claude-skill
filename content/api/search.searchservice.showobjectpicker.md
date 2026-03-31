This version of Unity is unsupported.



# [SearchService](Search.SearchService.html).ShowObjectPicker




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

public static [Search.ISearchView](Search.ISearchView.html) ShowObjectPicker(Action<Object,bool> selectHandler,
Action<Object> trackingHandler,
string searchText,
string typeName,
Type filterType,
float defaultWidth,
float defaultHeight,
[Search.SearchFlags](Search.SearchFlags.html) flags);






### Parameters



| Parameter | Description |
| --- | --- |
| selectHandler | Callback to trigger when a user selects an item. |
| trackingHandler | Callback to trigger when the user is modifying a Search selection (i.e. tracking the currently selected item). |
| searchText | Initial search text. |
| typeName | Type name of the object to select. Can be used to replace filterType. |
| filterType | Type of the object to select. |
| defaultWidth | Initial width of the window. |
| defaultHeight | Initial height of the window. |
| flags | Options defining how the query is performed. |





### Returns



**ISearchView**
        Returns the search view window instance.





### Description



Open a Search Picker window for Unity objects.





Use Search as an object picker to select any Unity object based on the specified filter type. For a more generic picker, please use [SearchService.ShowPicker](Search.SearchService.ShowPicker.html).


            
