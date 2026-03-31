This version of Unity is unsupported.



# IDataModeController





interface in
          UnityEditor


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



Interface with which any [EditorWindow](EditorWindow.html) can interact with [DataMode](DataMode.html) functionalities. To obtain an instance, use [EditorWindow.dataModeController](EditorWindow-dataModeController.html).





This interface displays a switch in the docking area when the window is visible and has more than one supported DataModes.





### Properties



| Property | Description |
| --- | --- |
| dataMode | Returns the DataMode currently active for the EditorWindow that owns this instance of IDataModeController. |





### Public Methods



| Method | Description |
| --- | --- |
| TryChangeDataMode | Requests a DataMode change for the EditorWindow. |
| UpdateSupportedDataModes | Updates the list of DataModes that the EditorWindow supports, and sets the preferred DataMode to use when the DataMode switcher UI is set to Automatic. |





### Events



| Event | Description |
| --- | --- |
| dataModeChanged | Event for subscribing to DataMode changes. |


            
