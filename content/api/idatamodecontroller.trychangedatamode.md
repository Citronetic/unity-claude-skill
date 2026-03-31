This version of Unity is unsupported.



# [IDataModeController](IDataModeController.html).TryChangeDataMode




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

public bool TryChangeDataMode([DataMode](DataMode.html) newDataMode);






### Parameters



| Parameter | Description |
| --- | --- |
| newDataMode | The DataMode to which the Editor window should change. |





### Returns



**bool**
        Whether current Editor window has changed to the requested DataMode.





### Description



Requests a [DataMode](DataMode.html) change for the [EditorWindow](EditorWindow.html).





If the DataMode isn't supported or if the DataMode switcher UI isn't set to Automatic, the change request won't work.


            
