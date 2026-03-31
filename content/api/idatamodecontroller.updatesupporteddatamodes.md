This version of Unity is unsupported.



# [IDataModeController](IDataModeController.html).UpdateSupportedDataModes




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

public void UpdateSupportedDataModes(IList<DataMode> supportedDataMode,
[DataMode](DataMode.html) preferredDataMode);






### Parameters



| Parameter | Description |
| --- | --- |
| supportedDataMode | A list of the supported DataModes. |
| preferredDataMode | Preferred data mode to use given the current context when the DataMode switcher UI is set to Automatic. |





### Description



Updates the list of [DataMode](DataMode.html)s that the [EditorWindow](EditorWindow.html) supports, and sets the preferred DataMode to use when the DataMode switcher UI is set to Automatic.





If the DataMode switcher UI is currently set to Automatic, the Editor window also changes to that preferred DataMode.


            
